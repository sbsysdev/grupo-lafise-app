/* native */
import { ViewProps } from 'react-native';

export interface HeaderProps extends ViewProps {
  title: string;
  goBack?: boolean;
}
