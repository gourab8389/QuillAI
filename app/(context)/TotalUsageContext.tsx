import { createContext } from "react";

export const TotalUsageContext = createContext<any>({ totalUsage: 0, setTotalUsage: () => {} });
