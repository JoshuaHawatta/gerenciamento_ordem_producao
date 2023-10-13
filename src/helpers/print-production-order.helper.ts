import ProuctionOrder from "../types/production-order.interface";

const printProductionOrder = ({ id, product, quantity, status, deliveryDate }: ProuctionOrder) =>
  `[ID: ${id}, Produto: ${product}, Quantidade: ${quantity}, Data de Entrega: ${deliveryDate}, status: ${status}]`;

export default printProductionOrder;
