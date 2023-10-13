-- CreateTable
CREATE TABLE "ProductionOrder" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "product" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "deliveryDate" DATETIME NOT NULL,
    "status" TEXT NOT NULL
);
