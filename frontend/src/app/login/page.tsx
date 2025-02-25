"use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";

import { LoginForm } from "@/app/login/LoginForm";

export default function LoginPage() {
  // const router = useRouter();
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");

  // const handleLogin = async (e: React.FormEvent) => {
  //   e.preventDefault();

  //   // ここでは仮の認証処理（本番ではAPIリクエストを使う）
  //   if (username === "hogehoge" && password === "password") {
  //     // localStorage.setItem("user", username); // ログイン情報を保存
  //     router.push(`/${username}`); // `/hogehoge` にリダイレクト
  //   } else {
  //     alert("ログイン失敗");
  //   }
  // };

  // return (
  //   <div className="container mt-5">
  //     <h2>ログイン</h2>
  //     <form onSubmit={handleLogin}>
  //       <div className="mb-3">
  //         <label className="form-label">ユーザー名</label>
  //         <input
  //           type="text"
  //           className="form-control"
  //           value={username}
  //           onChange={(e) => setUsername(e.target.value)}
  //           required
  //         />
  //       </div>
  //       <div className="mb-3">
  //         <label className="form-label">パスワード</label>
  //         <input
  //           type="password"
  //           className="form-control"
  //           value={password}
  //           onChange={(e) => setPassword(e.target.value)}
  //           required
  //         />
  //       </div>
  //       <button type="submit" className="btn btn-primary">ログイン</button>
  //     </form>
  //   </div>
  // );

  return (
    <LoginForm />
  );
}
