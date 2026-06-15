"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import CommonMiniDrawerLayout from "@/components/CommonMiniDrawerLayout";
import { useCustomHook } from "@/app/utils/hook";

const AppWrapper = ({ children }: { children: React.ReactNode }) => {
  const { fetchCustomHookData } = useCustomHook();
  const pathname = usePathname();

  useEffect(() => {
    fetchCustomHookData();
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