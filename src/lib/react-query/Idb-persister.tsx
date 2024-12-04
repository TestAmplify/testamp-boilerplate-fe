"use client";
import { get, set, del } from "idb-keyval";
import {
  PersistedClient,
  Persister,
} from "@tanstack/react-query-persist-client";

/**
 * Creates an Indexed DB persister
 * @see https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API
 */
export function createIDBPersister(idbValidKey: IDBValidKey = "reactQuery") {
  return {
    persistClient: async (client: PersistedClient) => {
      await set(idbValidKey, client); // Persist the client in IndexedDB
    },
    restoreClient: async () => {
      return await get<PersistedClient>(idbValidKey); // Restore the client from IndexedDB
    },
    removeClient: async () => {
      await del(idbValidKey); // Remove the client from IndexedDB
    },
  } as Persister;
}
