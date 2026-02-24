import { Image } from "@heroui/react"
import Typography from "@/components/typography"

type Props = {
  article: {
    id: string
    date: string
    title: string
    description: string
    image: string
    href?: string
  }
}

export default function ArticleCard({ article }: Props) {
  return (
    <div className="flex flex-col w-[350px] rounded-2xl bg-white shadow pb-1">
      <div className="overflow-hidden rounded-t-2xl mb-1">
        <Image
          src={article.image}
          alt={article.title}
          className="object-cover"
        />
      </div>

      <div className="flex flex-col gap-2 p-2.5">
        <Typography variant="body7" className="text-[#B2B2B2]">
          {article.date}
        </Typography>

        <Typography variant="sub1" className="line-clamp-2 leading-[1.55]">
          {article.title}
        </Typography>

        <Typography variant="body4" className="text-[#666666] line-clamp-3 leading-[1.55]">
          {article.description}
        </Typography>

        <div className="flex items-center gap-2 cursor-pointer group mt-3" onClick={() => {}}>
          <Typography variant="body4" className="text-[#349FD8] group-hover:underline">
            មើលលម្អិត
          </Typography>
        </div>
      </div>
    </div>
  )
}