"use client";
import { Image } from "@heroui/react"

import * as Images from "@/images"
import * as Banners from "@/assets/banners"

import MainHeader from "@/components/main-header";
import MainFooter from "@/components/main-footer";

import ArticleCard from "@/components/article-card";
import AthleteCard from "@/components/athlete-card";
import { PartnerCard } from "@/components/partner-card";
import SectionHeader from "@/components/section-header";
import RegulationCard from "@/components/regulation-card";
import ConfederationCard from "@/components/confederation-card";

export default function Home() {
  const confederations = [
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

  const regulations= [
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
  ]

  const partners = [
    {
      id: "1",
      name: "The KOI",
      logo: Banners.koi,
    },
    {
      id: "2",
      name: "Kofi",
      logo: Banners.kofi,
    },
    {
      id: "3",
      name: "Konfulon",
      logo: Banners.konfulon,
    },
    {
      id: "4",
      name: "Ethernom",
      logo: Banners.ethernom,
    },
  ]

  const articles = [
    {
      id: "1",
      date: "២៥ មករា ២០២៥",
      title:
        "ពិធីចុះហត្ថលេខាលើអនុស្សរណៈសហការរវាង Lee Dong Sup ប្រធានក្រុម",
      excerpt:
        "Lee Dong Sup បានចូលរួមក្នុងពិធីចុះហត្ថលេខាលើអនុស្សរណៈសហការជាមួយភាគីពាក់ព័ន្ធ ដើម្បីអភិវឌ្ឍវិស័យកីឡា...",
      image: Banners.article,
      href: "/news/1",
    },
    {
      id: "2",
      date: "២៥ មករា ២០២៥",
      title:
        "ពិធីចុះហត្ថលេខាលើអនុស្សរណៈសហការរវាង Lee Dong Sup ប្រធានក្រុម",
      excerpt:
        "Lee Dong Sup បានចូលរួមក្នុងពិធីចុះហត្ថលេខាលើអនុស្សរណៈសហការជាមួយភាគីពាក់ព័ន្ធ ដើម្បីអភិវឌ្ឍវិស័យកីឡា...",
      image: Banners.article,
      href: "/news/1",
    },
    {
      id: "3",
      date: "២៥ មករា ២០២៥",
      title:
        "ពិធីចុះហត្ថលេខាលើអនុស្សរណៈសហការរវាង Lee Dong Sup ប្រធានក្រុម",
      excerpt:
        "Lee Dong Sup បានចូលរួមក្នុងពិធីចុះហត្ថលេខាលើអនុស្សរណៈសហការជាមួយភាគីពាក់ព័ន្ធ ដើម្បីអភិវឌ្ឍវិស័យកីឡា...",
      image: Banners.article,
      href: "/news/1",
    },
    {
      id: "4",
      date: "២៥ មករា ២០២៥",
      title:
        "ពិធីចុះហត្ថលេខាលើអនុស្សរណៈសហការរវាង Lee Dong Sup ប្រធានក្រុម",
      excerpt:
        "Lee Dong Sup បានចូលរួមក្នុងពិធីចុះហត្ថលេខាលើអនុស្សរណៈសហការជាមួយភាគីពាក់ព័ន្ធ ដើម្បីអភិវឌ្ឍវិស័យកីឡា...",
      image: Banners.article,
      href: "/news/1",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen dark:bg-black">
      <MainHeader />
      <main className="flex-1 overflow-hidden">
        <div className="flex flex-col gap-5">
          <div className="w-full">
            <Image
              alt="banner"
              src={Banners.banner1}
              className="w-full object-cover"
            />
          </div>

          <SectionHeader title="សហព័ន្ធកីឡាជាតិ" seeMore={{ label: "មើលបន្ថែមទៀត" }}>
            <div className="flex justify-center gap-20">
              {confederations.map((confederation, index) => (
                <ConfederationCard
                  key={index}
                  title={confederation.title}
                  subtitle={confederation.subtitle}
                  src={confederation.src}
                />
              ))}
            </div>
          </SectionHeader>

          <SectionHeader title="អត្តពលិកកម្ពុជាឈ្នះមេដាយដំបូងនៅកម្ពុជា" titleAlign="center" mainWrapper="bg-zinc-100">
            <div className="flex justify-center">
              <Image
                width={900}
                alt="banner"
                src={Banners.subBanner1}
                className="w-full object-cover rounded-xl"
              />
            </div>
          </SectionHeader>

          <SectionHeader title="ប្រព័ន្ធចុះឈ្មោះទាំងអស់សម្រាប់ការប្រកួត">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {regulations.map((item) => (
                <RegulationCard
                  key={item.id}
                  id={item.id}
                  title={item.title}
                />
              ))}
            </div>
          </SectionHeader>

          <SectionHeader title="ប្រវត្តិកីឡាករ" mainWrapper="bg-zinc-100">
            <div className="flex justify-center gap-20">
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

          <SectionHeader title="ព័ត៌មានចុងក្រោយពីអគ្គនាយកដ្ឋានកីឡា" seeMore={{ label: "មើលព័ត៌មានច្រើនទៀត" }}>
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
              {articles.map((article) => (
                <ArticleCard
                  key={article.id}
                  article={article}
                />
              ))}
            </div>
          </SectionHeader>

          <SectionHeader title="ដៃគូសហការរបស់យើង" titleAlign="center">
            <div className="overflow-hidden border border-zinc-200 bg-white">
              <div
                className="
                  grid
                  grid-cols-2
                  md:grid-cols-4
                  divide-x
                  divide-zinc-200
                "
              >
                {partners.map((partner) => (
                  <div key={partner.id} className="h-32">
                    <PartnerCard
                      logo={partner.logo}
                      name={partner.name}
                    />
                  </div>
                ))}
              </div>
            </div>
          </SectionHeader>
        </div>
        <MainFooter />
      </main>
    </div> 
  );
}
