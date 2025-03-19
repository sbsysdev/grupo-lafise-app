/* native */
import { View } from 'react-native';
/* hooks */
import useTransferForm from './useTransferForm.hook';
/* components */
import { Button, Field, Icon, Label } from '@/shared/components';
/* assets */
import { mdiPencilOutline } from '@mdi/js';

const TransferForm = () => {
  const { handleSubmitTransferForm, accountField, amountField, errors, isValid, account } =
    useTransferForm();

  return (
    <View className="gap-8 flex-grow">
      <Label className="px-6" priority="title" weight="semiBold" size="xl">
        ¿A quién le enviarás dinero hoy?
      </Label>

      <View className="px-6 gap-6 flex-grow">
        <Field
          title="Ingresa el número de cuenta"
          placeholder="N. de cuenta"
          keyboardType="numeric"
          autoFocus
          after={accountField.value && <Icon path={mdiPencilOutline} />}
          value={accountField.value?.toString()}
          onChangeText={accountField.onChange}
          editable={!accountField.disabled && account.balance >= 100}
          error={!!errors.account}
          hint={errors.account?.message}
        />

        <Field
          title="¿Cuánto dinero enviarás?"
          placeholder={`${account.currency} 500`}
          keyboardType="numeric"
          after={amountField.value && <Icon path={mdiPencilOutline} />}
          value={amountField.value?.toString()}
          onChangeText={amountField.onChange}
          editable={!amountField.disabled && account.balance >= 100}
          error={!!errors.amount}
          hint={errors.amount?.message}
        />

        {account.balance < 100 && (
          <Label className="self-center text-center" priority="secondary" weight="medium">
            No cuenta con suficiente saldo para realizar la transferencia, el mínimo es de{' '}
            <Label priority="secondary" weight="bold">
              {account.currency} 100.00
            </Label>
          </Label>
        )}
      </View>

      <View className="border-t border-disabled px-6 pb-6 pt-4">
        <Button
          priority="primary"
          aspect="fill"
          onPress={handleSubmitTransferForm}
          disabled={!isValid}
        >
          <Label priority="white" weight="bold" size="lg" disabled={!isValid}>
            Enviar
          </Label>
        </Button>
      </View>
    </View>
  );
};

export default TransferForm;
