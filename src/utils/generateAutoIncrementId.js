/**
 * Utility to generate auto incrementing ids
 * @returns Number
 */
export const autoIncrement = () => {
  let id = 0;
  return () => ++id;
};
