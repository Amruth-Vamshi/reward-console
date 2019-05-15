import BabelJest from "babel-jest";
export default BabelJest.createTransformer({
	presets: ["es2015", "react", "stage-1"] // or whatever you need
});
