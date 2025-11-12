import Link from 'next/link';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-ink text-onDark border-t border-graphite">
      <div className="max-w-container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">
              Marco Sarro <span className="text-primary">Detailing</span>
            </h3>
            <p className="text-sm text-slate mb-4">
              Centro specializzato in detailing auto, lucidatura e protezione ceramica.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold mb-4">Servizi</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/servizi" className="text-slate hover:text-primary">Detailing Completo</Link></li>
              <li><Link href="/servizi" className="text-slate hover:text-primary">Lucidatura Auto</Link></li>
              <li><Link href="/servizi" className="text-slate hover:text-primary">Protezione Ceramica</Link></li>
              <li><Link href="/servizi" className="text-slate hover:text-primary">Sanificazione Interni</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold mb-4">Informazioni</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/il-centro" className="text-slate hover:text-primary">Il Centro</Link></li>
              <li><Link href="/pacchetti" className="text-slate hover:text-primary">Pacchetti & Offerte</Link></li>
              <li><Link href="/shop" className="text-slate hover:text-primary">Shop</Link></li>
              <li><Link href="/contatti" className="text-slate hover:text-primary">Contatti</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold mb-4">Contatti</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-slate">Via Roma 123, Milano</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span className="text-slate">+39 333 123 4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <span className="text-slate">info@marcosarro.it</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-graphite mt-12 pt-8 text-center text-sm text-slate">
          <p>&copy; {new Date().getFullYear()} Marco Sarro Detailing. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
}
