export interface Pet {
  info: PetInfo[];
  loading: boolean;
  error: any;
}

export interface PetInfo {
  id: string;
  category: Category;
  name: string;
  photoUrls: string[];
  tags: Tags[];
  status: Status;
}

export type Status = "available" | "pending" | "sold";

interface Category {
  id: number;
  name: string;
}

interface Tags {
  id: number;
  name: string;
}