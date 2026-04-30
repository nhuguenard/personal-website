import type { Metadata } from 'next';
import ProjectsPageClient from './ProjectsPageClient';

export const metadata: Metadata = {
  title: 'Projects & Case Studies',
  description:
    'Selected project and case study examples from Nick Huguenard, including CI/CD automation, performance refactoring, system debugging, technical leadership, and enterprise software architecture.',
};

export default function ProjectsPage() {
  return <ProjectsPageClient />;
}