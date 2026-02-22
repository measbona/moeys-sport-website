import { Image } from "@heroui/react"

type Props = {
  logo: string
  name: string
}

export default function PartnerCard({ logo, name }: Props) {
  return (
    <div className="flex items-center justify-center h-full">
      <Image
        src={logo}
        alt={name}
        className="max-h-16 w-auto object-contain"
      />
    </div>
  )
}