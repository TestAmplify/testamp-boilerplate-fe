"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
// import { Icons } from "@/components/icons";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const resources: { title: string; href: string; description: string }[] = [
  {
    title: "Snippets",
    href: "/",
    description:
      "Collection of sample code snippets to test specific elements and functions",
  },
  {
    title: "Coding Ground",
    href: "/",
    description:
      "A coding platform supporting multiple languages where you can write, run, and debug code.",
  },
  {
    title: "Domain Specific Test Apps",
    href: "/",
    description:
      "A variety of applications tailored for testing specific use cases and domains.",
  },
  {
    title: "Chat with Coaches",
    href: "/",
    description:
      "Get live guidance and support from experienced coaches to enhance your learning and solve coding challenges.",
  },
  {
    title: "TestAmpGPT",
    href: "/",
    description:
      "TestAmplify AI model designed to assist in your automation journey.",
  },
];

export function NavMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Products</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    {/* <Icons.logo className="h-6 w-6" /> */}
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Test Amplify
                    </div>
                    <p className="text-md leading-tight tracking-normal text-muted-foreground">
                      {/* Transform Your QA Career with Hands-On Test Automation
                      Training. <br></br> <br></br>  */}
                      Get real-world experience with AI-driven guidance and
                      expert mentorship in a simulated office environment.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/" title="TestAmpAi">
                TestAmpAi for learning
              </ListItem>
              <ListItem href="/" title="TestAmpCapture">
                Capture Elements, Categorize, Store
              </ListItem>
              <ListItem href="/" title="TestAmpProfiler">
                Enhanced CV & Showcaser
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {resources.map((resource) => (
                <ListItem
                  key={resource.title}
                  title={resource.title}
                  href={resource.href}
                >
                  {resource.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link
            target="_blank"
            href="https://discord.com/"
            legacyBehavior
            passHref
          >
            <NavigationMenuLink
              className={cn(
                navigationMenuTriggerStyle(),
                "hover:bg-transparent hover:text-primary hover:underline"
              )}
            >
              Community
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link
            target="_blank"
            href="https://dev.to/testamplify"
            legacyBehavior
            passHref
          >
            <NavigationMenuLink
              className={cn(
                navigationMenuTriggerStyle(),
                "hover:bg-transparent hover:text-primary hover:underline"
              )}
            >
              Blog
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link target="_blank" href="/about" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(
                navigationMenuTriggerStyle(),
                "hover:bg-transparent hover:text-primary hover:underline"
              )}
            >
              About us
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
