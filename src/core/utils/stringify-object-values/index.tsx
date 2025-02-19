export const stringifyObjectValues = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  params: Record<string, any>
): Record<string, string> => {
  return Object.fromEntries(
    Object.entries(params)
      .filter(([, value]) => value !== undefined && value !== null)
      .map(([key, value]) => {
        if (typeof value === 'object' || Array.isArray(value))
          return [key, JSON.stringify(value)];
        return [key, String(value)];
      })
  );
};
