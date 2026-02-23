"use client";
import { Image } from "@heroui/react"
import Typography from "@/components/typography"

type Props = {
  name: string
  role: string
  avatar: string
}

export default function AthleteCard({ name, role, avatar }: Props) {
  return (
    <div className="flex flex-col items-center cursor-pointer">
      <div className="mb-4 w-[170px] h-[170px] overflow-hidden rounded-full border-zinc-100">
        <Image
          alt={name}
          src={avatar}
          className="w-[170px] h-[170px] rounded-full object-cover object-center aspect-square border-4 border-[#EBEBEB]"
        />
      </div>

      <Typography variant="h4" className="leading-[1.55] mb-1">
        {name}
      </Typography>

      <Typography variant="body4" className="text-zinc-400 leading-[1.55]">
        {role}
      </Typography>
    </div>
  )
}