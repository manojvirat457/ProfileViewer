import { signal } from "@preact-signals/safe-react";

export const activeTab = signal(0);
export const searchResult = signal(null);
export const userHistory = signal([]);