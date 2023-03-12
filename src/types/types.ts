import { type } from "os";

// Define a type LanguageDictionary that maps a string key to an object that contains a color string or null and a url string.
export type LanguageDictionary = {
    [key: string]: {
        color: string | null;
        url: string;
    };
}

// Define a type RepositoryType that only allows the values "PUBLIC", "PRIVATE", or "ALL"
export type RepositoryType = 'PUBLIC' | 'PRIVATE' | 'ALL';
