import { useState } from "react"
import { Button, Image } from "@heroui/react"

import Typography from "@/components/typography"
import SubordinateUnitModal from "@/components/modals/subordinate-unit-modal"

type Props = {
  id: unknown
  name: string
  short: string
  logo: string
  onClick: (id: unknown) => void
}

const documents = [
  {
    id: '1',
    title: "sample.pdf",
    url: "https://pdfobject.com/pdf/sample.pdf",
    size: "12MB",
    date: "12-March-2026",
    description: "This is a simple PDF file. Fun fun fun"
  },
  {
    id: '2',
    title: "sample.pdf",
    url: "https://pdfobject.com/pdf/sample.pdf",
    size: "12MB",
    date: "12-March-2026",
    description: "This is a simple PDF file. Fun fun fun"
  },
  {
    id: '3',
    title: "sample.pdf",
    url: "https://pdfobject.com/pdf/sample.pdf",
    size: "12MB",
    date: "12-March-2026",
    description: "This is a simple PDF file. Fun fun fun"
  },
  {
    id: '4',
    title: "sample.pdf",
    url: "https://pdfobject.com/pdf/sample.pdf",
    size: "12MB",
    date: "12-March-2026",
    description: "This is a simple PDF file. Fun fun fun"
  },
]

export default function SubordinateUnitCard({ id, name, short, logo, onClick } : Props) {
  const [open, setOpen] = useState<boolean>(false)

  const handleOpen = () => {
    onClick?.(id)
    setOpen(true)
  }
  
  return (
    <div className="group bg-white rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all duration-200 text-center relative overflow-hidden p-5">
      <div className="h-22 flex items-center justify-center mb-3">
        <Image
          src={logo}
          alt={name}
          className="max-h-20 max-w-2max-h-20 object-contain"
        />
      </div>

      <div className="w-full h-px bg-gray-100 mx-auto mb-3" />

      <Typography variant="sub2" className="leading-[1.55] line-clamp-4">
        {name}
      </Typography>

      <Typography variant="sub3" className="text-gray-400 mt-1.5">
        ({short})
      </Typography>

      <div className="absolute inset-0 z-10 bg-black/5 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
        <Button
          size="sm"
          disableRipple
          className="bg-black px-5 py-2 rounded-full shadow-sm text-sm font-medium translate-y-1.5 scale-95 group-hover:translate-y-0 group-hover:scale-100 transition-transform duration-200"
          onPress={handleOpen}
        >
          <Typography variant="body6" className="text-white">
            បង្ហាញ
          </Typography>
        </Button>
      </div>

      <SubordinateUnitModal
        isOpen={open}
        unitName={name}
        unitLogo={logo}
        unitShort={short}
        documents={documents}
        onClose={() => setOpen(false)}
      />
    </div>
  )
}