import * as Banners from "@/assets/banners"

import SectionHeader from "@/components/section-header";
import HeaderSeparator from "@/components/header-separator";
import RegistrationCard from "@/components/registration-card";

export default function RegistrationPage() {
  const registrations= [
    {
      id: "០១",
      title: "ប្រព័ន្ធចុះឈ្មោះប្រកួតសិស្សបឋម",
    },
    {
      id: "០២",
      title: "ប្រព័ន្ធចុះឈ្មោះប្រកួតសិស្សមធ្យម",
    },
    {
      id: "០៣",
      title: "ប្រព័ន្ធចុះឈ្មោះប្រកួតឧត្តមសិក្សា",
    },
    {
      id: "០៤",
      title: "ប្រព័ន្ធចុះឈ្មោះប្រកួតកីឡាជាតិ",
    },
  ]

  return (
    <div className="mt-16">
      <HeaderSeparator
        slug="ប្រព័ន្ធចុះឈ្មោះ"
        title="ប្រព័ន្ធចុះឈ្មោះ"
        description="ប្រព័ន្ធនេះត្រូវបានបង្កើតឡើងដើម្បីគ្រប់គ្រងការចុះឈ្មោះអ្នកចូលរួមប្រកួតក្រុមកីឡានិងមន្ត្រីបច្ចេកទេស ឲ្យមានភាពរហ័ស ត្រឹមត្រូវ និងមានសុវត្ថិភាព។"
        image={Banners.subBanner1}
      />

      <SectionHeader title="ប្រព័ន្ធចុះឈ្មោះទាំងអស់សម្រាប់ការប្រកួត">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-5">
          {registrations.map((item, index) => {
            const spanClass = index === 0 || index === 3 ? "md:col-span-2" : "md:col-span-3"

            return (
              <div key={item.id} className={spanClass}>
                <RegistrationCard
                  id={item.id}
                  title={item.title}
                />
              </div>
            )
          })}
        </div>
      </SectionHeader>
    </div>
  )
}