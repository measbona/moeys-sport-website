import * as Banners from "@/assets/banners"

import AthleteCard from "@/components/athlete-card";
import SectionHeader from "@/components/section-header";
import HeaderSeparator from "@/components/header-separator";

export default function AthletePage() {
  const athletes = [
    {
      id: "1",
      name: "ស៊ុន សុភក្តិ",
      role: "កីឡាករជម្រើសជាតិ",
      avatar: Banners.althele,
      position: "ខ្សែបំរើ",
      age: 16,
      height: 1.70,
      gender: "ប្រុស",
      clubName: "វិសាខា",
    },
    {
      id: "2",
      name: "ឯម លាភ",
      role: "កីឡាករជម្រើសជាតិ",
      avatar: Banners.althele,
      position: "ខ្សែបំរើ",
      age: 16,
      height: 1.70,
      gender: "ប្រុស",
      clubName: "វិសាខា",
    },
    {
      id: "3",
      name: "ពេជ សុវណ្ណ",
      role: "កីឡាករជម្រើសជាតិ",
      avatar: Banners.althele,
      position: "ខ្សែបំរើ",
      age: 16,
      height: 1.70,
      gender: "ប្រុស",
      clubName: "វិសាខា",
    },
    {
      id: "4",
      name: "ភូ សុខា",
      role: "កីឡាករជម្រើសជាតិ",
      avatar: Banners.althele,
      position: "ខ្សែបំរើ",
      age: 16,
      height: 1.70,
      gender: "ប្រុស",
      clubName: "វិសាខា",
    },
    {
      id: "5",
      name: "ជា សុខា",
      role: "កីឡាករជម្រើសជាតិ",
      avatar: Banners.althele,
      position: "ខ្សែបំរើ",
      age: 16,
      height: 1.70,
      gender: "ប្រុស",
      clubName: "វិសាខា",
    },
    {
      id: "6",
      name: "ស៊ុន សុភក្តិ",
      role: "កីឡាករជម្រើសជាតិ",
      avatar: Banners.althele,
      position: "ខ្សែបំរើ",
      age: 16,
      height: 1.70,
      gender: "ប្រុស",
      clubName: "វិសាខា",
    },
    {
      id: "7",
      name: "ឯម លាភ",
      role: "កីឡាករជម្រើសជាតិ",
      avatar: Banners.althele,
      position: "ខ្សែបំរើ",
      age: 16,
      height: 1.70,
      gender: "ប្រុស",
      clubName: "វិសាខា",
    },
    {
      id: "8",
      name: "ពេជ សុវណ្ណ",
      role: "កីឡាករជម្រើសជាតិ",
      avatar: Banners.althele,
      position: "ខ្សែបំរើ",
      age: 16,
      height: 1.70,
      gender: "ប្រុស",
      clubName: "វិសាខា",
    },
    {
      id: "9",
      name: "ភូ សុខា",
      role: "កីឡាករជម្រើសជាតិ",
      avatar: Banners.althele,
      position: "ខ្សែបំរើ",
      age: 16,
      height: 1.70,
      gender: "ប្រុស",
      clubName: "វិសាខា",
    },
    {
      id: "10",
      name: "ជា សុខា",
      role: "កីឡាករជម្រើសជាតិ",
      avatar: Banners.althele,
      position: "ខ្សែបំរើ",
      age: 16,
      height: 1.70,
      gender: "ប្រុស",
      clubName: "វិសាខា",
    },
  ]

  return (
    <div className="mt-16">
      <HeaderSeparator
        slug="ប្រវត្តិកីឡាករ"
        title="ប្រវត្តិកីឡាករ"
        description="កីឡាករជាតិកម្ពុជាបង្ហាញពីកាលវិភាគនៃាការប្រកួតនិងសកម្មភាពកីឡានានាដែលរៀបចំដោយសហព័ន្ធនិងស្ថាប័នកីឡាជាតិដើម្បីជំរុញការចូលរួមនិងការគាំទ្រពីសាធារណះ។"
        image={Banners.subBanner1}
      />

      <SectionHeader title="ប្រវត្តិកីឡាករ">
        <div className="grid grid-cols-3 gap-6 md:grid-cols-5">
          {athletes.map(({ id, ...athlete }) => (
            <AthleteCard key={id} {...athlete} />
          ))}
        </div>
      </SectionHeader>
    </div>
  )
}
