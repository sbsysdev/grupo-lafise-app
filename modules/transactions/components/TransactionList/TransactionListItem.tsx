/* native */
import { View } from 'react-native';
/* types */
import { TransactionItem } from '../../types';
/* components */
import { Icon, Label } from '@/shared/components';
/* assets */
import { mdiArrowDown, mdiArrowUp } from '@mdi/js';
import { classNames } from '@/shared/utils';

const TransactionListItem = ({ transaction }: { transaction: TransactionItem }) => {
  const format = new Intl.NumberFormat('en-US', { style: 'decimal', minimumFractionDigits: 2 });

  return (
    <View className="py-3 gap-3 flex-row items-center border-b border-disabled">
      <View
        className={classNames(
          'p-3 rounded-full',
          transaction.transactionType === 'Credit' ? 'bg-primaryMild' : 'bg-secondaryMild'
        )}
      >
        <Icon
          path={transaction.transactionType === 'Credit' ? mdiArrowDown : mdiArrowUp}
          size="xs"
          priority={transaction.transactionType === 'Credit' ? 'primary' : 'secondary'}
        />
      </View>

      <View className="flex-grow">
        <Label weight="bold">{transaction.description}</Label>

        <Label priority="placeholder" weight="semiBold">
          {transaction.bankDescription}
        </Label>
      </View>

      <Label
        priority={transaction.transactionType === 'Credit' ? 'primary' : 'secondary'}
        weight="semiBold"
      >
        {transaction.amount.currency} {format.format(transaction.amount.value)}
      </Label>
    </View>
  );
};

export default TransactionListItem;
