import SectionHeader from "@/components/section-header";
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
      <SectionHeader title="ប្រព័ន្ធចុះឈ្មោះទាំងអស់សម្រាក់ការប្រកួត">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {registrations.map((item) => (
            <RegistrationCard
              key={item.id}
              id={item.id}
              title={item.title}
            />
          ))}
        </div>
      </SectionHeader>
    </div>
  )
}