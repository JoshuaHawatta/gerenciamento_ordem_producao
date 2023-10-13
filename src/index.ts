import { PrismaClient } from "@prisma/client";
import chalk from "chalk";
import questionPrompt from "./promt";
import checkAvailableMaterials from "./helpers/check-available-materials.helper";
import printProductionOrder from "./helpers/print-production-order.helper";
import readLine from "./read-line";

const prisma = new PrismaClient();

const main = async () => {
  console.log(chalk.green("Sistema de Gerenciamento de Ordens de Produção"));

  while (true) {
    console.log(chalk.yellow("Menu:"));
    console.log("1. Registrar nova ordem de produção");
    console.log("2. Listar todas as ordens");
    console.log("3. Atualizar status de uma ordem");
    console.log("4. Visualizar relatórios de produção");
    console.log("exit. Sair");

    const choice = await questionPrompt("Selecione uma opção: ");

    switch (choice) {
      case "1":
        const product = await questionPrompt("Informe o produto: ");
        const quantity = parseInt(await questionPrompt("Informe a quantidade: "));

        if (!checkAvailableMaterials()) {
          console.log(chalk.bgRed.black("Produção não é possível devido à falta de materiais."));
          continue;
        }

        const deliveryDate = new Date(await questionPrompt("Informe a data de entrega (YYYY-MM-DD): "));

        await prisma.productionOrder.create({
          data: {
            product,
            quantity,
            deliveryDate,
            status: "in_progress",
          },
        });

        console.log(chalk.bgGreen.black("Ordem de produção registrada."));
        break;

      case "2":
        const orders = await prisma.productionOrder.findMany();

        console.log(chalk.bgMagenta.white("Ordens de Produção:"));

        orders.forEach(order => console.log(printProductionOrder(order)));
        break;

      case "3":
        const id = parseInt(await questionPrompt("Informe o ID da ordem de produção: "));
        const status = await questionPrompt('Informe o novo status ("in_progress" ou "completed"): ');

        if (!["in_progress", "completed"].includes(status)) {
          console.log(chalk.bgGreen.black("Status inválido!"));
          continue;
        }

        try {
          await prisma.productionOrder.update({ where: { id }, data: { status } });
          console.log(chalk.bgGreen.black("Status atualizado."));
          continue;
        } catch (_) {
          console.log(chalk.bgRed.black("Erro ao atualizar. Verifique o ID e tente novamente."));
          continue;
        }
      case "4":
        const [inProgress, completed] = await Promise.all([
          prisma.productionOrder.findMany({ where: { status: "in_progress" } }),
          prisma.productionOrder.findMany({ where: { status: "completed" } }),
        ]);

        console.log(chalk.bgCyan.white("Ordens em Andamento:"));

        inProgress.forEach(order => console.log(printProductionOrder(order)));

        console.log(chalk.bgGreen.black("Ordens Concluídas:"));

        completed.forEach(order => console.log(printProductionOrder(order)));
        break;
      case "exit":
        readLine.close();

        await prisma.$disconnect();
        process.exit(0);
      default:
        console.log(chalk.bgRed.black("Opção inválida."));
    }
  }
};

main();
