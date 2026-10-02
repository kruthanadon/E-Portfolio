import Image from "next/image";
import { Award, Calendar, ExternalLink } from "lucide-react";

// กำหนด Type ของ Props ชัดเจน เพื่อให้นิสิตส่ง Data มาใช้งานได้ถูกต้อง
interface AchievementCardProps {
  title: string;
  description?: string;
  category: "ACADEMIC" | "SPORTS" | "ARTS" | "VOLUNTEER" | "LEADERSHIP";
  eventDate?: string;
  imageUrl?: string;
  isFeatured?: boolean;
}

// Map ค่า Enum Category เป็นข้อความภาษาไทยและสี Badge ที่เหมาะสม
const categoryMap = {
  ACADEMIC: { label: "วิชาการ", color: "bg-blue-100 text-blue-800" },
  SPORTS: { label: "กีฬา", color: "bg-orange-100 text-orange-800" },
  ARTS: { label: "ศิลปะ/วัฒนธรรม", color: "bg-pink-100 text-pink-800" },
  VOLUNTEER: { label: "จิตอาสา", color: "bg-green-100 text-green-800" },
  LEADERSHIP: { label: "ผู้นำกิจกรรม", color: "bg-purple-100 text-purple-800" },
};

export function AchievementCard({
  title,
  description,
  category,
  eventDate,
  imageUrl,
  isFeatured = false,
}: AchievementCardProps) {
  const currentCategory = categoryMap[category] || categoryMap.ACADEMIC;

  return (
    <div className="relative flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md">
      {/* Badge ไฮไลท์พิเศษ */}
      {isFeatured && (
        <span className="absolute right-3 top-3 z-10 rounded-full bg-amber-500 px-2.5 py-0.5 text-xs font-semibold text-white shadow">
          ผลงานเด่น
        </span>
      )}

      {/* รูปภาพผลงาน/เกียรติบัตร */}
      <div className="relative h-48 w-full bg-gray-100">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center text-gray-400">
            <Award className="h-12 w-12 stroke-[1.5]" />
            <span className="mt-1 text-xs">ไม่มีรูปภาพประกอบ</span>
          </div>
        )}
      </div>

      {/* รายละเอียดผลงาน */}
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 flex items-center justify-between">
          <span className={`rounded-md px-2.5 py-1 text-xs font-medium ${currentCategory.color}`}>
            {currentCategory.label}
          </span>
          {eventDate && (
            <span className="flex items-center text-xs text-gray-500">
              <Calendar className="mr-1 h-3.5 w-3.5" />
              {eventDate}
            </span>
          )}
        </div>

        <h3 className="line-clamp-1 text-lg font-bold text-gray-900">{title}</h3>
        
        {description && (
          <p className="mt-2 line-clamp-2 text-sm text-gray-600">
            {description}
          </p>
        )}

        <div className="mt-auto pt-4">
          <button
            type="button"
            className="inline-flex w-full items-center justify-center rounded-lg bg-gray-50 px-3 py-2 text-xs font-medium text-gray-700 transition-colors hover:bg-gray-100"
          >
            ดูรายละเอียดเกียรติบัตร
            <ExternalLink className="ml-1.5 h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}