const isEmpty = (value) => {
  if (value) {
    return !value.length;
  }

  return true;
};

const getAttribute = (value) => (isEmpty(value) ? undefined : value);

export { getAttribute };
