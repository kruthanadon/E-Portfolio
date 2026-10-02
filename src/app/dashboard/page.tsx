import { AchievementCard } from "@/components/portfolio/AchievementCard";
import { Plus, FolderKanban, Award, Share2 } from "lucide-react";

export default async function DashboardPage() {
  // Mock Data ผลงานสำหรับทดสอบ UI หน้าบ้าน
  const mockAchievements = [
    {
      id: "1",
      title: "เหรียญทอง การแข่งขันพัฒนาแอปพลิเคชัน ระดับชาติ",
      description: "ได้รับรางวัลชนะเลิศอันดับ 1 ในการแข่งขันพัฒนา E-Portfolio Application สำหรับนักเรียน",
      category: "ACADEMIC" as const,
      eventDate: "15 ม.ค. 2026",
      imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&auto=format&fit=crop",
      isFeatured: true,
    },
    {
      id: "2",
      title: "ประธานค่ายจิตอาสาพัฒนาโรงเรียนน้องประจำปี 2025",
      description: "นำทีมเพื่อนๆ นักเรียนกว่า 50 คน ร่วมปรับปรุงอาคารเรียนและห้องหนังสือให้โรงเรียนขนาดเล็ก",
      category: "VOLUNTEER" as const,
      eventDate: "10 ธ.ค. 2025",
      isFeatured: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50/50 p-6 md:p-10">
      <div className="mx-auto max-w-6xl space-y-8">
        
        {/* Header Section */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">
              จัดการ E-Portfolio
            </h1>
            <p className="mt-1 text-sm text-gray-500">
              รวบรวมผลงาน เกียรติบัตร และกิจกรรมเพื่อเตรียมยื่นเข้ามหาวิทยาลัย
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50"
            >
              <Share2 className="mr-2 h-4 w-4" />
              แชร์ลิงก์ Portfolio
            </button>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700"
            >
              <Plus className="mr-2 h-4 w-4" />
              เพิ่มผลงานใหม่
            </button>
          </div>
        </div>

        {/* Overview Stats (UX Focus: สรุปข้อมูลภาพรวมให้นักเรียนเห็นได้ทันที) */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
              <FolderKanban className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xs font-medium text-gray-500">ผลงานทั้งหมด</p>
              <p className="text-2xl font-bold text-gray-900">2 รายการ</p>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-50 text-amber-600">
              <Award className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xs font-medium text-gray-500">ผลงานเด่น (Featured)</p>
              <p className="text-2xl font-bold text-gray-900">1 รายการ</p>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-50 text-green-600">
              <Share2 className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xs font-medium text-gray-500">จำนวนผู้เข้าชม</p>
              <p className="text-2xl font-bold text-gray-900">124 ครั้ง</p>
            </div>
          </div>
        </div>

        {/* Achievement List Section */}
        <div className="space-y-4">
          <h2 className="text-lg font-bold text-gray-900">รายการผลงานและเกียรติบัตร</h2>
          
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {mockAchievements.map((item) => (
              <AchievementCard
                key={item.id}
                title={item.title}
                description={item.description}
                category={item.category}
                eventDate={item.eventDate}
                imageUrl={item.imageUrl}
                isFeatured={item.isFeatured}
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}