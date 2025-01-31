import { useAppSelector } from '@store/hooks';
import { Navigate } from 'react-router';
import { RoutePaths } from '@shared/constants/RoutePaths';

function AppProtected({ children }: React.PropsWithChildren) {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to={RoutePaths.login} replace />;
  }

  return children;
}

export default AppProtected;
