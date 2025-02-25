"use client";

import { useEffect } from "react";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const { user, isLoading } = useCurrentUser();

  const router = useRouter();

  useEffect(() => {
    if (!isLoading && (!user || !user.name)) {
      router.push("/login");
    }
  }, [user, router, isLoading]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (user == null) return <></>;
  if (user) {
    router.push(`/${user.name}`);
  }
}
