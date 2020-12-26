export const getDimensions = elem => {
  const {height} = elem.getBoundingClientRect();
  const offSetTop = elem.offSetTop;
  const offSetBottom = offSetTop + height;

  return {
    height,
    offSetTop,
    offSetBottom,
  };
} ;