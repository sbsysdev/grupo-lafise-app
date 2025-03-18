/* native */
import { TextProps } from 'react-native';
/* types */
import { ThemeFamily, ThemeSize, ThemeTextPriority, ThemeWeight } from '@/shared/types';

export interface LabelProps extends TextProps {
  priority?: ThemeTextPriority;
  family?: ThemeFamily;
  weight?: ThemeWeight;
  size?: ThemeSize;
}
