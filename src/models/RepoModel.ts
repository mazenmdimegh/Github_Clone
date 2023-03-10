export interface RepoModel {
  id: string;
  name: string;
  url: string;
  description: string;
  primaryLanguage: {
    name: string
  };
  forkCount: number;
  updatedAt: string;
}
