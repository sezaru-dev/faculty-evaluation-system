module.exports = {
	content: ['main/*.{html,js}'],
	theme: {
		container: {
			center: true,
			screens: {
				'2xl': '1408px',
			},
		},
		extend: {
			screens: {
				'3xl': '1920px',
			},
			colors: {
				color1: '#19BF5B',
				color2: '#10CCC6',
				color2a: '#25a163',
				color3: '#3EBD71',
				blk: '#282D2A',
				'blk-75': '#3d413e',
				'blk-50': '#939594',
				'blk-25': '#C9CAC9',
				'blk-10': '#E9E9E9',
				'blk-5': '#F4F4F4',
			},
			fontFamily: {
				Poppins: ['Poppins, sans-serif'],
			},
			fontSize: {
				lh1: ['55px', '70px'],
				lh2: ['44px', '54px'],
				lh3: ['35px', '48px'],
				lh4: ['28px', '38px'],
				lh5: ['23px', '30px'],
				lh6: ['18px', '22px'],
				lh7: ['14px', '18px'],

				sh1: ['49px', '56px'],
				sh2: ['39px', '46px'],
				sh3: ['31px', '38px'],
				sh4: ['25px', '30px'],
				sh5: ['20px', '28px'],
				sh6: ['16px', '20px'],
				sh7: ['14px', '16px'],
				'2xlh1': ['55px', '64px'],
				'2xlh4': ['28px', '34px'],
			},
		},
	},
	darkMode: 'class',
	plugins: [
		require('tailwind-scrollbar-hide') /* , require('@tailwindcss/forms') */,
	],
};
