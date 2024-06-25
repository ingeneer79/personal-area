/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'standalone',
	reactStrictMode: true,
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
	pageExtensions: ['page.tsx', 'index.tsx']
}

export default nextConfig;
