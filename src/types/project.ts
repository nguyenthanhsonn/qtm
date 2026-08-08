export interface ProjectMetric {
  val: string;
  lbl: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  client: string;
  summary: string;
  image: string;
  startDate?: string;
  targetAudience?: string;
  speakers?: string[];
  metrics: ProjectMetric[];
  challenge: string;
  solution: string;
  impact: string;
}

export type ProjectData = ProjectItem;
