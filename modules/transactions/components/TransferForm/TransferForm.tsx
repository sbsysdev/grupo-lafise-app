/* native */
import { View } from 'react-native';
/* hooks */
import useTransferForm from './useTransferForm.hook';
/* components */
import { Button, Field, Icon, Label } from '@/shared/components';
/* assets */
import { mdiPencilOutline } from '@mdi/js';

const TransferForm = () => {
  const { handleSubmitTransferForm, accountField, amountField, errors, isValid } =
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
          editable={!accountField.disabled}
          error={!!errors.account}
          hint={errors.account?.message}
        />

        <Field
          title="¿Cuánto dinero enviarás?"
          placeholder="C$500"
          keyboardType="numeric"
          after={amountField.value && <Icon path={mdiPencilOutline} />}
          value={amountField.value?.toString()}
          onChangeText={amountField.onChange}
          editable={!amountField.disabled}
          error={!!errors.amount}
          hint={errors.amount?.message}
        />
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
