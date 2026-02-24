"use client";
import * as Banners from "@/assets/banners"

import ArticleCard from "@/components/article-card";
import SectionHeader from "@/components/section-header";

const articles = [
  {
    id: "1",
    date: "២៥ មករា ២០២៥",
    title:
      "ពិធីចុះហត្ថលេខាលើអនុស្សរណៈសហការរវាង Lee Dong Sup ប្រធានក្រុម",
    description:
      "Lee Dong Sup បានចូលរួមក្នុងពិធីចុះហត្ថលេខាលើអនុស្សរណៈសហការជាមួយភាគីពាក់ព័ន្ធ ដើម្បីអភិវឌ្ឍវិស័យកីឡា...",
    image: Banners.article,
    href: "/news/1",
  },
  {
    id: "2",
    date: "២៥ មករា ២០២៥",
    title:
      "ពិធីចុះហត្ថលេខាលើអនុស្សរណៈសហការរវាង Lee Dong Sup ប្រធានក្រុម",
    description:
      "Lee Dong Sup បានចូលរួមក្នុងពិធីចុះហត្ថលេខាលើអនុស្សរណៈសហការជាមួយភាគីពាក់ព័ន្ធ ដើម្បីអភិវឌ្ឍវិស័យកីឡា...",
    image: Banners.article,
    href: "/news/1",
  },
  {
    id: "3",
    date: "២៥ មករា ២០២៥",
    title:
      "ពិធីចុះហត្ថលេខាលើអនុស្សរណៈសហការរវាង Lee Dong Sup ប្រធានក្រុម",
    description:
      "Lee Dong Sup បានចូលរួមក្នុងពិធីចុះហត្ថលេខាលើអនុស្សរណៈសហការជាមួយភាគីពាក់ព័ន្ធ ដើម្បីអភិវឌ្ឍវិស័យកីឡា...",
    image: Banners.article,
    href: "/news/1",
  },
  {
    id: "4",
    date: "២៥ មករា ២០២៥",
    title:
      "ពិធីចុះហត្ថលេខាលើអនុស្សរណៈសហការរវាង Lee Dong Sup ប្រធានក្រុម",
    description:
      "Lee Dong Sup បានចូលរួមក្នុងពិធីចុះហត្ថលេខាលើអនុស្សរណៈសហការជាមួយភាគីពាក់ព័ន្ធ ដើម្បីអភិវឌ្ឍវិស័យកីឡា...",
    image: Banners.article,
    href: "/news/1",
  },
  {
    id: "5",
    date: "២៥ មករា ២០២៥",
    title:
      "ពិធីចុះហត្ថលេខាលើអនុស្សរណៈសហការរវាង Lee Dong Sup ប្រធានក្រុម",
    description:
      "Lee Dong Sup បានចូលរួមក្នុងពិធីចុះហត្ថលេខាលើអនុស្សរណៈសហការជាមួយភាគីពាក់ព័ន្ធ ដើម្បីអភិវឌ្ឍវិស័យកីឡា...",
    image: Banners.article,
    href: "/news/1",
  },
  {
    id: "6",
    date: "២៥ មករា ២០២៥",
    title:
      "ពិធីចុះហត្ថលេខាលើអនុស្សរណៈសហការរវាង Lee Dong Sup ប្រធានក្រុម",
    description:
      "Lee Dong Sup បានចូលរួមក្នុងពិធីចុះហត្ថលេខាលើអនុស្សរណៈសហការជាមួយភាគីពាក់ព័ន្ធ ដើម្បីអភិវឌ្ឍវិស័យកីឡា...",
    image: Banners.article,
    href: "/news/1",
  },
  {
    id: "7",
    date: "២៥ មករា ២០២៥",
    title:
      "ពិធីចុះហត្ថលេខាលើអនុស្សរណៈសហការរវាង Lee Dong Sup ប្រធានក្រុម",
    description:
      "Lee Dong Sup បានចូលរួមក្នុងពិធីចុះហត្ថលេខាលើអនុស្សរណៈសហការជាមួយភាគីពាក់ព័ន្ធ ដើម្បីអភិវឌ្ឍវិស័យកីឡា...",
    image: Banners.article,
    href: "/news/1",
  },
]

export default function ArticlePage() {
  return (
    <div className="mt-16">
      <SectionHeader title="ព័ត៌មានចុងក្រោយពីអគ្គនាយកដ្ឋានកីឡា">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {articles.map((article) => (
            <ArticleCard
              key={article.id}
              article={article}
            />
          ))}
        </div>
      </SectionHeader>
    </div>
  )
}
