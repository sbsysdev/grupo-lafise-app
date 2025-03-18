/* native */
import { Text } from 'react-native';
/* props */
import { LabelProps } from './label.props';
/* utils */
import { classNames } from '@/shared/utils';
/* styles */
import { labelFamilyWeightStyle, labelPriorityStyle, labelSizeStyle } from './label.style';

const Label = ({
  className,
  style,
  priority = 'main',
  family = 'main',
  weight = 'regular',
  size = 'md',
  ...rest
}: LabelProps) => {
  return (
    <Text
      className={classNames(
        '',
        labelPriorityStyle[priority],
        labelFamilyWeightStyle[family][weight],
        labelSizeStyle[size],
        className
      )}
      style={[style]}
      {...rest}
    />
  );
};

export default Label;
