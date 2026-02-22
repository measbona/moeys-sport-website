import * as Banners from "@/assets/banners"

import AthleteCard from "@/components/athlete-card";
import SectionHeader from "@/components/section-header";

export default function AthletePage() {
  const athletes = [
    {
      id: "1",
      name: "ស៊ុន សុភក្តិ",
      role: "កីឡាករជម្រើសជាតិ",
      avatar: Banners.althele,
    },
    {
      id: "2",
      name: "ឯម លាភ",
      role: "កីឡាករជម្រើសជាតិ",
      avatar: Banners.althele,
    },
    {
      id: "3",
      name: "ពេជ សុវណ្ណ",
      role: "កីឡាករជម្រើសជាតិ",
      avatar: Banners.althele,
    },
    {
      id: "4",
      name: "ភូ សុខា",
      role: "កីឡាករជម្រើសជាតិ",
      avatar: Banners.althele,
    },
    {
      id: "5",
      name: "ជា សុខា",
      role: "កីឡាករជម្រើសជាតិ",
      avatar: Banners.althele,
    },
    {
      id: "6",
      name: "ស៊ុន សុភក្តិ",
      role: "កីឡាករជម្រើសជាតិ",
      avatar: Banners.althele,
    },
    {
      id: "7",
      name: "ឯម លាភ",
      role: "កីឡាករជម្រើសជាតិ",
      avatar: Banners.althele,
    },
    {
      id: "8",
      name: "ពេជ សុវណ្ណ",
      role: "កីឡាករជម្រើសជាតិ",
      avatar: Banners.althele,
    },
    {
      id: "9",
      name: "ភូ សុខា",
      role: "កីឡាករជម្រើសជាតិ",
      avatar: Banners.althele,
    },
    {
      id: "10",
      name: "ជា សុខា",
      role: "កីឡាករជម្រើសជាតិ",
      avatar: Banners.althele,
    },
  ]

  return (
    <div className="mt-16">
      <SectionHeader title="ប្រវត្តិកីឡាករ">
        <div className="grid grid-cols-3 gap-6 md:grid-cols-5">
          {athletes.map((athlete) => (
            <AthleteCard
              key={athlete.id}
              name={athlete.name}
              role={athlete.role}
              avatar={athlete.avatar}
            />
          ))}
        </div>
      </SectionHeader>
    </div>
  )
}
