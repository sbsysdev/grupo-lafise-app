/* native */
import { View } from 'react-native';
import { useRouter } from 'expo-router';
/* components */
import { Button, Label } from '@/shared/components';

const SuccessResume = () => {
  const router = useRouter();

  const handleReturnHome = () => {
    router.dismissAll();
  };

  return (
    <View className="flex-grow gap-8">
      <View className="px-6 items-center">
        <Label priority="subtitle" size="3xl" weight="semiBold">
          Envío con éxito
        </Label>

        <Label priority="actions">18 de febrero de 2024, 09:30 AM</Label>
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
              C$1,000
            </Label>
          </View>

          <View className="py-2 gap-1 items-center">
            <Label priority="actions" weight="semiBold">
              Al número de cuenta
            </Label>

            <Label priority="titleConfirm" size="lg">
              130492890
            </Label>
          </View>

          <View className="py-2 gap-1 items-center">
            <Label priority="actions" weight="semiBold">
              Cuenta utilizada para el envío
            </Label>

            <Label priority="titleConfirm" size="lg">
              0234567645
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
