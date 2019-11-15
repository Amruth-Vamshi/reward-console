export const toNumber = value => {
	const number = parseFloat(value);
	if (!isNaN(number) && isFinite(value)) return number;
	else return 0;
};
export const removeProp = (obj, propToDelete) => {
	for (var property in obj) {
		if (typeof obj[property] == 'object') {
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
export const returnMatchingKeyvalues = (array, key, obj) => {
	if (!obj.children) return;
	return obj.children.forEach(c => {
		if (c[key]) array.push(c[key]); // is not present, skip!
		returnMatchingKeyvalues(array, key, c);
	});
};

export const transposeObject = (obj, extraPropValue) => {
	return Object.entries(obj).map(([field, value]) => ({
		attributeName: field,
		attributeValue: value,
		operator: extraPropValue,
	}));
};

export const isValidObject = objToTest => {
	if (null == objToTest) return false;
	if ('undefined' == typeof objToTest) return false;
	return true;
};
