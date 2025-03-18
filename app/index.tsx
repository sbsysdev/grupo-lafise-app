/* native */
import { View } from 'react-native';
/* components */
import { QuickOperations, UserHeader } from '@/modules/transactions/components';

const HomeScreen = () => {
  return (
    <View className="bg-white flex-grow gap-4">
      <UserHeader />

      <View className="px-6 mt-10">
        <QuickOperations />
      </View>
    </View>
  );
};

export default HomeScreen;
