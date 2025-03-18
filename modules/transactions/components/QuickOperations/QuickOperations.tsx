/* native */
import { View } from 'react-native';
/* components */
import { Button, Icon, Label } from '@/shared/components';
/* assets */
import { mdiCashFast, mdiCashRefund, mdiCellphone, mdiLightbulbOutline } from '@mdi/js';

const QuickOperations = () => {
  return (
    <View className="bg-white p-4 gap-2 rounded-xl shadow shadow-black">
      <Label size="xl" weight="semiBold">
        Operaciones rápidas
      </Label>

      <View className="flex-row gap-6 justify-between">
        <View className="gap-1 items-center">
          <Button className="w-16 h-16 justify-center" priority="primary" aspect="mild">
            <Icon path={mdiCashRefund} priority="primary" />
          </Button>

          <View className="items-center">
            <Label family="actions" size="sm" priority="actions">
              Transferir
            </Label>
            <Label family="actions" size="sm" priority="actions">
              Dinero
            </Label>
          </View>
        </View>

        <View className="gap-1 items-center">
          <Button className="w-16 h-16 justify-center" priority="secondary" aspect="mild">
            <Icon path={mdiLightbulbOutline} priority="secondary" />
          </Button>

          <View className="items-center">
            <Label family="actions" size="sm" priority="actions">
              Pagar
            </Label>
            <Label family="actions" size="sm" priority="actions">
              Servicio
            </Label>
          </View>
        </View>

        <View className="gap-1 items-center">
          <Button className="w-16 h-16 justify-center" priority="tertiary" aspect="mild">
            <Icon path={mdiCellphone} priority="tertiary" />
          </Button>

          <View className="items-center">
            <Label family="actions" size="sm" priority="actions">
              Recargar
            </Label>
            <Label family="actions" size="sm" priority="actions">
              Celular
            </Label>
          </View>
        </View>

        <View className="gap-1 items-center">
          <Button className="w-16 h-16 justify-center" priority="quadriary" aspect="mild">
            <Icon path={mdiCashFast} priority="quadriary" />
          </Button>

          <View className="items-center">
            <Label family="actions" size="sm" priority="actions">
              Retiro
            </Label>
            <Label family="actions" size="sm" priority="actions">
              sin Tarjeta
            </Label>
          </View>
        </View>
      </View>
    </View>
  );
};

export default QuickOperations;
