export default function(objectToFilter, value) {
  const itemsToReturn = [];

  Object.keys(objectToFilter).forEach(key => {
    if (key.includes(value)) {
      itemsToReturn.push(objectToFilter[key]);
    }
  });

  return itemsToReturn;
}
