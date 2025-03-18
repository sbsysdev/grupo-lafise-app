/* native */
import { Fragment } from 'react';
import { FlatList } from 'react-native';
/* components */
import TransactionListItem from './TransactionListItem';

const TransactionList = () => {
  return (
    <FlatList
      data={[...Array(40)].map((_, index) => ({ key: index }))}
      renderItem={({ item }) => {
        console.log(item);
        return (
          <Fragment key={item.key}>
            <TransactionListItem />
          </Fragment>
        );
      }}
      keyExtractor={(item, _) => item.key.toString()}
    />
  );
};

export default TransactionList;
