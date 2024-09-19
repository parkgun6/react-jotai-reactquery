export const menuQueryKeys = {
  menus: ['menus'],
  details: () => [...menuQueryKeys.menus, 'detail'],
  detail: (id: number) => [...menuQueryKeys.details(), id],
};
