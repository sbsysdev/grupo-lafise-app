/* native */
import { useRouter } from 'expo-router';
import { useController, useForm } from 'react-hook-form';
/* stores */
import { accountStore, transactionStore } from '../../stores';
/* utils */
import { zodResolver } from '@hookform/resolvers/zod';
/* validations */
import { transferFormValidation } from '../../validations';

type TransferForm = {
  account: string;
  amount: number;
};

const useTransferForm = () => {
  const account = accountStore(state => state.mainAccount);
  const requestTransaction = transactionStore(state => state.requestTransaction);

  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<TransferForm>({
    mode: 'all',
    resolver: zodResolver(transferFormValidation(account.currency, 100, account.balance)),
  });

  const router = useRouter();

  const handleSubmitTransferForm = handleSubmit(data => {
    requestTransaction(account.accountNumber.toString(), data.account, {
      currency: account.currency,
      value: data.amount,
    });

    router.push('/confirm');
  });

  const { field: accountField } = useController({ control, name: 'account' });

  const { field: amountField } = useController({ control, name: 'amount' });

  return { handleSubmitTransferForm, accountField, amountField, errors, isValid, account };
};

export default useTransferForm;
