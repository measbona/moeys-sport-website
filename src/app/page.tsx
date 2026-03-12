"use client";
import { Image } from "@heroui/react"
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import * as Images from "@/images"
import * as Banners from "@/assets/banners"

import SportsTab from "@/components/sports-tab";
import ArticleCard from "@/components/article-card";
import AthleteCard from "@/components/athlete-card";
import PartnerCard from "@/components/partner-card";
import SectionHeader from "@/components/section-header";
import FederationCard from "@/components/federation-card";
import RegistrationCard from "@/components/registration-card";

export default function Home() {
  const router = useRouter()

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
  ]

  const registrations = [
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
      name: "ជា សុខា",
      role: "កីឡាករជម្រើសជាតិ",
      avatar: Banners.althele,
      position: "ខ្សែបំរើ",
      age: 16,
      height: 1.70,
      gender: "ប្រុស",
      clubName: "វិសាខា",
    }
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
    {
      id: "5",
      name: "Ethernom",
      logo: Banners.ethernom,
    }
  ]

  const articles = [
    {
      id: "1",
      date: "២៥ មករា ២០២៥",
      title: "ជួបសំណេះសំណាលនិងប្រគល់គ្រឿងសរសើរ ឧបនាយកសាលា Lee Dong Sup ប្រទេសកូរ៉េ",
      description: "កាលពីថ្ងៃទី២៤ ខែតុលា ឆ្នាំ២០២៤ លោកឧបនាយកសាលា Lee Dong Sup បានធ្វើដំណើរទៅកាន់កម្ពុជា ដើម្បីជួបសំណេះសំណាល និងផ្តល់គ្រឿងសរសើរដល់ប្រធានក្រុមប្រឹក្សាអភិបាលក្រុមប្រឹក្សាអភិបាលកីឡា។កាលពីថ្ងៃទី២៤ ខែតុលា ឆ្នាំ២០២៤ លោកឧបនាយកសាលា Lee Dong Sup បានធ្វើដំណើរទៅកាន់កម្ពុជា ដើម្បីជួបសំណេះសំណាល និងផ្តល់គ្រឿងសរសើរដល់ប្រធានក្រុមប្រឹក្សាអភិបាលក្រុមប្រឹក្សាអភិបាលកីឡា។",
      image: Banners.article,
      href: "/",
    },
    {
      id: "2",
      date: "២៥ មករា ២០២៥",
      title: "ជួបសំណេះសំណាលនិងប្រគល់គ្រឿងសរសើរ ឧបនាយកសាលា Lee Dong Sup ប្រទេសកូរ៉េ",
      description: "កាលពីថ្ងៃទី២៤ ខែតុលា ឆ្នាំ២០២៤ លោកឧបនាយកសាលា Lee Dong Sup បានធ្វើដំណើរទៅកាន់កម្ពុជា ដើម្បីជួបសំណេះសំណាល និងផ្តល់គ្រឿងសរសើរដល់ប្រធានក្រុមប្រឹក្សាអភិបាលក្រុមប្រឹក្សាអភិបាលកីឡា។កាលពីថ្ងៃទី២៤ ខែតុលា ឆ្នាំ២០២៤ លោកឧបនាយកសាលា Lee Dong Sup បានធ្វើដំណើរទៅកាន់កម្ពុជា ដើម្បីជួបសំណេះសំណាល និងផ្តល់គ្រឿងសរសើរដល់ប្រធានក្រុមប្រឹក្សាអភិបាលក្រុមប្រឹក្សាអភិបាលកីឡា។",
      image: Banners.article,
      href: "/",
    },
    {
      id: "3",
      date: "២៥ មករា ២០២៥",
      title: "ជួបសំណេះសំណាលនិងប្រគល់គ្រឿងសរសើរ ឧបនាយកសាលា Lee Dong Sup ប្រទេសកូរ៉េ",
      description: "កាលពីថ្ងៃទី២៤ ខែតុលា ឆ្នាំ២០២៤ លោកឧបនាយកសាលា Lee Dong Sup បានធ្វើដំណើរទៅកាន់កម្ពុជា ដើម្បីជួបសំណេះសំណាល និងផ្តល់គ្រឿងសរសើរដល់ប្រធានក្រុមប្រឹក្សាអភិបាលក្រុមប្រឹក្សាអភិបាលកីឡា។កាលពីថ្ងៃទី២៤ ខែតុលា ឆ្នាំ២០២៤ លោកឧបនាយកសាលា Lee Dong Sup បានធ្វើដំណើរទៅកាន់កម្ពុជា ដើម្បីជួបសំណេះសំណាល និងផ្តល់គ្រឿងសរសើរដល់ប្រធានក្រុមប្រឹក្សាអភិបាលក្រុមប្រឹក្សាអភិបាលកីឡា។",
      image: Banners.article,
      href: "/",
    },
    {
      id: "4",
      date: "២៥ មករា ២០២៥",
      title: "ជួបសំណេះសំណាលនិងប្រគល់គ្រឿងសរសើរ ឧបនាយកសាលា Lee Dong Sup ប្រទេសកូរ៉េ",
      description: "កាលពីថ្ងៃទី២៤ ខែតុលា ឆ្នាំ២០២៤ លោកឧបនាយកសាលា Lee Dong Sup បានធ្វើដំណើរទៅកាន់កម្ពុជា ដើម្បីជួបសំណេះសំណាល និងផ្តល់គ្រឿងសរសើរដល់ប្រធានក្រុមប្រឹក្សាអភិបាលក្រុមប្រឹក្សាអភិបាលកីឡា។កាលពីថ្ងៃទី២៤ ខែតុលា ឆ្នាំ២០២៤ លោកឧបនាយកសាលា Lee Dong Sup បានធ្វើដំណើរទៅកាន់កម្ពុជា ដើម្បីជួបសំណេះសំណាល និងផ្តល់គ្រឿងសរសើរដល់ប្រធានក្រុមប្រឹក្សាអភិបាលក្រុមប្រឹក្សាអភិបាលកីឡា។",
      image: Banners.article,
      href: "/",
    },
  ]

  const banners = [
    Banners.banner1,
    Banners.banner2,
    Banners.banner3,
    Banners.banner4
  ]

  const subBanners = [
    Banners.subBanner1,
    Banners.subBanner2,
    Banners.subBanner3,
    Banners.subBanner4
  ]

  const sports = [
    { id: "1", label: "កីឡាបាល់ទាត់កម្ពុជា" },
    { id: "2", label: "កីឡាអេឡិចត្រូនិច" },
    { id: "3", label: "កីឡាប៊ូល និងប៉េតង់" },
    { id: "4", label: "កីឡាហែលទឹក" },
    { id: "5", label: "កីឡាបាល់ទះជាតិ" },
    { id: "6", label: "កីឡាវាយសី" },
    { id: "7", label: "កីឡាសីដក់" },
  ]

  return (
    <div className="mt-16">
      <div className="w-full">
        <Swiper
          loop
          speed={2000}
          spaceBetween={20}
          autoplay={{ delay: 3000 }}
          effect="fade"
          className="object-contain"
          modules={[Autoplay, Pagination, EffectFade]}
          fadeEffect={{ crossFade: true }}
          pagination={{ clickable: true }}
        >
          {banners.map((bannerSrc, index) => (
            <SwiperSlide key={index}>
              <Image
                alt="banner"
                src={bannerSrc}
                className="w-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <SectionHeader title="សហព័ន្ធកីឡាជាតិ" seeMore={{ label: "មើលបន្ថែមទៀត", onClick: () => router.push('/federation') }}>
        <div className="overflow-x-auto overflow-y-hidden no-scrollbar">
          <div className="flex gap-20 min-w-max">
            {federations.map((confederation, index) => (
              <FederationCard
                key={index}
                src={confederation.src}
                title={confederation.title}
                subtitle={confederation.subtitle}
              />
            ))}
          </div>
        </div>
      </SectionHeader>

      <SectionHeader title="អត្តពលិកកម្ពុជាឈ្នះមេដាយដំបូងនៅកម្ពុជា" titleAlign="center" mainWrapper="bg-zinc-100">
        <div className="flex justify-center rounded-2xl">
          <Swiper
            loop
            speed={2000}
            spaceBetween={20}
            autoplay={{ delay: 3000 }}
            effect="fade"
            className="object-contain"
            modules={[Autoplay, Pagination, EffectFade]}
            fadeEffect={{ crossFade: true }}
            pagination={{ clickable: true }}
          >
            {subBanners.map((bannerSrc, index) => (
              <SwiperSlide key={index}>
                <Image
                  alt="banner"
                  src={bannerSrc}
                  className="w-full object-cover rounded-2xl"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </SectionHeader>

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

      <SectionHeader title="ប្រវត្តិកីឡាករ">
        <>
          <SportsTab items={sports} />
          <div className="overflow-x-auto overflow-y-hidden no-scrollbar">
            <div className="flex gap-10">
              {athletes.map(({ id, ...athlete }) => (
                <AthleteCard key={id} {...athlete} />
              ))}
            </div>
          </div>
        </>
      </SectionHeader>

      <SectionHeader title="ព័ត៌មានចុងក្រោយពីអគ្គនាយកដ្ឋានកីឡា" seeMore={{ label: "មើលព័ត៌មានច្រើនទៀត", onClick: () => router.push('/article') }}>
        <div className="overflow-x-auto no-scrollbar">
          <div className="flex gap-4 min-w-max pb-2">
            {articles.map((article) => (
              <ArticleCard
                key={article.id}
                article={article}
              />
            ))}
          </div>
        </div>
      </SectionHeader>

      <SectionHeader title="ដៃគូសហការរបស់យើង" titleAlign="center">
        <div className="overflow-x-auto overflow-y-hidden no-scrollbar border border-zinc-200 bg-white">
          <div className="flex min-w-max divide-x divide-zinc-200">
            {partners.map((partner) => (
                <PartnerCard
                  key={partner.id}
                  logo={partner.logo}
                  name={partner.name}
                />
              ))}
          </div>
        </div>
      </SectionHeader>
    </div>
  );
}
