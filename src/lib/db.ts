import { PrismaClient } from "@prisma/client";

/**
 * ประกาศ Type เพื่อขยาย globalThis ให้จำค่า prisma instance ได้
 * ป้องกันไม่ให้ TypeScript แจ้งเตือน Error
 */
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

/**
 * สร้างหรือใช้ PrismaClient ตัวเดิม
 * - ในโหมด Production: จะสร้าง Instance ใหม่เสมอ
 * - ในโหมด Development: จะใช้ตัวเดิมใน Memory เพื่อไม่ให้เปิด Connection ใหม่ทุกครั้งที่แก้โค้ด (Hot Reload)
 */
export const db =
  globalForPrisma.prisma ??
  new PrismaClient({
    log:
      process.env.NODE_ENV === "development"
        ? ["query", "error", "warn"]
        : ["error"],
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = db;