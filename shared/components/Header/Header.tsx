/* native */
import { Pressable, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useRouter } from 'expo-router';
/* props */
import { HeaderProps } from './header.props';
/* components */
import { Label } from '../Label';
import { Icon } from '../Icon';
/* utils */
import { classNames } from '@/shared/utils';
/* assets */
import { mdiChevronLeft } from '@mdi/js';

const Header = ({ className, style, title, goBack, ...rest }: HeaderProps) => {
  const router = useRouter();

  return (
    <View
      className={classNames('mt-safe flex-row items-center gap-2 px-6 py-4', className)}
      style={[style]}
      {...rest}
    >
      <StatusBar style="dark" />

      {goBack && (
        <Pressable onPress={() => router.back()}>
          <Icon path={mdiChevronLeft} priority="black" size="lg" />
        </Pressable>
      )}

      <View className="flex-grow flex-row justify-center">
        <Label priority="subtitle" weight="semiBold" size="lg">
          {title}
        </Label>
      </View>

      {goBack && <Icon path="" priority="black" size="lg" />}
    </View>
  );
};

export default Header;
