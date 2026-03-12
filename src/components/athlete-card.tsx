"use client";
import { Divider, Image } from "@heroui/react"
import Typography from "@/components/typography"
import { toKhmerNumber } from "@/utils/to-khmer-number";

type Props = {
  name: string
  role: string
  avatar: string
  position: string
  age: number
  height: number
  gender: string
  clubName: string
}

export default function AthleteCard({ name, role, avatar, position, age, height, gender, clubName }: Props) {
  return (
    <div className="group [perspective:1000px] cursor-pointer">
      <div className="relative h-[260px] w-[200px] transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Front */}
        <div className="absolute inset-0 flex flex-col items-center justify-center [backface-visibility:hidden]">
          <div className="mb-4 w-[170px] h-[170px] overflow-hidden rounded-full">
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

        {/* Back */}
        <div className="absolute inset-1.5 flex flex-col rounded-2xl bg-white shadow-md text-black [transform:rotateY(180deg)] [backface-visibility:hidden] py-5">
          <div className="text-center">
            <Typography variant="h5" className="font-semibold mb-3">
              {name}
            </Typography>

            <Typography variant="body4" className="text-zinc-400">
              ព័ត៌មានលម្អិត
            </Typography>
          </div>

          <Divider className="my-4 text-zinc-200" />

          <div className="space-y-2 text-sm px-2.5">
            <div className="flex justify-between">
              <Typography variant="body4" className="text-zinc-400">
                តួនាទី:
              </Typography>
              <Typography variant="body4">
                {position}
              </Typography>
            </div>

            <div className="flex justify-between">
              <Typography variant="body4" className="text-zinc-400">
                អាយុ:
              </Typography>
              <Typography variant="body4">
                {toKhmerNumber(age)} ឆ្នាំ
              </Typography>
            </div>

            <div className="flex justify-between">
              <Typography variant="body4" className="text-zinc-400">
                ភេទ:
              </Typography>
              <Typography variant="body4">
                {gender} 
              </Typography>
            </div>

            <div className="flex justify-between">
              <Typography variant="body4" className="text-zinc-400">
                កម្ពស់:
              </Typography>
              <Typography variant="body4">
                {toKhmerNumber(height)} សម
              </Typography>
            </div>

            <div className="flex justify-between">
              <Typography variant="body4" className="text-zinc-400">
                ក្លឹប:
              </Typography>
              <Typography variant="body4">
                {clubName}
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}