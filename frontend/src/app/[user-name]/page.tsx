"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function UserHome({ params }: { params: { user_name: string } }) {
  const router = useRouter();
  const user_name = params.user_name;

  // useEffect(() => {
  //   const storedUser = localStorage.getItem("user");
  //   if (!storedUser || storedUser !== user_name) {
  //     router.push("/login");
  //   }
  // }, [user_name, router]);

  return (
    <div className="container mt-5">
      <h2>{user_name} のホーム</h2>
      <p>積読を減らして、経験値を貯めよう！📚✨</p>
    </div>
  );
}
