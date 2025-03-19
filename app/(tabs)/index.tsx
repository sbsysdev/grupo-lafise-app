/* native */
import { ActivityIndicator, View } from 'react-native';
/* hooks */
import { useHomeScreen } from '@/modules/transactions/hooks';
/* components */
import { Button, Label } from '@/shared/components';
import { QuickOperations, TransactionList, UserHeader } from '@/modules/transactions/components';

const HomeScreen = () => {
  const { userState, userError, requestUserInfo } = useHomeScreen();

  if (userState === 'init') return null;

  if (userState === 'loading')
    return (
      <View className="flex-grow items-center justify-center bg-white">
        <ActivityIndicator className="color-primaryFill" size="large" />
      </View>
    );

  if (userState === 'error')
    return (
      <View className="flex-grow items-center justify-center bg-white gap-4">
        <Label priority="secondary" size="2xl" weight="medium">
          {userError}
        </Label>

        <Button priority="primary" aspect="mild" onPress={requestUserInfo}>
          <Label priority="primary" weight="semiBold">
            Volver a intentar
          </Label>
        </Button>
      </View>
    );

  return (
    <View className="bg-white flex-grow gap-6 overflow-hidden">
      <UserHeader />

      {/* combine 'flex-grow' & 'h-[#]' to expand on remain space */}
      <View className="flex-grow px-6 mt-10 mb-4 gap-4 h-0">
        <QuickOperations />

        <TransactionList />
      </View>
    </View>
  );
};

export default HomeScreen;
