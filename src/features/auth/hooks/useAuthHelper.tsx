import { useCallback } from 'react';
import { loadLocalStorage } from '@shared/services/LocalStorageService';

const useAuthHelper = () => {
  const getToken = useCallback((): string => {
    return loadLocalStorage('authToken');
  }, []);

  return {
    getToken,
  };
};

export default useAuthHelper;
