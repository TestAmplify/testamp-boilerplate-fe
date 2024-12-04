import SideNavbar from './dashboard/sidebar/page';
import React from 'react';
import NavbarDashboard from './dashboard/components/TopNavbarDashboard';
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
      <SideNavbar />
      <main className='w-full bg-white dark:bg-gray-800 min-h-screen font-inter'>
        <NavbarDashboard />
        {children}
      </main>
    </SidebarProvider>
  );
}
