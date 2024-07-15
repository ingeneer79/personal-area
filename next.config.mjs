/** @type {import('next').NextConfig} */
const nextConfig = {
	// output: "standalone",
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
	// pageExtensions: ['tsx', 'mdx'],
	async redirects() {
		return [
		  {
			source: '/',
			destination: '/cat',
			permanent: true,
		  },
		]
	  },	
};

export default nextConfig;
