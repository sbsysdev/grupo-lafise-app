/* native */
import { StatusBar } from 'expo-status-bar';
import { Image, ImageBackground, View } from 'react-native';
/* components */
import { Icon, Label } from '@/shared/components';
/* assets */
import { headerBgImage, lafiseImage } from '@/assets/images';
import { mdiEyeOffOutline, mdiSendOutline } from '@mdi/js';

const UserHeader = () => {
  return (
    <ImageBackground className="h-[19rem]" source={headerBgImage} resizeMode="cover">
      <View className="flex-grow bg-primaryFill60 h-[19rem]">
        <StatusBar style="light" />

        <View className="mt-safe p-6 gap-8">
          <View className="flex-row gap-2 justify-between items-center">
            <View className="flex-row gap-2 items-center">
              <Image className="w-7 h-7" source={lafiseImage} />

              <Label priority="white" weight="medium">
                Hola, Steven Bustillo
              </Label>
            </View>

            <Image
              className="rounded-full w-8 h-8"
              source={{
                uri: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png',
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
                  Cuenta de ahorro
                </Label>

                <Label priority="muted">1134948394</Label>
              </View>

              <Icon className="-rotate-[30deg]" path={mdiSendOutline} priority="primary" />
            </View>

            <View className="gap-1">
              <Label priority="muted" size="sm">
                Saldo disponible
              </Label>

              <View className="flex-row gap-2 items-center">
                <Label priority="subtitle" weight="medium">
                  NIO
                </Label>

                <Label size="2xl" priority="subtitle" weight="semiBold">
                  7,500.00
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
