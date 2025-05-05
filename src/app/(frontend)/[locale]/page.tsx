import React from 'react'
import { Hero } from './_sections/hero-video'
import Partners from './_sections/partners'
import Profile from './_sections/profile'
import Facilities from './_sections/facilities'
import Stats from './_sections/stats'
import News from './_sections/news'
import { getMessages } from 'next-intl/server'
import CTA from './_sections/cta'
import HeadOfDepartment from './_sections/head-of-department'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params

  const messages = await getMessages({ locale })
  const title = messages.navbar.title

  return {
    title,
  }
}

export default async function HomePage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Partners />
      <Profile />
      <HeadOfDepartment />
      <Facilities />
      <Stats />
      <News />
      <CTA />
    </div>
  )
}
