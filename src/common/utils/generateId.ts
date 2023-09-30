const idMap = new Map<string, number>();

const generateId = (prefix = 'default') => {
  let currentId = idMap.get(prefix);

  if (!currentId) {
    idMap.set(prefix, 1);
    currentId = 1;
  }

  idMap.set(prefix, currentId + 1);

  return `${prefix}-${currentId}`;
};

export default generateId;
