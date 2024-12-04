"use client";
import { QueryClient } from "@tanstack/react-query";
import { createIDBPersister } from "./Idb-persister";

// Initialize QueryClient
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: Infinity, // Keep the cache around indefinitely (no garbage collection)
    },
  },
});

// Create IndexedDB persister
export const idbPersister = createIDBPersister("reactQueryuserInfo");
