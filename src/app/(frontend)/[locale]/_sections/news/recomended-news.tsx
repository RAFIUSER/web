'use client'
import React from 'react'
import { useNews } from '../../_hooks/queries/news'
import { useTranslations } from 'next-intl'
import { NewsCard, NewsCardSkeleton } from './news-card'

function RecommendedNews() {
  const t = useTranslations('pages.newsPage.recommended')

  const {
    data: news,
    isPending: newsPending,
    isError: newsError,
  } = useNews({ limit: 6, featured: true })
  const SKELETONS = Array.from({ length: 3 })

  return (
    <div>
      <div className="mb-4">
        <h2 className="text-lg font-bold">{t('title')}</h2>
        <span className="text-sm text-muted-foreground">{t('description')}</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
        {newsPending
          ? SKELETONS.map((_, idx) => <NewsCardSkeleton key={idx} />)
          : newsError
            ? SKELETONS.map((_, idx) => <NewsCardSkeleton key={idx} />)
            : news.docs.map((data, idx) => <NewsCard {...data} key={idx} />)}
      </div>
    </div>
  )
}

export default RecommendedNews
