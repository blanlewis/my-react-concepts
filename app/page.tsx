"use client";
import CommonMiniDrawerLayout from "@/components/CommonMiniDrawerLayout";
export default function Home() {
  return (
      <CommonMiniDrawerLayout
        appHeaderTitle="Learning Next JS"
        firstListItems={[
          { label: 'Next JS Basics', route: '/nextJsBasics' },
          { label: 'React Hooks', route: '/reactHooks' },
          { label: 'Context', route: '/context' },
          { label: 'MUI Components', route: '/muiComponents' },
        ]}
        secondaryListItems={[
          { label: 'Browser dev tools', route: '/browserDevTools' },
          { label: 'React extensions', route: '/reactExtensions' },
          { label: 'Hacks', route: '/hacks' },
        ]}
      />
  );
}
