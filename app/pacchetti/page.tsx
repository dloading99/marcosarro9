import { Hero } from '@/components/shared/Hero';
import { BreadcrumbNav } from '@/components/ui/breadcrumb-nav';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const packages = [
  {
    name: 'Basic',
    price: '€199',
    description: 'Perfetto per chi vuole una pulizia completa e professionale',
    features: [
      'Lavaggio esterno completo',
      'Pulizia interni base',
      'Pulizia vetri',
      'Aspirazione profonda',
      'Trattamento gomme',
    ],
    highlighted: false,
  },
  {
    name: 'Plus',
    price: '€349',
    description: 'Il pacchetto più richiesto con lucidatura inclusa',
    features: [
      'Tutto del pacchetto Basic',
      'Lucidatura carrozzeria mono-step',
      'Sanificazione interni con ozono',
      'Trattamento plastiche esterne',
      'Protezione cera sintetica 3 mesi',
      'Pulizia interni profonda',
    ],
    highlighted: true,
    badge: 'Più Richiesto',
  },
  {
    name: 'Pro',
    price: '€599',
    description: 'Trattamento premium per risultati eccezionali',
    features: [
      'Tutto del pacchetto Plus',
      'Lucidatura carrozzeria multi-step',
      'Protezione ceramica entry-level 1 anno',
      'Trattamento fari professionale',
      'Pulizia motore',
      'Condizionamento pelle',
      'Garanzia risultato 100%',
    ],
    highlighted: false,
    badge: 'Premium',
  },
];

export default function PacchettiPage() {
  return (
    <>
      <BreadcrumbNav items={[{ label: 'Pacchetti & Offerte' }]} />

      <Hero
        subtitle="I Nostri Pacchetti"
        title="Scegli il Pacchetto Perfetto per le Tue Esigenze"
        description="Abbiamo creato pacchetti completi che combinano i nostri servizi più richiesti a prezzi vantaggiosi. Risparmia fino al 30% rispetto ai servizi singoli."
        primaryCta={{ label: 'Prenota Ora', href: '/contatti' }}
        imageSrc="https://images.pexels.com/photos/3354648/pexels-photo-3354648.jpeg"
      />

      <section className="py-16 bg-base">
        <div className="max-w-container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`bg-white rounded-card shadow-card overflow-hidden ${
                  pkg.highlighted ? 'ring-2 ring-primary scale-105 lg:scale-110' : ''
                }`}
              >
                {pkg.badge && (
                  <div className="bg-primary text-ink text-center py-2 px-4 font-medium text-sm">
                    {pkg.badge}
                  </div>
                )}
                <div className="p-8">
                  <h3 className="font-heading font-bold text-2xl mb-2">{pkg.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">{pkg.price}</span>
                  </div>
                  <p className="text-slate text-sm mb-6">{pkg.description}</p>

                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-success shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full ${
                      pkg.highlighted
                        ? 'bg-primary text-ink hover:bg-primary/90'
                        : 'bg-graphite text-onDark hover:bg-graphite/90'
                    }`}
                    asChild
                  >
                    <a href="/contatti">Prenota Questo Pacchetto</a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-heading font-bold mb-6" style={{ fontSize: 'clamp(22px,3vw,34px)', lineHeight: 1.2 }}>
            Offerte Speciali
          </h2>
          <div className="bg-gradient-to-br from-primary/10 to-warning/10 rounded-card p-8 max-w-3xl mx-auto">
            <p className="text-lg mb-6">
              <strong>Sconto 15% sul primo servizio</strong> per nuovi clienti che prenotano entro fine mese
            </p>
            <Button className="bg-primary text-ink hover:bg-primary/90" asChild>
              <a href="/contatti">Approfitta dell&apos;Offerta</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
