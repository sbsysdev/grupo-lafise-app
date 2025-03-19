/* native */
import { Fragment } from 'react';
import { FlatList } from 'react-native';
/* stores */
import { accountStore } from '../../stores';
/* components */
import TransactionListItem from './TransactionListItem';

const TransactionList = () => {
  const transactions = accountStore(state => state.transactions);

  return (
    <FlatList
      data={transactions}
      renderItem={({ item }) => (
        <Fragment key={item.transactionNumber}>
          <TransactionListItem transaction={item} />
        </Fragment>
      )}
      keyExtractor={(item, _) => item.transactionNumber}
    />
  );
};

export default TransactionList;
