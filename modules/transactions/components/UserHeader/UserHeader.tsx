/* native */
import { StatusBar } from 'expo-status-bar';
import { useRouter } from 'expo-router';
import { Image, ImageBackground, Pressable, View } from 'react-native';
/* stores */
import { accountStore } from '../../stores';
/* components */
import { Icon, Label } from '@/shared/components';
/* assets */
import { headerBgImage, lafiseImage } from '@/assets/images';
import { mdiEyeOffOutline, mdiSendOutline } from '@mdi/js';

const UserHeader = () => {
  const router = useRouter();

  const user = accountStore(state => state.user);
  const account = accountStore(state => state.mainAccount);

  const format = new Intl.NumberFormat('en-US', { style: 'decimal', minimumFractionDigits: 2 });

  return (
    <ImageBackground className="h-[19rem]" source={headerBgImage} resizeMode="cover">
      <View className="flex-grow bg-primaryFill60 h-[19rem]">
        <StatusBar style="light" />

        <View className="mt-safe p-6 gap-8">
          <View className="flex-row gap-2 justify-between items-center">
            <View className="flex-row gap-2 items-center">
              <Image className="w-7 h-7" source={lafiseImage} />

              <Label priority="white" weight="medium">
                Hola, {user.fullName}
              </Label>
            </View>

            <Image
              className="rounded-full w-8 h-8"
              source={{
                uri: user.profilePhoto,
              }}
            />
          </View>

          <View className="flex-row items-center gap-2">
            <Label priority="white" weight="medium" size="xl">
              Mis productos
            </Label>

            <Icon path={mdiEyeOffOutline} priority="white" />
          </View>

          <View className="bg-white p-4 gap-6 rounded-xl shadow shadow-black">
            <View className="flex-row gap-2 justify-between items-center">
              <View>
                <Label priority="subtitle" weight="medium">
                  {account.alias}
                </Label>

                <Label priority="muted">{account.accountNumber}</Label>
              </View>

              <Pressable onPress={() => router.push('/transfer')}>
                <Icon className="-rotate-[30deg]" path={mdiSendOutline} priority="primary" />
              </Pressable>
            </View>

            <View className="gap-1">
              <Label priority="muted" size="sm">
                Saldo disponible
              </Label>

              <View className="flex-row gap-2 items-center">
                <Label priority="subtitle" weight="medium">
                  {account.currency}
                </Label>

                <Label size="2xl" priority="subtitle" weight="semiBold">
                  {format.format(account.balance)}
                </Label>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default UserHeader;
