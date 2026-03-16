"use client";
import { usePathname } from "next/navigation";
import { Button, Image, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/react"
import clsx from "clsx";

import * as Icons from "@/icons"
import * as Images from "@/images"

import Typography from "@/components/typography"
import LanguageDropdown from "@/components/language-dropdown";

const headerItems = [
  {
    id: "home",
    name: "ទំព័រដើម",
    href: '/'
  },
  {
    id: "federation",
    name: "សហព័ន្ធកីឡាជាតិ",
    href: '/federation'
  },
  {
    id: "partner",
    name: "អង្គភាពចំណុះ",
    href: '/partner'
  },
  {
    id: "athlete",
    name: "ប្រវត្តិកីឡាករ",
    href: '/athlete'
  },
  {
    id: "registration",
    name: "ប្រព័ន្ធចុះឈ្មោះ",
    href: '/registration'
  },
  {
    id: "article",
    name: "បណ្ណាល័យ",
    href: '/article'
  }
]

export default function MainHeader() {
  const pathName = usePathname()

  return (
    <Navbar
      isBlurred
      aria-label="navbar wrapper"
      className="py-3 fixed bg-white shadow-xs z-30 px-4"
      maxWidth="2xl"
      classNames={{ wrapper: "px-48" }}
    >
      <NavbarBrand aria-label="navbar logo">
        <Image height={45} alt="moeys-logo" src={Images.moeysLogo} />
      </NavbarBrand>

      <NavbarContent className="gap-7 mr-20" aria-label="navbar navigation">
        {headerItems.map((item) => {
          const isActive = pathName === item.href || pathName.startsWith(`${item.href}/`)

          return (
            <div key={item.id} className="relative">
              <NavbarItem>
                <Link color="foreground" href={item.href}>
                  <Typography
                    variant="body2"
                    className={clsx("font-semibold", {
                      "text-[#034EA1]": isActive
                    })}
                  >
                    {item.name}
                  </Typography>
                </Link>
              </NavbarItem>
              {isActive && <div className="absolute h-1 bg-[#42A5F5] -bottom-3 left-0 right-0" />}
            </div>
          )
        })}
      </NavbarContent>

      <NavbarContent aria-label="navbar signup">
        <LanguageDropdown />
        <Button
          disableRipple
          className="bg-[#121212] text-white rounded-full flex-shrink-0"
          startContent={<Image alt="moeys-logo" width={12} src={Icons.userIcon} />}
        >
          <Typography variant="body2">ចូលគណនី</Typography>
        </Button>
      </NavbarContent>
    </Navbar>
  )
}