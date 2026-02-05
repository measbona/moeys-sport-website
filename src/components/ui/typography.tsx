import { clsx, type ClassValue } from "clsx"

type TypographyVariant = "h1" | "h2" | "h3" | "h4" | "h5" | "sub1" | "sub2" | "sub3" | "sub4" | "body1" | "body2" | "body3" | "body4" | "body5" | "body6" | "body7" | "body8"

type Props = {
  children: React.ReactNode
  language?: "en" | "km"
  variant?: TypographyVariant
  className?: string
}

type TypographyStyle = {
  base: ClassValue
}

const typography: Record<TypographyVariant, TypographyStyle> = {
  // Headlines
  h1: { base: "text-[42px] leading-[1.25] font-bold" },
  h2: { base: "text-[40px] leading-[1.25] font-bold" },
  h3: { base: "text-[32px] leading-[1.25] font-normal" },
  h4: { base: "text-[24px] leading-[1.25] font-bold" },
  h5: { base: "text-[18px] leading-[1.25] font-normal" },

  // Subtitles
  sub1: { base: "text-[16px] leading-[1.25] font-bold" },
  sub2: { base: "text-[14px] leading-[1.25] font-bold" },
  sub3: { base: "text-[12px] leading-[1.25] font-bold" },
  sub4: { base: "text-[10px] leading-[1.25] font-bold" },

  // Body
  body1: { base: "text-[16px] leading-[1.25] font-medium" },
  body2: { base: "text-[16px] leading-[1.25] font-normal" },
  body3: { base: "text-[14px] leading-[1.25] font-medium" },
  body4: { base: "text-[14px] leading-[1.25] font-normal" },
  body5: { base: "text-[12px] leading-[1.25] font-medium" },
  body6: { base: "text-[12px] leading-[1.25] font-normal" },
  body7: { base: "text-[10px] leading-[1.25] font-medium" },
  body8: { base: "text-[10px] leading-[1.25] font-normal" },
}

export default function Typography({
  children,
  className = "",
  language = "km",
  variant = "sub1"
}: Props) {
  const style = typography[variant]

  return (
    <p
      className={clsx(
        style.base,
        language === "km" && "font-khmer",
        language === "en" && "font-english",
        className,
      )}
    >
      {children}
    </p>
  )
}