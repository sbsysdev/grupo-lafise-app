/* native */
import { ReactNode } from 'react';
import { TextInputProps } from 'react-native';

export interface FieldProps extends TextInputProps {
  title?: string | ReactNode;
  before?: ReactNode;
  after?: ReactNode;
  hint?: string | ReactNode;
  error?: boolean;
}
