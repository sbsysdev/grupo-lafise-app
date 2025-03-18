/* native */
import { forwardRef, Fragment, ReactNode } from 'react';
import { TabTriggerSlotProps } from 'expo-router/ui';
import { View } from 'react-native';

type Compose = (props: Omit<TabTriggerSlotProps, 'children'>) => ReactNode;

const TabButton = forwardRef<View, Omit<TabTriggerSlotProps, 'children'> & { children: Compose }>(
  ({ children, ...rest }, _) => {
    return <Fragment>{children(rest)}</Fragment>;
  }
);

TabButton.displayName = 'TabButton';

export default TabButton;
