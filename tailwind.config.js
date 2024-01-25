export default {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx,vue}',
    ],
    theme: {
        extend: {
            colors: {
                accent: '#827A6A',
                link: '#827A6A',
                dark: '#333333',
                neutral: '#BCBCBC',
            },
            fontFamily: {
                base: 'Montserrat, sans-serif',
            }
        },
    },
    plugins: [],
}