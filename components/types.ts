import { SetStateAction } from "react";

export interface Ranges {
  selection: Selection;
}
interface Selection {
  startDate: SetStateAction<Date>;
  endDate: SetStateAction<Date>;
  key: string;
}

export interface SearchResults {
  img: string;
  location: string;
  title: string;
  description: string;
  star: number;
  price: string;
  total: string;
  long: number;
  lat: number;
}
