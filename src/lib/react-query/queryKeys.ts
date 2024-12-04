export const drivers = {
  all: ['drivers'] as const,
  lists: () => [...drivers.all, 'list'] as const,
  list: (...filters: string[]) => [...drivers.all, 'list', { ...filters }] as const,
  details: () => [...drivers.all, 'detail'] as const,
  detail: (id: string) => [...drivers.details(), id] as const,
};
