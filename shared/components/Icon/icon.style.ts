/* types */
import { ThemeSize, ThemeTextPriority } from '@/shared/types';

export const iconPriorityStyle: Record<ThemeTextPriority, string> = {
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

export const iconSizeStyle: Record<ThemeSize, string> = {
  xs: 'w-5 h-5',
  sm: 'w-6 h-6',
  md: 'w-7 h-7',
  lg: 'w-8 h-8',
  xl: 'w-10 h-10',
  '2xl': 'w-12 h-12',
  '3xl': 'w-14 h-14',
  '4xl': 'w-[4.5rem] h-[4.5rem]',
};
