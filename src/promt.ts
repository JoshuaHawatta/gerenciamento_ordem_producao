import chalk from "chalk";
import readLine from "./read-line";

const questionPrompt = (question: string): Promise<string> =>
  new Promise(resolve => readLine.question(chalk.blueBright(question) as string, answer => resolve(answer)));

export default questionPrompt;
