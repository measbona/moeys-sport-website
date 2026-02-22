"use client"
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { DropdownSection, Image, Dropdown, DropdownItem, DropdownTrigger, DropdownMenu } from "@heroui/react"

import * as Icons from "@/icons"
import Typography from "@/components/typography"

// TODO: Dropdown styles not working
export default function LanguageDropdown() {
  const [dropdown, setDropdown] = useState<boolean>(false)

  return (
    <Dropdown
      placement="bottom"
      aria-label="dropdown wrapper"
      onOpenChange={() => setDropdown(val => !val)}
    >
      <DropdownTrigger aria-label="dropdown trigger">
        <div className="flex items-center gap-2 cursor-pointer">
          <Image height={22} alt="moeys-logo" src={Icons.khmerFlagIcon} />
          <Typography variant="body2" className="font-semibold">ភាសាខ្មែរ</Typography>
          <div>{dropdown ? <ChevronUp className="-ml-1.5 text-[#034EA1]" /> : <ChevronDown className="-ml-1.5 text-[#034EA1]" />}</div>
        </div>
      </DropdownTrigger>

      <DropdownMenu aria-label="dropdown menu">
        <DropdownSection showDivider className="rounded-md">
          <DropdownItem
            key="english"
            className="p-2"
            title={<Typography variant="body2">English</Typography>}
            startContent={<Image height={22} alt="moeys-logo" src={Icons.khmerFlagIcon} />}
            onPress={() => {}}
          />
          <DropdownItem
            key="khmer"
            className="p-2"
            title={<Typography variant="body2">ភាសាខ្មែរ</Typography>}
            startContent={<Image height={22} alt="moeys-logo" src={Icons.khmerFlagIcon} />}
            onPress={() => {}}
          />
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  )
}