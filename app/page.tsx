import { Hero } from '@/components/shared/Hero';
import { ServiceCard } from '@/components/shared/ServiceCard';
import { ProductCard } from '@/components/shared/ProductCard';
import { BeforeAfterSlider } from '@/components/shared/BeforeAfterSlider';
import { Reviews } from '@/components/shared/Reviews';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Clock, Award } from 'lucide-react';

const featuredServices = [
  {
    title: 'Detailing Completo',
    description: 'Trattamento completo esterno e interno per una pulizia profonda e duratura',
    price: '€299',
    duration: '6-8 ore',
    benefits: ['Lavaggio e decontaminazione', 'Lucidatura carrozzeria', 'Sanificazione interni'],
    badge: 'Più Richiesto',
    imageSrc: 'https://images.pexels.com/photos/3422964/pexels-photo-3422964.jpeg',
    href: '/servizi/detailing-completo',
  },
  {
    title: 'Lucidatura Auto',
    description: 'Rimozione graffi e restauro della brillantezza originale della vernice',
    price: '€199',
    duration: '4-5 ore',
    benefits: ['Correzione vernice', 'Rimozione graffi superficiali', 'Finitura lucida'],
    imageSrc: 'https://images.pexels.com/photos/3646172/pexels-photo-3646172.jpeg',
    href: '/servizi/lucidatura-auto',
  },
  {
    title: 'Protezione Ceramica',
    description: 'Coating ceramico professionale per protezione a lungo termine',
    price: '€499',
    duration: '2 giorni',
    benefits: ['Protezione 3-5 anni', 'Idrorepellente', 'Resistente a graffi'],
    badge: 'Premium',
    imageSrc: 'https://images.pexels.com/photos/3354647/pexels-photo-3354647.jpeg',
    href: '/servizi/protezione-ceramica',
  },
];

const featuredProducts = [
  {
    title: 'Kit Manutenzione Pro',
    description: 'Set completo per la cura quotidiana della tua auto',
    price: '€89,90',
    originalPrice: '€129,90',
    badge: 'Offerta',
    imageSrc: 'https://images.pexels.com/photos/6870326/pexels-photo-6870326.jpeg',
    href: '/shop/kit-manutenzione-pro',
  },
  {
    title: 'Shampoo pH Neutro 1L',
    description: 'Formula professionale delicata su vernice e protezioni',
    price: '€24,90',
    imageSrc: 'https://images.pexels.com/photos/5835359/pexels-photo-5835359.jpeg',
    href: '/shop/shampoo-ph-neutro',
  },
];

const reviews = [
  {
    author: 'Marco R.',
    rating: 5,
    date: '2 settimane fa',
    text: 'Servizio impeccabile! La mia auto è tornata come nuova. Professionalità e attenzione ai dettagli al top.',
    service: 'Detailing Completo',
  },
  {
    author: 'Laura S.',
    rating: 5,
    date: '1 mese fa',
    text: 'Ho fatto la protezione ceramica e sono rimasta senza parole. L\'acqua scivola via e la brillantezza è incredibile.',
    service: 'Protezione Ceramica',
  },
  {
    author: 'Giuseppe M.',
    rating: 5,
    date: '3 settimane fa',
    text: 'Personale competente e disponibile. Il centro è attrezzato con macchinari professionali. Consigliatissimo!',
    service: 'Lucidatura Auto',
  },
];

export default function Home() {
  return (
    <>
      <Hero
        badge="Centro Detailing Certificato"
        subtitle="Cura Professionale Auto"
        title="Riporta la Tua Auto allo Splendore Originale"
        description="Specialisti in detailing auto, lucidatura professionale e protezione ceramica. Oltre 10 anni di esperienza e centinaia di clienti soddisfatti."
        primaryCta={{ label: 'Prenota Subito', href: '/contatti' }}
        secondaryCta={{ label: 'Scopri i Servizi', href: '/servizi' }}
        imageSrc="https://images.pexels.com/photos/3354648/pexels-photo-3354648.jpeg"
      />

      <section className="py-16 bg-white">
        <div className="max-w-container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-heading font-bold mb-2">Garanzia Qualità</h3>
              <p className="text-slate text-sm">Prodotti professionali certificati</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-heading font-bold mb-2">Servizio Rapido</h3>
              <p className="text-slate text-sm">Consegna puntuale garantita</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-heading font-bold mb-2">Team Certificato</h3>
              <p className="text-slate text-sm">Detailer professionisti esperti</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-base">
        <div className="max-w-container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold mb-4" style={{ fontSize: 'clamp(22px,3vw,34px)', lineHeight: 1.2 }}>
              Servizi in Evidenza
            </h2>
            <p className="text-slate max-w-2xl mx-auto">
              Scegli il trattamento perfetto per la tua auto tra i nostri servizi più richiesti
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {featuredServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
          <div className="text-center">
            <Button className="bg-graphite text-onDark hover:bg-graphite/90" asChild>
              <a href="/servizi">
                Vedi Tutti i Servizi
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold mb-4" style={{ fontSize: 'clamp(22px,3vw,34px)', lineHeight: 1.2 }}>
              I Nostri Risultati
            </h2>
            <p className="text-slate max-w-2xl mx-auto">
              La qualità del nostro lavoro parla da sola
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <BeforeAfterSlider
              beforeImage="https://images.pexels.com/photos/13861/IMG_3496bfree.jpg"
              afterImage="https://images.pexels.com/photos/3354648/pexels-photo-3354648.jpeg"
              title="Lucidatura Carrozzeria"
            />
            <BeforeAfterSlider
              beforeImage="https://images.pexels.com/photos/5835621/pexels-photo-5835621.jpeg"
              afterImage="https://images.pexels.com/photos/5835253/pexels-photo-5835253.jpeg"
              title="Sanificazione Interni"
            />
          </div>
        </div>
      </section>

      <Reviews reviews={reviews} />

      <section className="py-16 bg-white">
        <div className="max-w-container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold mb-4" style={{ fontSize: 'clamp(22px,3vw,34px)', lineHeight: 1.2 }}>
              Shop Consigliati
            </h2>
            <p className="text-slate max-w-2xl mx-auto">
              Prodotti professionali per mantenere la tua auto impeccabile
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {featuredProducts.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
          <div className="text-center">
            <Button className="bg-graphite text-onDark hover:bg-graphite/90" asChild>
              <a href="/shop">
                Visita lo Shop
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-ink to-graphite text-onDark">
        <div className="max-w-container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-heading font-bold mb-4" style={{ fontSize: 'clamp(22px,3vw,34px)', lineHeight: 1.2 }}>
            Pronto a Dare Nuova Vita alla Tua Auto?
          </h2>
          <p className="text-slate text-lg mb-8 max-w-2xl mx-auto">
            Prenota ora il tuo trattamento e scopri la differenza della cura professionale
          </p>
          <Button className="bg-primary text-ink hover:bg-primary/90 rounded-button font-medium px-8 h-12" asChild>
            <a href="/contatti">
              Prenota la Tua Visita
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </section>
    </>
  );
}
