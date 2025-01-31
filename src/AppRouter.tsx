import { Routes, Route, Navigate } from 'react-router';
import { Dashboard } from '@features/dashboard/routes/Dashboard';
import { Login } from '@features/auth/routes/Login';
import { useEffect } from 'react';
import { checkAuthorization } from '@features/auth/slices/authSlice';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { Spinner } from '@ui/components/spinner';
import { RoutePaths } from '@shared/constants/RoutePaths';
import AppProtected from '@components/AppProtected';
import AuthProtected from '@features/auth/components/AuthProtected';
import { AuthLayout } from '@features/auth/components/AuthLayout';
import { AppLayout } from '@components/AppLayout';
import useHttpConfig from '@api/hooks/useHttpConfig';

export function AppRouter() {
  const dispatch = useAppDispatch();
  useHttpConfig();

  const isAuthenticatedChecked = useAppSelector(
    (state) => state.auth.isAuthenticatedChecked,
  );

  useEffect(() => {
    dispatch(checkAuthorization());
  }, [dispatch]);

  if (!isAuthenticatedChecked) {
    return <Spinner variant="primary" size="lg" />;
  }

  return (
    <Routes>
      <Route
        element={
          <AppProtected>
            <AppLayout />
          </AppProtected>
        }
      >
        <Route index element={<Dashboard />} />
      </Route>

      <Route
        element={
          <AuthProtected>
            <AuthLayout />
          </AuthProtected>
        }
      >
        <Route path={RoutePaths.login} element={<Login />} />
      </Route>

      <Route path="*" element={<Navigate to={RoutePaths.home} replace />} />
    </Routes>
  );
}
