// app/dashboard/page.tsx

import { auth } from "@/lib/auth";
import DashboardClient from "../dashboard/dashboardClient";
import { redirect } from "next/navigation";
import { headers } from "next/headers";

const DashboardPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    // If no user is found in the session, redirect to auth page
    redirect("/auth");
  }

  return <DashboardClient user={session.user} />;
};

export default DashboardPage;
