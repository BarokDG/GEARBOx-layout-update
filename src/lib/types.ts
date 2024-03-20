export interface Trial {
  additionalInfo?: {
    title: string;
    description: string;
  };
  description: string;
  id: number;
  location?: string | string[];
  name: string;
  title: string;
  url: string;
}
