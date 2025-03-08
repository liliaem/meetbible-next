"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle
} from "../components/ui/navigation-menu";
import { cn } from "../lib/utils";

export default function NavigationBar() {
//  const [isClient, setIsClient] = useState(false);
  
//  useEffect(() => {
//    setIsClient(true);
//  }, []);
  
//  if (!isClient) {
//    return <div>Loading</div>; // O un esqueleto de carga
// }
  
  return (
    <NavigationMenu className="relative">
      <NavigationMenuList className="flex space-x-4">
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "px-4 py-2")}>
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/who-are-you" legacyBehavior passHref>
            <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "px-4 py-2")}>
              Who Are You
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/who-are-we" legacyBehavior passHref>
            <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "px-4 py-2")}>
              Who Are We
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}