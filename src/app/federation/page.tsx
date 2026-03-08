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
        description="សហព័ន្ធកីឡាជាតិកម្ពុជាមានបេសកកម្មក្នុងការអភិវឌ្ឍន៍ និងលើកកម្ពស់កលវិស័យកីឡាជាតិតាមវិជ្ជាជីវះដើម្បីបង្កើតកម្លាំងកីឡាករដែលមានសមត្ថភាពប្រកួតប្រជែងនៅលើវេទិកាអន្តរជាតិ។"
        image={Banners.subBanner1}
      />

      <SectionHeader title="សហព័ន្ធកីឡាជាតិទាំងអស់នៅក្នុងប្រទេសកម្ពុជា">
        <div className="grid grid-cols-5 gap-10">
          {federations.map((confederation, index) => (
            <FederationCard
              key={index}
              title={confederation.title}
              subtitle={confederation.subtitle}
              src={confederation.src}
            />
          ))}
        </div>

        <div className="flex justify-center mt-16">
          <Button className="flex bg-[#121212] text-white py-2 px-3.5 rounded-full align-middle">
            <Typography variant="body2">បង្ហាញបន្ថែម</Typography>
          </Button>
        </div>
      </SectionHeader>
    </div>
  )
}