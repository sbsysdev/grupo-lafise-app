/* native */
import { View } from 'react-native';
/* components */
import { Icon, Label } from '@/shared/components';
/* assets */
import { mdiArrowDown } from '@mdi/js';

const TransactionListItem = () => {
  return (
    <View className="py-3 gap-3 flex-row items-center border-b border-disabled">
      <View className="p-3 bg-primaryMild rounded-full">
        <Icon path={mdiArrowDown} size="xs" priority="primary" />
      </View>

      <View className="flex-grow">
        <Label weight="bold">Pago quincenal</Label>

        <Label priority="placeholder" weight="semiBold">
          Banco
        </Label>
      </View>

      <Label priority="primary" weight="semiBold">
        C$7,500.00
      </Label>
    </View>
  );
};

export default TransactionListItem;
