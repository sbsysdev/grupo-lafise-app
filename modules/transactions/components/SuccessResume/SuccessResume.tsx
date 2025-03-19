/* native */
import { View } from 'react-native';
/* hooks */
import { useSuccessResume } from './useSuccessResume.hook';
/* components */
import { Button, Label } from '@/shared/components';
/* utils */
import { format } from 'date-fns';
import { es } from 'date-fns/locale/es';

const SuccessResume = () => {
  const { transaction, handleReturnHome } = useSuccessResume();

  const numberFormat = new Intl.NumberFormat('en-US', {
    style: 'decimal',
    minimumFractionDigits: 2,
  });

  return (
    <View className="flex-grow gap-8">
      <View className="px-6 items-center">
        <Label priority="subtitle" size="3xl" weight="semiBold">
          Envío con éxito
        </Label>

        <Label priority="actions">
          {format(transaction.transactionDate, "dd 'de' MMMM 'de' yyyy',' hh:mm a", {
            locale: es,
          })}
        </Label>
      </View>

      <View className="border-b border-disabled" />

      <View className="flex-grow px-6 gap-4 items-center">
        <Label priority="titleConfirm" size="lg" weight="semiBold">
          Resumen de tu envío
        </Label>

        <View>
          <View className="py-2 gap-1 items-center">
            <Label priority="actions" weight="semiBold">
              Total enviado
            </Label>

            <Label priority="titleConfirm" size="lg">
              {transaction.amount.currency} {numberFormat.format(transaction.amount.value)}
            </Label>
          </View>

          <View className="py-2 gap-1 items-center">
            <Label priority="actions" weight="semiBold">
              Al número de cuenta
            </Label>

            <Label priority="titleConfirm" size="lg">
              {transaction.destination}
            </Label>
          </View>

          <View className="py-2 gap-1 items-center">
            <Label priority="actions" weight="semiBold">
              Cuenta utilizada para el envío
            </Label>

            <Label priority="titleConfirm" size="lg">
              {transaction.origin}
            </Label>
          </View>
        </View>
      </View>

      <View className="border-t border-disabled px-6 pb-6 pt-4">
        <Button priority="primary" aspect="fill" onPress={handleReturnHome}>
          <Label priority="white" weight="bold" size="lg">
            Volver al inicio
          </Label>
        </Button>
      </View>
    </View>
  );
};

export default SuccessResume;
