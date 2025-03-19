/* native */
import { View } from 'react-native';
/* stores */
import { transactionStore } from '@/modules/transactions/stores';
/* components */
import { Header } from '@/shared/components';
import { ConfirmTransfer } from '@/modules/transactions/components';

const ConfirmScreen = () => {
  const transactionState = transactionStore(state => state.transactionState);

  return (
    <View className="bg-white flex-grow gap-10">
      <Header title="Confirma tu envío" goBack={transactionState !== 'loading'} />

      <View className="flex-grow">
        <ConfirmTransfer />
      </View>
    </View>
  );
};

export default ConfirmScreen;
