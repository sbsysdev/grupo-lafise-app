/* native */
import { View } from 'react-native';
/* types */
import { TransactionItem } from '../../types';
/* components */
import { Icon, Label } from '@/shared/components';
/* assets */
import { mdiArrowDown } from '@mdi/js';

const TransactionListItem = ({ transaction }: { transaction: TransactionItem }) => {
  const format = new Intl.NumberFormat('en-US', { style: 'decimal', minimumFractionDigits: 2 });

  return (
    <View className="py-3 gap-3 flex-row items-center border-b border-disabled">
      <View className="p-3 bg-primaryMild rounded-full">
        <Icon path={mdiArrowDown} size="xs" priority="primary" />
      </View>

      <View className="flex-grow">
        <Label weight="bold">{transaction.description}</Label>

        <Label priority="placeholder" weight="semiBold">
          {transaction.bankDescription}
        </Label>
      </View>

      <Label priority="primary" weight="semiBold">
        {transaction.amount.currency}
        {format.format(transaction.amount.value)}
      </Label>
    </View>
  );
};

export default TransactionListItem;
