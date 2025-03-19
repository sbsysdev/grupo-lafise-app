/* native */
import { Image, ImageBackground, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
/* components */
import { Icon } from '@/shared/components';
/* assets */
import {
  curveLeftImage,
  curveRightImage,
  rectangleBottomLeftImage,
  rectangleBottomRightImage,
  rectangleTopLeftImage,
  rectangleTopRightImage,
  transparentHeaderBgImage,
} from '@/assets/images';
import { mdiCheck } from '@mdi/js';

const SuccessHeader = () => {
  return (
    <View className="rounded-xl">
      <StatusBar style="dark" />

      <ImageBackground className="h-60 overflow-hidden" source={transparentHeaderBgImage}>
        <LinearGradient colors={['#EBF8F100', '#EBF8F1']} />
      </ImageBackground>

      <Image className="absolute left-[15%] top-3/4" source={curveLeftImage} />
      <Image className="absolute left-[80%] top-3/4" source={curveRightImage} />

      <Image className="absolute left-1/3 top-1/2" source={rectangleTopLeftImage} />
      <Image className="absolute left-2/3 top-[45%]" source={rectangleTopRightImage} />

      <Image className="absolute left-[20%] top-[105%]" source={rectangleBottomLeftImage} />
      <Image className="absolute left-3/4 top-[105%]" source={rectangleBottomRightImage} />

      <View className="bg-white w-28 h-28 rounded-full absolute top-44 left-1/2 -translate-x-1/2 items-center justify-center">
        <View className="bg-primaryFillVariant w-20 h-20 rounded-full items-center justify-center">
          <Icon path={mdiCheck} priority="white" size="xl" />
        </View>
      </View>
    </View>
  );
};

export default SuccessHeader;
