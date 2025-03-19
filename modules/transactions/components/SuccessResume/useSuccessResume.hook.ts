/* native */
import { useRouter } from 'expo-router';
/* storees */
import { transactionStore } from '../../stores';

export const useSuccessResume = () => {
  const router = useRouter();

  const transaction = transactionStore(state => state.transaction);

  const finishTransaction = transactionStore(state => state.finishTransaction);

  const handleReturnHome = () => finishTransaction(() => router.dismissAll());

  return { transaction, handleReturnHome };
};
