"use client";
import { ThemeProvider } from "next-themes";
import React, { useEffect, useState } from "react";

const FixTheme = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
};

export default FixTheme;
