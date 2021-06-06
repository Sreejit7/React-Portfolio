export const getDimensions = (elem) => {
  const { height } = elem?.getBoundingClientRect();
  const offsetTop = elem?.offsetTop;
  const offsetBottom = offsetTop + height;

  return {
    height,
    offsetTop,
    offsetBottom,
  };
};
