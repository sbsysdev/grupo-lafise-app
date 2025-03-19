/* native */
import { View } from 'react-native';
/* components */
import { SuccessHeader, SuccessResume } from '@/modules/transactions/components';

const SuccessScreen = () => {
  return (
    <View className="bg-white flex-grow gap-24">
      <SuccessHeader />

      <View className="flex-grow">
        <SuccessResume />
      </View>
    </View>
  );
};

export default SuccessScreen;
