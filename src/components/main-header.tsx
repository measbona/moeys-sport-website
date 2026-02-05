"use client";
import { Button, Image, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/react"
import { ChevronDown } from "lucide-react";

import * as Icons from "@/icons"
import * as Images from "@/images"
import Typography from "@/components/typography"

export default function MainHeader() {
  return (
    <Navbar isBlurred aria-label="navbar wrapper" className="py-3 self-center fixed bg-white shadow-xs z-20" maxWidth="md">
      <NavbarBrand aria-label="navbar logo">
        <Image height={45} alt="moeys-logo" src={Images.moeysLogo} />
      </NavbarBrand>

      {/* TODO: Try to use same class as footer for width */}
      <NavbarContent className="flex items-center justify-center sm:flex gap-7 flex-1" justify="center" aria-label="navbar navigation">
        <NavbarItem>
          <Link color="foreground" href="#">
            <Typography variant="body2" className="font-semibold">ទំព័រដើម</Typography>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            <Typography variant="body2" className="font-semibold">សហព័ន្ធកីឡាជាតិ</Typography>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            <Typography variant="body2" className="font-semibold">អង្គភាពចំណុះ</Typography>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            <Typography variant="body2" className="font-semibold">ប្រវត្តិកីឡាករ</Typography>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            <Typography variant="body2" className="font-semibold">ប្រព័ន្ធចុះឈ្មោះ</Typography>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            <Typography variant="body2" className="font-semibold">បណ្ណាល័យ</Typography>
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end" aria-label="navbar signup">
        <NavbarItem>
          <div className="flex items-center gap-2">
            <Image height={22} alt="moeys-logo" src={Icons.khmerFlagIcon} />
            <Typography variant="body2" className="font-semibold">ភាសាខ្មែរ</Typography>
            <ChevronDown className="-ml-1.5 text-[#034EA1]" />
          </div>
        </NavbarItem>
        <NavbarItem>
          <Button
            className="flex bg-[#121212] text-white py-2 px-3.5 rounded-full"
            startContent={<Image height={14} alt="moeys-logo" src={Icons.userIcon} />}
          >
            <Typography variant="body2">ចូលគណនី</Typography>
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}