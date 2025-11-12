import { Hero } from '@/components/shared/Hero';
import { ServiceCard } from '@/components/shared/ServiceCard';
import { BreadcrumbNav } from '@/components/ui/breadcrumb-nav';

const services = [
  {
    title: 'Detailing Completo',
    description: 'Trattamento completo esterno e interno per una pulizia profonda e duratura della tua auto',
    price: '€299',
    duration: '6-8 ore',
    benefits: ['Lavaggio e decontaminazione completa', 'Lucidatura carrozzeria professionale', 'Sanificazione interni profonda'],
    badge: 'Più Richiesto',
    imageSrc: 'https://images.pexels.com/photos/3422964/pexels-photo-3422964.jpeg',
    href: '/servizi/detailing-completo',
  },
  {
    title: 'Lucidatura Auto',
    description: 'Rimozione graffi e restauro della brillantezza originale della vernice',
    price: '€199',
    duration: '4-5 ore',
    benefits: ['Correzione vernice multi-step', 'Rimozione graffi superficiali', 'Finitura lucida specchiante'],
    imageSrc: 'https://images.pexels.com/photos/3646172/pexels-photo-3646172.jpeg',
    href: '/servizi/lucidatura-auto',
  },
  {
    title: 'Protezione Ceramica',
    description: 'Coating ceramico professionale per protezione a lungo termine della carrozzeria',
    price: '€499',
    duration: '2 giorni',
    benefits: ['Protezione duratura 3-5 anni', 'Effetto idrorepellente', 'Resistenza a graffi e agenti chimici'],
    badge: 'Premium',
    imageSrc: 'https://images.pexels.com/photos/3354647/pexels-photo-3354647.jpeg',
    href: '/servizi/protezione-ceramica',
  },
  {
    title: 'Sanificazione Interni',
    description: 'Pulizia profonda e igienizzazione completa degli interni con ozono',
    price: '€149',
    duration: '3-4 ore',
    benefits: ['Eliminazione batteri e odori', 'Pulizia profonda tessuti', 'Trattamento ozono certificato'],
    imageSrc: 'https://images.pexels.com/photos/5835253/pexels-photo-5835253.jpeg',
    href: '/servizi/sanificazione-interni',
  },
  {
    title: 'Trattamento Fari',
    description: 'Restauro e lucidatura fari opacizzati per massima visibilità',
    price: '€79',
    duration: '1-2 ore',
    benefits: ['Rimozione opacità', 'Lucidatura professionale', 'Protezione UV'],
    imageSrc: 'https://images.pexels.com/photos/3807277/pexels-photo-3807277.jpeg',
    href: '/servizi/trattamento-fari',
  },
  {
    title: 'Rimozione Graffi',
    description: 'Intervento mirato per eliminare graffi superficiali e segni di usura',
    price: '€99',
    duration: '2-3 ore',
    benefits: ['Valutazione danno gratuita', 'Tecnica di correzione professionale', 'Finitura protettiva'],
    imageSrc: 'https://images.pexels.com/photos/4489765/pexels-photo-4489765.jpeg',
    href: '/servizi/rimozione-graffi',
  },
];

export default function ServiziPage() {
  return (
    <>
      <BreadcrumbNav items={[{ label: 'Servizi' }]} />

      <Hero
        subtitle="I Nostri Servizi"
        title="Scegli il Trattamento Perfetto per la Tua Auto"
        description="Offriamo una gamma completa di servizi professionali per la cura e protezione della tua auto. Ogni trattamento è personalizzabile in base alle tue esigenze."
        primaryCta={{ label: 'Contattaci per Info', href: '/contatti' }}
        imageSrc="https://images.pexels.com/photos/3354648/pexels-photo-3354648.jpeg"
      />

      <section className="py-16 bg-base">
        <div className="max-w-container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-heading font-bold mb-4" style={{ fontSize: 'clamp(22px,3vw,34px)', lineHeight: 1.2 }}>
            Non Trovi il Servizio che Cerchi?
          </h2>
          <p className="text-slate text-lg mb-8 max-w-2xl mx-auto">
            Contattaci per consulenze personalizzate e preventivi su misura
          </p>
        </div>
      </section>
    </>
  );
}
