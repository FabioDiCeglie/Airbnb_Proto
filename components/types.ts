import { SetStateAction } from "react";

export interface Ranges {
  Selection: Selection;
}
interface Selection {
  startDate: SetStateAction<Date>;
  endDate: SetStateAction<Date>;
  key: string;
}
