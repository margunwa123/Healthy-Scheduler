/**
 * Check whether the item is activity or not
 */
export const isActivity = (item: any): item is Activity => {
  if (!item) return false;
  if (!item.id) return false;
  if (!item.title) return false;
  if (!item.type) return false;
  if (item.type !== 'one-time' && item.type !== 'daily') return false;
  return true;
};
