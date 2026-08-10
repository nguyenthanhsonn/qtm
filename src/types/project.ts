export interface ProjectMetric {
  val: string;
  lbl: string;
}

export interface ProjectSection {
  title: string;
  content: string;
  bullets?: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  client: string;
  summary: string;
  sapo?: string;
  image: string;
  startDate?: string;
  targetAudience?: string;
  speakers?: string[];
  metrics: ProjectMetric[];
  challenge: string;
  solution: string;
  impact: string;
  sections?: ProjectSection[];
}

export type ProjectData = ProjectItem;
