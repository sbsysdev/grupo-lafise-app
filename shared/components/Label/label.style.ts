/* types */
import { ThemeFamily, ThemeSize, ThemeTextPriority, ThemeWeight } from '@/shared/types';

export const labelPriorityStyle: Record<ThemeTextPriority, string> = {
  primary: 'text-primaryFill',
  secondary: 'text-secondaryFill',
  tertiary: 'text-tertiaryFill',
  quadriary: 'text-quadriaryFill',
  black: 'text-black',
  white: 'text-white disabled:text-disabled',
  title: 'text-title',
  subtitle: 'text-subtitle',
  main: 'text-main',
  placeholder: 'text-placeholder',
  muted: 'text-muted',
  actions: 'text-actions',
  tabs: 'text-tabs',
  titleConfirm: 'text-titleConfirm',
  subtitleConfirm: 'text-subtitleConfirm',
  mutedConfirm: 'text-mutedConfirm',
};

export const labelFamilyWeightStyle: Record<ThemeFamily, Record<ThemeWeight, string>> = {
  main: {
    regular: 'font-mainRegular',
    medium: 'font-mainMedium',
    semiBold: 'font-mainSemiBold',
    bold: 'font-mainBold',
  },
  actions: {
    regular: 'font-actions',
    medium: 'font-actions',
    semiBold: 'font-actions',
    bold: 'font-actions',
  },
};

export const labelSizeStyle: Record<ThemeSize, string> = {
  xs: 'text-[0.625rem] leading-3',
  sm: 'text-xs leading-4',
  md: 'text-sm leading-5',
  lg: 'text-base leading-6',
  xl: 'text-xl leading-7',
  '2xl': 'text-2xl leading-8',
  '3xl': 'text-[2rem] leading-9',
  '4xl': 'text-[2.5rem] leading-[3rem]',
};
