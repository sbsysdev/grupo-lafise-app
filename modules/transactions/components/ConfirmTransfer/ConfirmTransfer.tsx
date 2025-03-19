/* native */
import { ActivityIndicator, View } from 'react-native';
/* hooks */
import { useConfirmTransfer } from './useConfirmTransfer.hook';
/* components */
import { Button, Icon, Label } from '@/shared/components';
/* assets */
import { mdiCellphone } from '@mdi/js';

const ConfirmTransfer = () => {
  const { handleConfirmTransfer, transaction, transactionState, transactionError } =
    useConfirmTransfer();

  const format = new Intl.NumberFormat('en-US', { style: 'decimal', minimumFractionDigits: 2 });

  return (
    <View className="gap-12 flex-grow">
      <View className="gap-5 items-center">
        <View className="w-28 h-28 items-center justify-center bg-tertiaryMild rounded-full">
          <Icon path={mdiCellphone} size="xl" priority="tertiary" />
        </View>

        <View className="items-center">
          <Label priority="subtitleConfirm" size="lg">
            Total a enviar
          </Label>

          <Label priority="subtitle" weight="semiBold" size="4xl">
            {transaction.amount.currency} {format.format(transaction.amount.value)}
          </Label>
        </View>
      </View>

      <View className="flex-grow px-6">
        <View className="py-4 border-b border-disabled">
          <Label priority="title" weight="semiBold">
            Al número de cuenta
          </Label>

          <Label priority="mutedConfirm" weight="semiBold">
            {transaction.destination}
          </Label>
        </View>

        <View className="py-4 border-b border-disabled">
          <Label priority="title" weight="semiBold">
            Cuenta a utilizar para el envío
          </Label>

          <Label priority="mutedConfirm" weight="semiBold">
            {transaction.origin}
          </Label>
        </View>

        {transactionState === 'loading' && (
          <ActivityIndicator className="color-primaryFill mt-4" size="large" />
        )}
      </View>

      {transactionState === 'error' && (
        <Label priority="secondary" size="2xl" weight="medium">
          {transactionError}
        </Label>
      )}

      <View className="border-t border-disabled px-6 pb-6 pt-4">
        <Button
          priority="primary"
          aspect="fill"
          onPress={handleConfirmTransfer}
          disabled={transactionState === 'loading'}
        >
          <Label priority="white" weight="bold" size="lg">
            Confirmar el envío
          </Label>
        </Button>
      </View>
    </View>
  );
};

export default ConfirmTransfer;
