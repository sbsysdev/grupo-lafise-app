/* native */
import { View } from 'react-native';
/* components */
import { Header } from '@/shared/components';

const TransferScreen = () => {
  return (
    <View className="flex-grow bg-white">
      <Header title="Transferir dinero" goBack />
    </View>
  );
};

export default TransferScreen;
