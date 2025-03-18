/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ['./app/**/*.{js,jsx,ts,tsx}', './shared/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        black: 'var(--color-black)',
        white: 'var(--color-white)',

        title: 'var(--color-text-title)',
        subtitle: 'var(--color-text-subtitle)',
        main: 'var(--color-text-main)',
        placeholder: 'var(--color-text-placeholder)',
        muted: 'var(--color-text-muted)',
        actions: 'var(--color-text-actions)',
        tabs: 'var(--color-text-tabs)',
        titleConfirm: 'var(--color-text-title-confirm)',
        subtitleConfirm: 'var(--color-text-subtitle-confirm)',
        mutedConfirm: 'var(--color-text-muted-confirm)',
        disabled: 'var(--color-text-disabled)',

        actionsDisabled: 'var(--color-actions-disabled)',
        divider: 'var(--color-divider)',

        primaryFill: 'var(--color-primary-fill)',
        primaryMild: 'var(--color-primary-mild)',

        secondaryFill: 'var(--color-secondary-fill)',
        secondaryMild: 'var(--color-secondary-mild)',

        tertiaryFill: 'var(--color-tertiary-fill)',
        tertiaryMild: 'var(--color-tertiary-mild)',

        quadriaryFill: 'var(--color-quadriary-fill)',
        quadriaryMild: 'var(--color-quadriary-mild)',
      },
      fontFamily: {
        mainRegular: 'OpenSans',
        mainMedium: 'OpenSans-Medium',
        mainSemiBold: 'OpenSans-SemiBold',
        mainBold: 'OpenSans-Bold',

        actions: 'Poppins',
      },
    },
  },
  plugins: [
    ({ addBase }) =>
      addBase({
        ':root': {
          '--color-black': '#000000',
          '--color-white': '#FFFFFF',

          '--color-text-title': '#0D1424',
          '--color-text-subtitle': '#272727',
          '--color-text-main': '#181B25',
          '--color-text-placeholder': '#717784',
          '--color-text-muted': '#7E7E7E',
          '--color-text-actions': '#6D6D6D',
          '--color-text-tabs': '#434343',
          '--color-text-title-confirm': '#1C1C1C',
          '--color-text-subtitle-confirm': '#383838',
          '--color-text-muted-confirm': '#67778F',
          '--color-text-disabled': '#CACFD8',

          '--color-divider': '#DFE2E8',
          '--color-actions-disabled': '#EFF2F5',

          '--color-primary-fill': '#018765',
          '--color-primary-mild': '#E6F3F0',

          '--color-secondary-fill': '#E8781C',
          '--color-secondary-mild': '#FFF3E9',

          '--color-tertiary-fill': '#0079A8',
          '--color-tertiary-mild': '#E6F7FD',

          '--color-quadriary-fill': '#52169E',
          '--color-quadriary-mild': '#EAE6F3',
        },
      }),
  ],
};
