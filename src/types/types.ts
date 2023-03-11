import { type } from "os";

export type LanguageDictionary = {
    [key: string]: {
        color: string | null;
        url: string;
    };
}
export type RepositoryType = 'PUBLIC' | 'PRIVATE' | 'ALL';
// export enum RepositoryType {
//     PUBLIC = 'PUBLIC',
//     PRIVATE = 'PRIVATE',
//     ALL = 'ALL',
//   }