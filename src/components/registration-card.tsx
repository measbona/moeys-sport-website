"use client";
import { Button, Image } from "@heroui/react"

import * as Icons from "@/icons"
import * as Images from "@/images"
import Typography from "@/components/typography"

type Props = {
  id: string
  title: string
}

export default function RegistrationCard({ id, title } : Props) {
  return (
    <div className="relative rounded-2xl p-4 bg-gradient-to-br from-[#8FC7EB] via-[#77B6DE] to-[#6AA7CF] text-white overflow-hidden">
      <div className="z-10 flex h-full flex-col justify-between">
        <div>
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center justify-center rounded-full bg-gray-500/10 h-12 w-12">
              <Typography variant="h4">{id}</Typography>
            </div>

            <Image
              width={54}
              alt="moeys-icon"
              src={Images.moeysLogo}
            />
          </div>
          <Typography variant="h4">{title}</Typography>
        </div>

        <Button
          className="flex bg-[#121212] py-2 px-3.5 rounded-full w-fit mt-11"
          startContent={<Image height={14} alt="moeys-logo" src={Icons.userIcon} />}
        >
          <Typography variant="body4">ចុះឈ្មោះឥឡូវនេះ</Typography>
        </Button>
      </div>
    </div>
  )
}