export const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const formatActivityGroupType = (groupType: ActivityGroupType) => {
  return groupType
    .replaceAll('-', ' ')
    .split(' ')
    .map((item) => capitalizeFirstLetter(item))
    .join(' ');
};
