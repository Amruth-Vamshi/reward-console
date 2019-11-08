export const toNumber = value => {
  const number = parseFloat(value);
  if (!isNaN(number) && isFinite(value)) {
    return number;
  } else {
    return 0;
  }
};
export const removeProp = (obj, propToDelete) => {
  for (var property in obj) {
    if (typeof obj[property] == "object") {
      let objectToCheck = obj[property];
      delete obj.property;
      let newJsonData = this.removeProp(obj[property], propToDelete);
      obj[property] = newJsonData;
    } else {
      if (property === propToDelete) {
        delete obj[property];
      }
    }
  }
  return obj;
};
