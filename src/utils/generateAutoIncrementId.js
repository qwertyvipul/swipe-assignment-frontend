export const autoIncrement = () => {
  let id = 0;
  return () => ++id;
};
