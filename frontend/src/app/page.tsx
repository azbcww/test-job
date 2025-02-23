"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      // ユーザーがログイン済みなら `/{user_name}` にリダイレクト
      router.push(`/${storedUser}`);
    } else {
      // 未ログインなら `/login` にリダイレクト
      router.push("/login");
    }

    setLoading(false);
  }, [router]);

  if (loading) return <div className="container mt-5">Loading...</div>;

  return null; // 画面には何も表示しない（リダイレクトのみ）
}
