'use client';
import * as React from 'react';
import { ThemeToggler } from '../ui/themeToggLer';

import { useEffect, useState } from 'react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import Cookies from 'js-cookie';
import { Menu } from 'lucide-react';
// import { ModeToggle } from "../mode-toggle";

import { Button, buttonVariants } from '../ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { NavMenu } from './NavMenu';
import { useTheme } from '@/contexts/ThemeContext';
import useLogout from '@/hooks/useLogout';

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  {
    href: '/community',
    label: 'Community',
  },
  {
    href: '/blog',
    label: 'Blog',
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState(false);
  const { darkMode } = useTheme();
  const logout = useLogout();
  const accessToken = Cookies.get('accessToken');

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className=' border-b-[1px] sticky top-0 z-40 backdrop-blur-lg w-full dark:border-b-slate-700 dark:bg-background'>
      <NavigationMenu className='mx-auto'>
        <NavigationMenuList className='lg:px-[8rem] h-20 px-4 w-screen flex justify-between '>
          <NavigationMenuItem className='font-bold flex'>
            <Link href='/' className='ml-2 font-bold text-xl'>
              {darkMode ? (
                <Image
                  src='/images/logo_dark.svg'
                  alt='logo'
                  width={200}
                  height={60}
                  priority
                />
              ) : (
                <Image
                  src='/images/logo_light.svg'
                  alt='logo'
                  width={200}
                  height={60}
                  priority
                />
              )}
            </Link>
          </NavigationMenuItem>

          {/* mobile */}
          <span className='flex md:hidden'>
            {/* <ModeToggle /> */}

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className='px-2'>
                <Menu
                  className='flex md:hidden h-5 w-5'
                  onClick={() => setIsOpen(true)}
                >
                  <span className='sr-only'>Menu Icon</span>
                </Menu>
              </SheetTrigger>

              <SheetContent side={'left'}>
                <SheetHeader>
                  <SheetTitle className='font-bold text-xl'>
                    <Link href='/' className='ml-2 font-bold text-xl flex'>
                      <Image
                        src='/images/log.svg'
                        alt='Testamplify logo'
                        width={150}
                        height={150}
                      />{' '}
                    </Link>{' '}
                  </SheetTitle>
                </SheetHeader>
                <nav className='relative flex flex-col justify-center items-center gap-2 mt-4'>
                  <Link
                    href='/products'
                    className={buttonVariants({ variant: 'ghost' })}
                  >
                    Products
                  </Link>

                  <Link
                    href='/resources'
                    className={buttonVariants({ variant: 'ghost' })}
                  >
                    Resources
                  </Link>

                  {routeList.map(({ href, label }: RouteProps) => (
                    <Link
                      rel='noreferrer noopener'
                      key={label}
                      href={href}
                      onClick={() => setIsOpen(false)}
                      className={buttonVariants({ variant: 'ghost' })}
                    >
                      {label}
                    </Link>
                  ))}
                  <div className='flex md:hidden gap-2'>
                    {accessToken ? (
                      <Link
                        href='/dashboard/overview'
                        className={buttonVariants({ variant: 'ghost' })}
                      >
                        Dashboard
                      </Link>
                    ) : (
                      <Link href='/login' className={` `}>
                        <Button variant='secondary'>Login</Button>
                      </Link>
                    )}

                    {accessToken ? (
                      <Link href='' onClick={logout}>
                        <Button variant='primary'>Log out</Button>
                      </Link>
                    ) : (
                      <Link href='/signup'>
                        <Button variant='primary'>Sign up</Button>
                      </Link>
                    )}
                    {/* <ModeToggle /> */}
                  </div>
                  <ThemeToggler className={'mt-2'} />
                </nav>
              </SheetContent>
            </Sheet>
          </span>

          {/* desktop */}
          <nav className='hidden md:flex'>
            <NavMenu />
            {/* {routeList.map((route: RouteProps, i) => (
              <Link
                href={route.href}
                key={i}
                className={`text-[17px] ${buttonVariants({
                  variant: "ghost",
                })}`}
              >
                {route.label}
              </Link>
            ))} */}
          </nav>

          <div className='hidden md:flex gap-2 items-center'>
            {accessToken ? (
              <Link
                href='/dashboard/overview'
                className={buttonVariants({ variant: 'ghost' })}
              >
                Dashboard
              </Link>
            ) : (
              <Link href='/login' className={` `}>
                <Button variant='secondary'>Login</Button>
              </Link>
            )}

            {accessToken ? (
              <Link href='' onClick={logout}>
                <Button variant='primary'>Log out</Button>
              </Link>
            ) : (
              <Link href='/signup'>
                <Button variant='primary'>Sign up</Button>
              </Link>
            )}
            <ThemeToggler className='ml-2' />

            {/* <ModeToggle /> */}
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className='text-sm font-medium leading-none'>{title}</div>
          <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';
