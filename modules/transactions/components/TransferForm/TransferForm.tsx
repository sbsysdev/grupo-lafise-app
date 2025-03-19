/* native */
import { View } from 'react-native';
/* components */
import { Button, Field, Label } from '@/shared/components';

const TransferForm = () => {
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
        />

        <Field title="¿Cuánto dinero enviarás?" placeholder="C$500" keyboardType="numeric" />
      </View>

      <View className="border-t border-disabled px-6 pb-6 pt-4">
        <Button priority="primary" aspect="fill">
          <Label priority="white" weight="bold" size="lg">
            Enviar
          </Label>
        </Button>
      </View>
    </View>
  );
};

export default TransferForm;
