import { SetStateAction } from "react";

export interface Ranges {
  selection: Selection;
}
interface Selection {
  startDate: SetStateAction<Date>;
  endDate: SetStateAction<Date>;
  key: string;
}
