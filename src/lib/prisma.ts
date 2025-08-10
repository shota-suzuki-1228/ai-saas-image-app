import { PrismaTiDBCloud } from '@tidbcloud/prisma-adapter';
import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';

// setup
dotenv.config();
const connectionString = `${process.env.DATABASE_URL}`;

// Initialize Prisma Client
const adapter = new PrismaTiDBCloud({ url: connectionString });
export const prisma = new PrismaClient({ adapter });