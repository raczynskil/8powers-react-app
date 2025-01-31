import logo from '@assets/images/logo_black_text.png';
import { Outlet } from 'react-router';

export function AuthLayout() {
  return (
    <div className="flex min-h-svh w-full bg-muted items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <div className="flex items-center justify-center mb-6">
          <img
            src={logo}
            className="max-w-[240px]"
            alt={import.meta.env.VITE_SITE_TITLE}
          />
        </div>
        <Outlet />
      </div>
    </div>
  );
}
