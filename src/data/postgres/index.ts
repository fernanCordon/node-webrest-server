import { PrismaClient } from "@prisma/client";

// 1 Creo carpeta src/data/
// Creo carpeta src/data/postgres/
// Creo archivo index.ta es postgres/ Será como un archivo de barril

export const prisma = new PrismaClient();