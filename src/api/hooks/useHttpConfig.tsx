import { useCallback } from 'react';
import { formatTokenToBearer, mainApi } from '@api/services/HttpService';
import useAuthHelper from '@features/auth/hooks/useAuthHelper';

const useHttpConfig = () => {
  const { getToken } = useAuthHelper();

  const setupApiAgent = useCallback(() => {
    const mainApiRequestInterceptor = mainApi.interceptors.request.use(
      (config) => {
        const accessToken = getToken();

        if (accessToken) {
          config.headers!['Authorization'] = formatTokenToBearer(accessToken);
        }

        return config;
      },
    );

    return {
      ejectApiAgent: () => {
        mainApi.interceptors.request.eject(mainApiRequestInterceptor);
      },
    };
  }, [getToken]);

  return { setupApiAgent };
};

export default useHttpConfig;
