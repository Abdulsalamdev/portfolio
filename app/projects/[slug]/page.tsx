import { notFound } from "next/navigation";
import { projects } from "@/data/project";
import ProjectDetail from "@/components/ProjectDetail";

type Props = {
  params: Promise<{ slug: string }>; // params is a Promise in App Router
};

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params; //  await the params
  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  return <ProjectDetail project={project} />;
}
