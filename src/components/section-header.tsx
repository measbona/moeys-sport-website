"use client";
import { ReactNode } from "react";
import { MoveRight } from "lucide-react";
import clsx from "clsx";

import Typography from "@/components/typography"

type SeeMoreProps = {
  label: string
  href?: string
  onClick?: () => void
}

type Props = {
  title: string
  mainWrapper?: string
  titleAlign?: "start" | "center"
  seeMore?: SeeMoreProps
  children?: ReactNode;
}

export default function SectionHeader({ title, seeMore, titleAlign = "start", children, mainWrapper }: Props) {
  const hasSeeMore = Boolean(seeMore)

  return (
    <div className={clsx(mainWrapper, "py-10")}>
      <div className={clsx("flex items-center justify-between mx-auto w-full max-w-6xl mb-10", {
        ["justify-center"]: titleAlign === "center" && !seeMore,
        ["justify-start"]: titleAlign === "start" && !seeMore
      })}>
        <Typography variant="h2">{title}</Typography>

        {hasSeeMore && (
          <div className="flex items-center gap-2 cursor-pointer group" onClick={seeMore?.onClick}>
            <Typography variant="body1" className="text-[#349FD8] group-hover:underline">
              {seeMore?.label}
            </Typography>
            <MoveRight className="text-[#349FD8]" />
          </div>
        )}
      </div>

      {children && (
        <div className="mx-auto w-full max-w-6xl">
          {children}
        </div>
      )}
    </div>
  )
}