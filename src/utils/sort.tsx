// This function takes an array of data, a field to sort on, and an order (1 or -1).
export function sort(data: any, field: string | null, order: number) {
  // If the field is null or undefined, return the original data.
  if (!field) {
    return data;
  }
  // Determine the transform to apply based on the order.
  const transform = order === 1 ? 1 : -1;
  return [...data].sort((a, b) => {
    if (a[field] < b[field]) {
      return -1 * transform;
    } else if (a[field] > b[field]) {
      return 1 * transform;
    } else {
      return 0;
    }
  });
}
