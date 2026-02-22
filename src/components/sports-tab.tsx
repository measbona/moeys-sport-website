/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@heroui/react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Typography from "@/components/typography"
import clsx from "clsx"
import { useState } from "react"

type Props = {
  items: Array<Record<string, any>>
}

export default function SportTab({ items }: Props) {
  const [activeTab, setActiveTab] = useState<string>(items?.[0]?.id)

  return (
    <div className="w-full flex items-center gap-3 mb-10">
      <div className="flex-1 overflow-x-auto no-scrollbar">
        <div className="flex min-w-max items-center rounded-full bg-[#EBEBEB] p-2 gap-4.5">
          {items.map((item) => {
            const active = activeTab === item.id

            return (
              <Button
                key={item?.id}
                disableRipple
                className={clsx("flex py-2 px-3.5 rounded-full", {
                  "bg-[#121212] text-white": active,
                  "text-[#8C8C8C]": !active
                })}
                onPress={() => setActiveTab(item.id)}
              >
                <Typography variant="body1">{item.label}</Typography>
              </Button>
            )
          })}
        </div>
      </div>

      <Button
        isIconOnly
        disableRipple
        disableAnimation
        className="rounded-full bg-[#EBEBEB] hover:bg-zinc-300 h-13 w-13 flex items-center"
        startContent={<ChevronLeft className="text-black w-7 h-7" />}
      />

      <Button
        isIconOnly
        disableRipple
        disableAnimation
        className="rounded-full bg-[#EBEBEB] hover:bg-zinc-300 h-13 w-13 flex items-center"
        startContent={<ChevronRight className="text-black w-7 h-7" />}
      />
    </div>
  )
}