/* native */
import { View } from 'react-native';
/* components */
import { Header } from '@/shared/components';
import { TransferForm } from '@/modules/transactions/components';

const TransferScreen = () => {
  return (
    <View className="bg-white flex-grow gap-4">
      <Header title="Transferir dinero" goBack />

      <View className="flex-grow">
        <TransferForm />
      </View>
    </View>
  );
};

export default TransferScreen;
