/* native */
import { TabList, Tabs, TabSlot, TabTrigger } from 'expo-router/ui';
/* stores */
import { accountStore } from '@/modules/transactions/stores';
/* components */
import { Button, Icon, Label, TabButton } from '@/shared/components';
/* utils */
import { classNames } from '@/shared/utils';
/* assets */
import { mdiCreditCardOutline, mdiHomeOutline, mdiSwapHorizontal } from '@mdi/js';

const TabsLayout = () => {
  const userState = accountStore(state => state.userState);

  return (
    <Tabs className="bg-white">
      <TabSlot />

      <TabList
        className={classNames(
          'bg-white shadow-2xl shadow-black px-6 pb-4 flex-row items-center justify-between',
          userState !== 'loaded' && 'hidden'
        )}
      >
        <TabTrigger name="home" href="/" asChild>
          <TabButton>
            {({ isFocused, onPress }) => (
              <Button className="gap-3" aspect="plain" onPress={onPress}>
                <Icon path={mdiHomeOutline} priority={isFocused ? 'primary' : 'tabs'} />

                <Label priority={isFocused ? 'primary' : 'tabs'} family="actions" size="xs">
                  Inicio
                </Label>
              </Button>
            )}
          </TabButton>
        </TabTrigger>

        <TabTrigger name="operations" href="/operations" asChild>
          <TabButton>
            {({ isFocused, onPress }) => (
              <Button className="gap-3" aspect="plain" onPress={onPress}>
                <Icon path={mdiSwapHorizontal} priority={isFocused ? 'primary' : 'tabs'} />

                <Label priority={isFocused ? 'primary' : 'tabs'} family="actions" size="xs">
                  Operaciones
                </Label>
              </Button>
            )}
          </TabButton>
        </TabTrigger>

        <TabTrigger name="products" href="/products" asChild>
          <TabButton>
            {({ isFocused, onPress }) => (
              <Button className="gap-3" aspect="plain" onPress={onPress}>
                <Icon path={mdiCreditCardOutline} priority={isFocused ? 'primary' : 'tabs'} />

                <Label priority={isFocused ? 'primary' : 'tabs'} family="actions" size="xs">
                  Productos
                </Label>
              </Button>
            )}
          </TabButton>
        </TabTrigger>
      </TabList>
    </Tabs>
  );
};

export default TabsLayout;
