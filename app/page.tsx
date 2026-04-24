"use client";
import CommonMiniDrawerLayout from "@/components/CommonMiniDrawerLayout";
export default function Home() {
  return (
      <CommonMiniDrawerLayout
        appHeaderTitle="Learning Next JS"
        firstListItems={['Next JS Basics', 'React Hooks', 'Context', 'MUI Components']}
        secondaryListItems={['Browser dev tools', 'React extensions', 'Hacks']}
      />
  );
}
