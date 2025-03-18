/* types */
import { ThemeAspect, ThemePriority } from '@/shared/types';

export const buttonAspectStyle: Record<ThemeAspect, string> = {
  plain: '',
  fill: 'rounded-full disabled:bg-actionsDisabled',
  mild: 'rounded-xl',
};

export const buttonPriorityStyle: Record<ThemeAspect, Record<ThemePriority, string>> = {
  plain: {
    primary: 'active:bg-primaryMild',
    secondary: 'active:bg-secondaryMild',
    tertiary: 'active:bg-tertiaryMild',
    quadriary: 'active:bg-quadriaryMild',
  },
  fill: {
    primary: 'bg-primaryFill',
    secondary: 'bg-secondaryFill',
    tertiary: 'bg-tertiaryFill',
    quadriary: 'bg-quadriaryFill',
  },
  mild: {
    primary: 'bg-primaryMild',
    secondary: 'bg-secondaryMild',
    tertiary: 'bg-tertiaryMild',
    quadriary: 'bg-quadriaryMild',
  },
};
