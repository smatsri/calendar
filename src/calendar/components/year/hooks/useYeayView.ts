import { useState } from "react";

export const useYearView = () => {
  const [years, setYears] = useState<any[]>([]);
  return { years }
}