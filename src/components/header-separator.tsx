"use client"
import { Button, Image } from "@heroui/react"
import Typography from "@/components/ui/typography"

type Props = {
  image: string
  slug: string
  title: string
  description: string
}

export default function HeaderSeparator({ image, slug, title, description }: Props) {
  return (
    <div className="relative w-full h-[480px] overflow-hidden">
      <Image
        src={image}
        alt={slug}
        removeWrapper
        className="absolute inset-0 w-full h-full object-cover object-top"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-transparent z-10" />

      <div className="absolute inset-0 flex items-center z-20">
        <div className="container mx-auto max-w-6xl text-white">
          <div className="flex flex-row">
            <Button className="flex items-center gap-2 cursor-pointer group" onPress={() => {}}>
              <Typography variant="body4" className="group-hover:text-[#349FD8] group-hover:underline leading-[1.55]">
                ទំព័រដើម
              </Typography>
            </Button>
            <Typography variant="body4" className="leading-[1.55] mx-1">
              /
            </Typography>
            <Typography variant="body4" className="leading-[1.55]">
              {slug}
            </Typography>
          </div>

          <Typography variant="h1" className="my-4">
            {title}
          </Typography>

          <Typography variant="body2" className="line-clamp-3 leading-relaxed max-w-2xl">
            {description}
          </Typography>
        </div>
      </div>
    </div>
  )
}