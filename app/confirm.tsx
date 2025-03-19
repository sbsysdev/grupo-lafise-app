/* native */
import { View } from 'react-native';
/* components */
import { Header } from '@/shared/components';
import { ConfirmTransfer } from '@/modules/transactions/components';

const ConfirmScreen = () => {
  return (
    <View className="bg-white flex-grow gap-10">
      <Header title="Confirma tu envío" goBack />

      <View className="flex-grow">
        <ConfirmTransfer />
      </View>
    </View>
  );
};

export default ConfirmScreen;
