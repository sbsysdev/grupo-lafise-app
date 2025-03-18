/* native */
import { Pressable } from 'react-native';
/* props */
import { ButtonProps } from './button.props';
/* utils */
import { classNames } from '@/shared/utils';
/* styles */
import { buttonAspectStyle, buttonPriorityStyle } from './button.style';

const Button = ({
  className,
  style,
  aspect = 'fill',
  priority = 'primary',
  ...rest
}: ButtonProps) => {
  return (
    <Pressable
      className={classNames(
        'flex flex-col items-center p-4',
        buttonAspectStyle[aspect],
        buttonPriorityStyle[aspect][priority],
        className
      )}
      style={({ pressed, hovered }) => [
        typeof style === 'function' ? style({ pressed, hovered }) : style,
      ]}
      {...rest}
    />
  );
};

export default Button;
