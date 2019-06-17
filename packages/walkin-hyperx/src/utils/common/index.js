export const toNumber = value => {
	const number = parseFloat(value);
	if (!isNaN(number) && isFinite(value)) {
		return number;
	} else {
		return 0;
	}
};
