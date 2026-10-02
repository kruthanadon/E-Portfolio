"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

// Type ของข้อมูลที่รับมาจากฟอร์มหน้าบ้าน
export interface AchievementInput {
  studentId: string;
  title: string;
  description?: string;
  category: "ACADEMIC" | "SPORTS" | "ARTS" | "VOLUNTEER" | "LEADERSHIP";
  eventDate?: string;
  certificateUrl?: string;
  isFeatured?: boolean;
}

/**
 * ดึงรายการผลงานทั้งหมดของนักเรียน
 * @param studentId - รหัสนักเรียน
 */
export async function getStudentAchievements(studentId: string) {
  try {
    const achievements = await db.achievement.findMany({
      where: { studentId },
      orderBy: { createdAt: "desc" }, // เรียงจากล่าสุดไปเก่าสุด
    });
    return { success: true, data: achievements };
  } catch (error) {
    console.error("Error fetching achievements:", error);
    return { success: false, error: "ไม่สามารถดึงข้อมูลผลงานได้" };
  }
}

/**
 * เพิ่มผลงานใหม่ของนักเรียนลงใน Database
 * @param input - ข้อมูลผลงานจากหน้าฟอร์ม
 */
export async function createAchievement(input: AchievementInput) {
  try {
    const newAchievement = await db.achievement.create({
      data: {
        studentId: input.studentId,
        title: input.title,
        description: input.description,
        category: input.category,
        eventDate: input.eventDate ? new Date(input.eventDate) : null,
        certificateUrl: input.certificateUrl,
        isFeatured: input.isFeatured || false,
      },
    });

    // ล้าง Cache หน้า Dashboard เพื่อให้แสดงผลงานใหม่ทันทีโดยไม่ต้อง Refresh หน้าเว็บ
    revalidatePath("/dashboard");

    return { success: true, data: newAchievement };
  } catch (error) {
    console.error("Error creating achievement:", error);
    return { success: false, error: "เกิดข้อผิดพลาดในการบันทึกข้อมูล" };
  }
}