/* native */
import { View } from 'react-native';
/* components */
import { QuickOperations, TransactionList, UserHeader } from '@/modules/transactions/components';

const HomeScreen = () => {
  return (
    <View className="bg-white flex-grow gap-6 overflow-hidden">
      <UserHeader />

      {/* combine 'flex-grow' & 'h-[#]' to expand on remain space */}
      <View className="flex-grow px-6 mt-10 mb-4 gap-4 h-0">
        <QuickOperations />

        <TransactionList />
      </View>
    </View>
  );
};

export default HomeScreen;
