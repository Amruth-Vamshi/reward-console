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
		expressionType: extraPropValue,
	}));
};

export const isValidObject = objToTest => {
	if (null == objToTest) return false;
	if ('undefined' == typeof objToTest) return false;
	return true;
};

export const strToRule = rule => {
	let str = rule;
	var mapObj = {
		// ruleAttributeId: 'field',
		attributeName: 'field',
		attributeValue: 'value',
		expressionType: 'operator',
	};
	if (typeof str != 'string') str = JSON.stringify(str)
	str = str.replace(/attributeName|attributeValue|expressionType/gi, matched => mapObj[matched]);
	return JSON.parse(str)
}

export const fieldConvert = (jsObjects: Array<{}>, val: string, from: string, to: string) => {
	let field = jsObjects.find((obj: any) => obj[from] === val)
	return field ? field[to] : ''
}