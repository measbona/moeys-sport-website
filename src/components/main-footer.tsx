"use client";
import { Image } from "@heroui/react"

import * as Icons from "@/icons"
import * as Images from "@/images"
import Typography from "@/components/typography"
import { toKhmerNumber } from "@/utils/to-khmer-number"

export default function MainFooter() {
  return (
    <footer className="bg-[#121212] text-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Left */}
          <div>
            <Typography variant="h2" className="font-medium">អគ្គនាយកដ្ធានកីឡា</Typography>
            <ul className="space-y-3 my-14">
              <li>
                <Typography variant="body3">អាស័យដ្ធាន​: ពហុកីឡាដ្នានជិតអូឡាំពិក ភ្នំពេញ ព្រះរាជាណាចក្រកម្ពុជា</Typography>
              </li>
              <li>
                <Typography variant="body3">លេខទំនាក់ទំនង​: (855) 12 928 496</Typography>
              </li>
              <li>
                <Typography variant="body3">អ៊ីម៉ែល​: cambodiasportsdept@gmail.com</Typography>
              </li>
              <li>
                <Typography variant="body3">គេហទំព័រ​: dgs.moeys.gov.kh</Typography>
              </li>
            </ul>
          </div>

          {/* Right */}
          <div className="flex justify-end">
            <div className="flex flex-col items-center justify-center gap-8">
              <Image height={166} alt="moeys-logo" src={Images.moeysLogo} />
              <div className="flex gap-4">
                <Image height={16} alt="x-icon" src={Icons.xIcon} />
                <Image height={16} alt="facebook-icon" src={Icons.facebookIcon} />
                <Image height={16} alt="instagram-icon" src={Icons.instagramIcon} />
                <Image height={16} alt="threads-icon" src={Icons.threadsIcon} />
                <Image height={16} alt="youtube-icon" src={Icons.youtubeIcon} />
                <Image height={16} alt="tiktok-icon" src={Icons.tiktokIcon} />
                <Image height={16} alt="discord-icon" src={Icons.discordIcon} />
                <Image height={16} alt="twitch-icon" src={Icons.twitchIcon} />
              </div>
            </div>
          </div>
        </div>

        <div className="text-left">
          <Typography variant="body6">
            © រក្សាសិទ្ធដោយ អគ្គនាយកដ្ធានកីឡា {toKhmerNumber(new Date().getFullYear())}
          </Typography>
        </div>
      </div>
    </footer>
  )
}
