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
          <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), "px-4 py-2")}>
            <Link href="/">Home</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), "px-4 py-2")}>
            <Link href="/who-are-you">Who Are You</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), "px-4 py-2")}>
            <Link href="/who-are-we">Who Are We</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}