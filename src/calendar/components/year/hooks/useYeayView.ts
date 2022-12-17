import { useEffect, useState } from "react";
import { getMonths, Month } from "../../../model";


const months = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]


export const useYearView = (year: number) => {
  return { months }
}