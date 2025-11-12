import Image from 'next/image';
import { Page } from '@/components/motion/Page';
import { Hero } from '@/components/shared/Hero';
import { BreadcrumbNav } from '@/components/ui/breadcrumb-nav';
import { Shield, Award, Users, Clock } from 'lucide-react';

export default function IlCentroPage() {
  return (
    <Page>
      <BreadcrumbNav items={[{ label: 'Il Centro' }]} />

      <Hero
        subtitle="Chi Siamo"
        title="Passione e Professionalità al Servizio della Tua Auto"
        description="Dal 2014 ci occupiamo di detailing auto con passione e dedizione. Il nostro centro è equipaggiato con le più moderne attrezzature e utilizziamo solo prodotti professionali certificati."
        primaryCta={{ label: 'Prenota una Visita', href: '/contatti' }}
        imageSrc="https://images.pexels.com/photos/3354648/pexels-photo-3354648.jpeg"
      />

      <section className="py-16 bg-white">
        <div className="max-w-container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="font-heading font-bold mb-6" style={{ fontSize: 'clamp(22px,3vw,34px)', lineHeight: 1.2 }}>
                La Nostra Storia
              </h2>
              <p className="text-slate mb-4 leading-relaxed">
                Marco Sarro Detailing nasce dalla passione per le auto e dalla volontà di offrire un servizio di eccellenza nel campo della cura e protezione dei veicoli.
              </p>
              <p className="text-slate mb-4 leading-relaxed">
                Con oltre 10 anni di esperienza, il nostro team di professionisti certificati utilizza tecniche all&apos;avanguardia e prodotti di qualità premium per garantire risultati impeccabili.
              </p>
              <p className="text-slate leading-relaxed">
                Ogni auto che entra nel nostro centro riceve un trattamento personalizzato, studiato per valorizzare al massimo le caratteristiche del veicolo e soddisfare le esigenze specifiche del cliente.
              </p>
            </div>
            <div className="aspect-[4/3] rounded-card overflow-hidden shadow-card relative">
              <Image
                src="https://images.pexels.com/photos/5835360/pexels-photo-5835360.jpeg"
                alt="Il nostro centro"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-heading font-bold mb-2">Certificazioni</h3>
              <p className="text-slate text-sm">Detailer certificati IDA</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-heading font-bold mb-2">Esperienza</h3>
              <p className="text-slate text-sm">10+ anni nel settore</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-heading font-bold mb-2">Clienti</h3>
              <p className="text-slate text-sm">500+ soddisfatti</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-heading font-bold mb-2">Servizio</h3>
              <p className="text-slate text-sm">6 giorni su 7</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-base">
        <div className="max-w-container mx-auto px-4 lg:px-8">
          <h2 className="font-heading font-bold mb-12 text-center" style={{ fontSize: 'clamp(22px,3vw,34px)', lineHeight: 1.2 }}>
            Perché Scegliere Marco Sarro Detailing
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-card shadow-card p-6">
              <h3 className="font-heading font-bold text-xl mb-3">Prodotti Premium</h3>
              <p className="text-slate">Utilizziamo solo prodotti professionali certificati dalle migliori marche internazionali</p>
            </div>
            <div className="bg-white rounded-card shadow-card p-6">
              <h3 className="font-heading font-bold text-xl mb-3">Team Esperto</h3>
              <p className="text-slate">Detailer professionisti con certificazioni IDA e anni di esperienza nel settore</p>
            </div>
            <div className="bg-white rounded-card shadow-card p-6">
              <h3 className="font-heading font-bold text-xl mb-3">Attrezzature Moderne</h3>
              <p className="text-slate">Centro equipaggiato con macchinari professionali e box climatizzato</p>
            </div>
          </div>
        </div>
      </section>
    </Page>
  );
}
