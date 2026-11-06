import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { caseStudies, getCaseStudyBySlug } from "@/data/projects"
import CaseStudyClient from "@/components/CaseStudyClient"

interface ProjectPageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }))
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params
  const study = getCaseStudyBySlug(slug)

  if (!study) {
    return {
      title: "Proyecto no encontrado | Juan Manuel Cabrera",
    }
  }

  return {
    title: `${study.title} — Caso de Estudio | Juan Manuel Cabrera`,
    description: study.shortSummary,
  }
}

export default async function ProjectCaseStudyPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params
  const currentIndex = caseStudies.findIndex((item) => item.slug === slug)

  if (currentIndex === -1) {
    notFound()
  }

  const study = caseStudies[currentIndex]
  const nextStudy = caseStudies[(currentIndex + 1) % caseStudies.length]

  return <CaseStudyClient study={study} nextStudy={nextStudy} />
}

