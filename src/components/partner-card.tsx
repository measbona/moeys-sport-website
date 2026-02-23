import { Image } from "@heroui/react"

type Props = {
  logo: string
  name: string
}

export default function PartnerCard({ logo, name }: Props) {
  return (
    <div className="h-32 w-72">
      <div className="flex items-center justify-center h-full">
        <Image
          src={logo}
          alt={name}
          className="max-h-20 w-auto object-contain"
        />
      </div>
    </div>
  )
}