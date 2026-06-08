"use client";
import {CustomHookProvider} from "@/app/utils/context";
import MyReactConceptLayout from "@/app/MyReactConceptLayout/MyReactConceptLayout";

export default function Home() {
  return (
    <CustomHookProvider>
      <MyReactConceptLayout />
    </CustomHookProvider>
  );
}

