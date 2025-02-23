"use client";

// import { useEffect } from "react";
// import { useRouter } from "next/navigation";

import { AchievementCard } from "@/components/AchievementCard";
import { LevelCard } from "@/components/LevelCard";

export default function UserHome({ params }: { params: { user_name: string } }) {
  // const router = useRouter();
  const user_name = params.user_name;

  const levelData = [
    { category: "frontend", level: 7 },
    { category: "backend", level: 5 },
    { category: "infrastructure", level: 8 },
    { category: "CI/CD", level: 6 }
  ];

  // useEffect(() => {
  //   const storedUser = localStorage.getItem("user");
  //   if (!storedUser || storedUser !== user_name) {
  //     router.push("/login");
  //   }
  // }, [user_name, router]);

  return (
    <div className="container mt-5">
      <h2>{user_name} のホーム</h2>
      <p>積読を減らして、経験値を貯めよう！！📚✨</p>
      <AchievementCard
        icon='menu_book'
        achievement="66"
        category="book"
      />
      <LevelCard LevelInfoArray={levelData} />
    </div>
  );
}
