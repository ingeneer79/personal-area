/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "standalone",
	compress: false,
	transpilePackages: [	
		"antd",
		"rc-util",
		"@babel/runtime",
		"@ant-design/icons",
		"@ant-design/icons-svg",
		"rc-pagination",
		"rc-picker",
		"rc-tree",
		"rc-table",
	],	
	async redirects() {
		return [
		  {
			source: '/',
			destination: '/catalog',
			permanent: true,
		  },
		]
	  },	
};

export default nextConfig;
