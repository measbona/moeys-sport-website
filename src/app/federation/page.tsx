"use client"
import { Button } from "@heroui/react";

import * as Images from "@/images"
import * as Banners from "@/assets/banners"

import HeaderSeparator from "@/components/header-separator";
import Typography from "@/components/ui/typography";
import SectionHeader from "@/components/section-header";
import FederationCard from "@/components/federation-card";

export default function FederationPage() {
  const federations = [
    {
      title: "សហព័ន្ធកីឡា",
      subtitle: "បាល់ទាត់កម្ពុជា",
      src: Images.footballConfederation
    },
    {
      title: "សហព័ន្ធកីឡា",
      subtitle: "អេឡិចត្រូនិច",
      src: Images.electronicConfederation
    },
    {
      title: "សហព័ន្ធកីឡាប៊ូល",
      subtitle: "និងប៉េតង់",
      src: Images.betonConfederation
    },
    {
      title: "សហព័ន្ធខ្មែរ",
      subtitle: "កីឡាហែលទឹក",
      src: Images.swimConfederation
    },
    {
      title: "សហព័ន្ធកីឡា",
      subtitle: "បាល់ទះកម្ពុជា",
      src: Images.volleyConfederation
    },
    {
      title: "សហព័ន្ធកីឡាសីដក់",
      subtitle: "និងឈិនឡូន",
      src: Images.chinlonConfederation
    },
    {
      title: "សហព័ន្ធកីឡា",
      subtitle: "បាល់ទាត់កម្ពុជា",
      src: Images.footballConfederation
    },
    {
      title: "សហព័ន្ធកីឡា",
      subtitle: "អេឡិចត្រូនិច",
      src: Images.electronicConfederation
    },
    {
      title: "សហព័ន្ធកីឡាប៊ូល",
      subtitle: "និងប៉េតង់",
      src: Images.betonConfederation
    },
    {
      title: "សហព័ន្ធខ្មែរ",
      subtitle: "កីឡាហែលទឹក",
      src: Images.swimConfederation
    },
    {
      title: "សហព័ន្ធកីឡា",
      subtitle: "បាល់ទះកម្ពុជា",
      src: Images.volleyConfederation
    },
    {
      title: "សហព័ន្ធកីឡាសីដក់",
      subtitle: "និងឈិនឡូន",
      src: Images.chinlonConfederation
    },
    {
      title: "សហព័ន្ធកីឡា",
      subtitle: "បាល់ទាត់កម្ពុជា",
      src: Images.footballConfederation
    },
    {
      title: "សហព័ន្ធកីឡា",
      subtitle: "អេឡិចត្រូនិច",
      src: Images.electronicConfederation
    },
    {
      title: "សហព័ន្ធកីឡាប៊ូល",
      subtitle: "និងប៉េតង់",
      src: Images.betonConfederation
    },
    {
      title: "សហព័ន្ធខ្មែរ",
      subtitle: "កីឡាហែលទឹក",
      src: Images.swimConfederation
    },
    {
      title: "សហព័ន្ធកីឡា",
      subtitle: "បាល់ទះកម្ពុជា",
      src: Images.volleyConfederation
    },
    {
      title: "សហព័ន្ធកីឡាសីដក់",
      subtitle: "និងឈិនឡូន",
      src: Images.chinlonConfederation
    },
  ]

  return (
    <div className="mt-16">
      <HeaderSeparator
        slug="សហព័ន្ធកីឡាជាតិ"
        title="សហព័ន្ធកីឡាជាតិ"
        description="ផ្តល់ព័ត៌មានថ្មីៗអំពីសកម្មភាពកីឡាការប្រកួតការជ្រើសរើសកីឡាករនិងសេចក្តីជូនដំណឹងសំខាន់ៗពីស្ថាប័នកីឡាជាតិដើម្បីឲ្យសាធារណជនទាន់ដឹងព័ត៌មានទាន់ពេលវេលា។"
        image={Banners.subBanner1}
      />

      <SectionHeader title="សហព័ន្ធកីឡាជាតិទាំងអស់នៅក្នុងប្រទេសកម្ពុជា">
        <div className="grid grid-cols-5 gap-10 mb-16">
          {federations.map((confederation, index) => (
            <FederationCard
              key={index}
              title={confederation.title}
              subtitle={confederation.subtitle}
              src={confederation.src}
            />
          ))}
        </div>

        <div className="flex justify-center">
          <Button className="flex bg-[#121212] text-white py-2 px-3.5 rounded-full align-middle">
            <Typography variant="body2">បង្ហាញបន្ថែម</Typography>
          </Button>
        </div>
      </SectionHeader>
    </div>
  )
}