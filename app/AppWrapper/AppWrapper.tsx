"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";

const CommonMiniDrawerLayout = dynamic(
  () => import("@/components/CommonMiniDrawerLayout"),
  { ssr: false }
);
import { useCustomHook } from "@/app/utils/hook";

const AppWrapper = ({ children }: { children: React.ReactNode }) => {
  const { fetchCustomHookData } = useCustomHook();
  const pathname = usePathname();
  console.log("Current pathname:", pathname);

  useEffect(() => {
    fetchCustomHookData(pathname);
  }, [pathname]);

  return (
    <CommonMiniDrawerLayout
      appHeaderTitle="Learning Next JS"
      firstListItems={[
        { label: "Next JS Basics", route: "/nextJsBasics" },
      ]}
      secondaryListItems={[]}
      appBody={children}
    />
  );
};

export default AppWrapper;