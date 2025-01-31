import { SidebarInset, SidebarProvider } from '@ui/components/sidebar';
import { AppSidebar } from '@components/AppSidebar';
import { AppHeader } from '@components/AppHeader';
import { Outlet } from 'react-router';

export function AppLayout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <AppHeader />
        <Outlet />
      </SidebarInset>
    </SidebarProvider>
  );
}
