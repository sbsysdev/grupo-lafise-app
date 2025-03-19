/* native */
import { useEffect } from 'react';
/* stores */
import { accountStore } from '../stores';

export const useHomeScreen = () => {
  const userState = accountStore(state => state.userState);
  const userError = accountStore(state => state.userError);
  const requestUserInfo = accountStore(state => state.requestUserInfo);

  /* first request */
  useEffect(() => {
    if (userState !== 'init') return;

    requestUserInfo();
  }, [requestUserInfo, userState]);

  return { userState, userError, requestUserInfo };
};
