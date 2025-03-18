/* native */
import Svg, { Path } from 'react-native-svg';
import { cssInterop } from 'nativewind';
/* props */
import { IconProps } from './icon.props';
/* utils */
import { classNames } from '@/shared/utils';
/* styles */
import { iconPriorityStyle, iconSizeStyle } from './icon.style';

cssInterop(Svg, {
  className: {
    target: 'style',
    nativeStyleToProp: { width: true, height: true },
  },
});

const Icon = ({ className, style, path, priority = 'main', size = 'sm', ...rest }: IconProps) => {
  return (
    <Svg
      className={classNames(iconPriorityStyle[priority], iconSizeStyle[size], className)}
      style={[style]}
      viewBox="0 0 24 24"
      {...rest}
    >
      <Path d={path} fill={'currentColor'} stroke={'currentColor'} />
    </Svg>
  );
};

export default Icon;
