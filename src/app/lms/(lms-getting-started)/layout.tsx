import SideNavbar from '../../(inner)/dashboard/sidebar/page';
import React from 'react';
import NavbarDashboard from '../../(inner)/dashboard/components/TopNavbarDashboard';
import { SidebarProvider } from '@/components/ui/sidebar';

export const metadata = {
  title: '',
  description: '',
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <div className='flex  min-h-screen '>
        <SideNavbar />
        <div className='grow md:ml-[265px] bg-white dark:bg-gray-800  font-inter relative flex flex-col'>
          <NavbarDashboard />
          <div className='flex-grow'>{children}</div>
        </div>
      </div>
    </SidebarProvider>
  );
}
