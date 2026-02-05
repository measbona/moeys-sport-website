import { Image } from "@heroui/react"
import Typography from "@/components/typography"

type Props = {
  name: string
  role: string
  avatar: string
}

export default function AthleteCard({ name, role, avatar }: Props) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="mb-4 rounded-full border-8 border-zinc-100">
        <Image
          src={avatar}
          alt={name}
          width={160}
          height={150}
          className="rounded-full object-cover"
        />
      </div>

      <Typography variant="h4" className="font-khmer">
        {name}
      </Typography>

      <Typography variant="body2" className="mt-1 text-zinc-400">
        {role}
      </Typography>
    </div>
  )
}