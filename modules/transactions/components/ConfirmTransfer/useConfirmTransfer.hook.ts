/* native */
import { useRouter } from 'expo-router';
import { transactionStore } from '../../stores';

export const useConfirmTransfer = () => {
  const router = useRouter();

  const transaction = transactionStore(state => state.transaction);
  const transactionState = transactionStore(state => state.transactionState);
  const transactionError = transactionStore(state => state.transactionError);

  const confirmTransaction = transactionStore(state => state.confirmTransaction);

  const handleConfirmTransfer = () =>
    confirmTransaction(() => {
      router.dismiss(1);

      router.replace('/success');
    });

  return { handleConfirmTransfer, transaction, transactionState, transactionError };
};
