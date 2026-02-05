import { Image } from "@heroui/react"
import Typography from "@/components/typography"

type Props = {
  article: {
    id: string
    title: string
    excerpt: string
    date: string
    image: string
    href?: string
  }
}

export default function ArticleCard({ article }: Props) {
  return (
    <div className="flex flex-col gap-4">
      {/* Image */}
      <div className="overflow-hidden rounded-2xl">
        <Image
          src={article.image}
          alt={article.title}
          className="w-full h-[220px] object-cover"
        />
      </div>

      {/* Date */}
      <Typography
        variant="body2"
        className="text-zinc-400"
      >
        {article.date}
      </Typography>

      {/* Title */}
      <Typography
        variant="h4"
        className="line-clamp-2"
      >
        {article.title}
      </Typography>

      {/* Excerpt */}
      <Typography
        variant="body2"
        className="text-zinc-500 line-clamp-3"
      >
        {article.excerpt}
      </Typography>

      {/* Read more */}
      <a
        href={article.href ?? "#"}
        className="text-[#349FD8] font-medium w-fit"
      >
        អានបន្ថែម
      </a>
    </div>
  )
}