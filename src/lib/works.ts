import { workCaseStudies } from "../data/works";
import type { WorkCaseStudy } from "../data/works";

export function getAllWorkCaseStudies(): WorkCaseStudy[] {
  return workCaseStudies;
}

export function getWorkCaseStudyBySlug(slug: string): WorkCaseStudy | undefined {
  return workCaseStudies.find((work) => work.slug === slug);
}

export function getWorkCaseStudySlugs(): string[] {
  return workCaseStudies.map((work) => work.slug);
}

export function getRelatedWorks(slug: string, limit = 3): WorkCaseStudy[] {
  return workCaseStudies.filter((work) => work.slug !== slug).slice(0, limit);
}
