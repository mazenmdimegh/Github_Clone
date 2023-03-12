// This interface defines the shape of a repository model.
export interface RepoModel {
  id: string;
  name: string;
  url: string;
  description: string;
  primaryLanguage: {
    __typename:string,
    name: string
  };
  forkCount: number;
  updatedAt: string;
  isFork: boolean;
  isMirror: boolean;
  isTemplate: boolean;
  isArchived: boolean;
  isPrivate: boolean;
}
