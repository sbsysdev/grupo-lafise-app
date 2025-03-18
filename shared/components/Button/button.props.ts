/* native */
import { PressableProps } from 'react-native';
/* types */
import { ThemeAspect, ThemePriority } from '@/shared/types';

export interface ButtonProps extends PressableProps {
  aspect?: ThemeAspect;
  priority?: ThemePriority;
}
