"use client"
import * as Images from "@/images"
import * as Banners from "@/assets/banners"

import SectionHeader from "@/components/section-header";
import HeaderSeparator from "@/components/header-separator";
import SubordinateUnitCard from "@/components/subordinate-unit-card";

export default function SubordinateUnitPage() {
  const units = [
    {
      id: 1,
      name: "អគ្គនាយកដ្ឋានកីឡា",
      short: "អគកឡ",
      logo: Images.moeysLogo,
    },
    {
      id: 2,
      name: "នាយកដ្ឋានកីឡាជំនាញនិងកីឡាមហាជន",
      short: "កជកម",
      logo: Images.moeysLogo,
    },
    {
      id: 3,
      name: "នាយកដ្ឋានអប់រំកាយនិងកីឡាសិស្ស និស្សិត",
      short: "កជកម",
      logo: Images.moeysLogo,
    },
    {
      id: 4,
      name: "វិទ្យាស្ថានជាតិអប់រំកាយនិងកីឡា",
      short: "វជអ",
      logo: Images.moeysLogo,
    },
    {
      id: 5,
      name: "មជ្ឈមណ្ឌលជាតិហ្វឹកហ្វឺនកីឡា",
      short: "មជហក",
      logo: Images.moeysLogo,
    },
    {
      id: 6,
      name: "លេខាធិការដ្ឋាននៃអគ្គនាយកដ្ឋានកីឡា",
      short: "លធ.អគកឡ",
      logo: Images.moeysLogo,
    },
  ];

  const onClick = (id: unknown) => {}

  return (
    <div className="mt-16">
      <HeaderSeparator
        slug="អង្គភាពចំណុះ"
        title="អង្គភាពចំណុះ"
        description="ផ្តល់ព័ត៌មានថ្មីអំពីសកម្មភាពកីឡាប្រកួតការជ្រើសរើសកីឡាករនិងសេចក្តីជូនដំណឹងសំខាន់ៗពីស្ថាប័នកីឡាជាតិដើម្បីឲ្យសាធារណជនទាន់ដឹងព័ត៌មានទាន់ពេលវេលា។"
        image={Banners.subBanner1}
      />
      <SectionHeader title="អង្គភាពចំណុះទាំងអស់នៅក្នុងស្ថាប័ន">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          {units.map((unit, i) => (
            <SubordinateUnitCard key={i} {...unit} onClick={onClick} />
          ))}
        </div>
      </SectionHeader>
    </div>
  )
}
