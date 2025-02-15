"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { TiThMenu } from "react-icons/ti";
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link";

const SHEET_SIDES = [ "left"] as const

type SheetSide = (typeof SHEET_SIDES)[number]

export function SheetSide() {
  return (
    <div className="grid  gap-2">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <Button variant="outline">
           < TiThMenu/>
            </Button>
          </SheetTrigger>
          <SheetContent side={side}>
            <SheetHeader>
              <SheetTitle>Shop.co</SheetTitle>
             
            </SheetHeader>
            
             {/* navbar */}
        <ul className="grid grid-cols-1 gap-y-4">
            <li className="space-x-5">
                <Link href={""}>Shop</Link>
                <Link href={""}>On Sale</Link>
                <Link href={""}>New Arrivals</Link>
                <Link href={""}>Brands</Link>
            </li>
        </ul>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  );
};
