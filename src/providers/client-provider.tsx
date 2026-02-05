"use client";

import { useRouter } from "next/navigation";
import { HeroUIProvider } from "@heroui/react";

type Props = { children: React.ReactNode }

export default function ClientProvider({ children }: Props) {
  const router = useRouter();

  return (
    <HeroUIProvider navigate={router.push}>
      {children}
    </HeroUIProvider>
  )
}