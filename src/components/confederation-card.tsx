"use client";
import { Image } from "@heroui/react"
import Typography from "@/components/typography"

type Props = {
  title: string
  subtitle: string
  src: string
}

export default function ConfederationCard({ title, subtitle, src } : Props) {
  return (
    <div className="flex flex-col items-center gap-3">
      <Image
        src={src}
        width={140}
        className="mb-3"
        alt={title + subtitle}
      />

      <div className="flex-col flex gap-2 items-center">
        <Typography className="font-medium">{title}</Typography>
        <Typography className="font-medium">{subtitle}</Typography>
      </div>
    </div>
  )
}