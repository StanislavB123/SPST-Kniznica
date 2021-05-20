import { useCallback } from "react";

// hook who say if function is required using later
export const useNoop = () => useCallback(() => {}, []);
