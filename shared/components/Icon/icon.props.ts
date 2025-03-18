/* native */
import { SvgProps } from 'react-native-svg';
/* types */
import { ThemeSize, ThemeTextPriority } from '@/shared/types';

export interface IconProps extends SvgProps {
  priority?: ThemeTextPriority;
  size?: ThemeSize;
  path?: string;
}
