/* native */
import { View } from 'react-native';
/* components */
import { UserHeader } from '@/modules/transactions/components';

const HomeScreen = () => {
  return (
    <View
      style={{
        flex: 1,
      }}
      className="bg-white"
    >
      <UserHeader />
    </View>
  );
};

export default HomeScreen;
