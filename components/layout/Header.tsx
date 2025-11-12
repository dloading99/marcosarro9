'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const navItems = [
  { label: 'Servizi', href: '/servizi' },
  { label: 'Shop', href: '/shop' },
  { label: 'Pacchetti & Offerte', href: '/pacchetti' },
  { label: 'Il Centro', href: '/il-centro' },
  { label: 'Visita & Contatti', href: '/contatti' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-ink/80 text-onDark backdrop-blur-xl">
      <div className="max-w-container mx-auto px-4 lg:px-8 relative">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="font-heading font-bold text-xl">
            Marco Sarro <span className="text-primary">Detailing</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-onDark hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-onDark hover:text-primary">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <Button className="bg-primary text-ink hover:bg-primary/90 rounded-button font-medium">
              Prenota
            </Button>
          </div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="text-onDark">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="bottom" className="h-[90vh] bg-ink text-onDark border-t border-graphite">
              <div className="flex flex-col h-full py-6">
                <Accordion type="single" collapsible className="flex-1">
                  <AccordionItem value="servizi" className="border-graphite">
                    <AccordionTrigger className="text-lg font-heading hover:text-primary">
                      Servizi
                    </AccordionTrigger>
                    <AccordionContent>
                      <Link href="/servizi" className="block py-2 px-4 hover:text-primary">
                        Tutti i Servizi
                      </Link>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="shop" className="border-graphite">
                    <AccordionTrigger className="text-lg font-heading hover:text-primary">
                      Shop
                    </AccordionTrigger>
                    <AccordionContent>
                      <Link href="/shop" className="block py-2 px-4 hover:text-primary">
                        Tutti i Prodotti
                      </Link>
                    </AccordionContent>
                  </AccordionItem>
                  {navItems.slice(2).map((item) => (
                    <AccordionItem key={item.href} value={item.href} className="border-graphite">
                      <Link href={item.href} className="flex py-4 text-lg font-heading hover:text-primary">
                        {item.label}
                      </Link>
                    </AccordionItem>
                  ))}
                </Accordion>

                <div className="flex gap-4 pt-6 border-t border-graphite">
                  <Button className="flex-1 bg-primary text-ink hover:bg-primary/90">
                    Prenota
                  </Button>
                  <Button variant="outline" size="icon" className="border-graphite text-onDark">
                    <ShoppingCart className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
      </div>
    </header>
  );
}
