/* native */
import { useRouter } from 'expo-router';
import { useController, useForm } from 'react-hook-form';
/* utils */
import { zodResolver } from '@hookform/resolvers/zod';
/* validations */
import { transferFormValidation } from '../../validations';

type TransferForm = {
  account: string;
  amount: number;
};

const useTransferForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<TransferForm>({
    mode: 'all',
    resolver: zodResolver(transferFormValidation('NIO', 100, 7500)),
  });

  const router = useRouter();

  const handleSubmitTransferForm = handleSubmit(data => {
    console.log(data);

    router.push('/confirm');
  });

  const { field: accountField } = useController({ control, name: 'account' });

  const { field: amountField } = useController({ control, name: 'amount' });

  return { handleSubmitTransferForm, accountField, amountField, errors, isValid };
};

export default useTransferForm;
