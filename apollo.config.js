module.exports = {
	client: {
		name: 'walkin-console',
		service: {
			name: 'walkin-app',
			url: 'https://dev-api.getwalkin.in/core_dev/graphql',
		},
		includes: ['packages/**/*.js'],
	},
	client: {
		name: 'NearX-console',
		service: {
			name: 'nearx-app',
			url: 'http://206.189.91.111:3001/graphql',
		},
		includes: ['packages/**/*.js'],
	},
};
