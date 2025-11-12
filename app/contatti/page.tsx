'use client';

import { useState } from 'react';
import { Page } from '@/components/motion/Page';
import { BreadcrumbNav } from '@/components/ui/breadcrumb-nav';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

export default function ContattiPage() {
  const [step, setStep] = useState(1);

  return (
    <Page>
      <BreadcrumbNav items={[{ label: 'Visita & Contatti' }]} />

      <section className="py-16 bg-base">
        <div className="max-w-container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h1 className="font-heading font-bold mb-6" style={{ fontSize: 'clamp(28px,4vw,44px)', lineHeight: 1.15 }}>
                Visita & Contatti
              </h1>
              <p className="text-slate text-lg mb-8">
                Prenota il tuo appuntamento compilando il form o contattaci direttamente
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold mb-1">Indirizzo</h3>
                    <p className="text-slate">Via Roma 123, 20100 Milano (MI)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold mb-1">Telefono</h3>
                    <p className="text-slate">+39 333 123 4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold mb-1">Email</h3>
                    <p className="text-slate">info@marcosarro.it</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold mb-1">Orari</h3>
                    <p className="text-slate">Lun-Sab: 9:00 - 19:00</p>
                    <p className="text-slate text-sm">Domenica chiuso</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center shrink-0">
                    <MessageCircle className="h-6 w-6 text-success" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold mb-1">WhatsApp</h3>
                    <Button
                      className="bg-success text-white hover:bg-success/90 mt-2"
                      onClick={() => window.open('https://wa.me/393331234567', '_blank')}
                    >
                      Contattaci su WhatsApp
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-card shadow-card p-8">
              <h2 className="font-heading font-bold text-2xl mb-6">Prenota un Appuntamento</h2>

              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  {[1, 2, 3, 4].map((num) => (
                    <div key={num} className="flex-1">
                      <div className={`h-2 rounded-full ${step >= num ? 'bg-primary' : 'bg-smoke'}`} />
                    </div>
                  ))}
                </div>
                <p className="text-sm text-slate">
                  Step {step} di 4: {
                    step === 1 ? 'Dati Personali' :
                    step === 2 ? 'Info Veicolo' :
                    step === 3 ? 'Servizio' :
                    'Data e Ora'
                  }
                </p>
              </div>

              {step === 1 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Nome e Cognome</label>
                    <Input placeholder="Mario Rossi" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input type="email" placeholder="mario@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Telefono</label>
                    <Input type="tel" placeholder="+39 333 123 4567" />
                  </div>
                  <Button
                    className="w-full bg-primary text-ink hover:bg-primary/90"
                    onClick={() => setStep(2)}
                  >
                    Continua
                  </Button>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Marca</label>
                    <Input placeholder="es. Audi" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Modello</label>
                    <Input placeholder="es. A4" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Anno</label>
                    <Input type="number" placeholder="2020" />
                  </div>
                  <div className="flex gap-4">
                    <Button
                      variant="outline"
                      className="flex-1"
                      onClick={() => setStep(1)}
                    >
                      Indietro
                    </Button>
                    <Button
                      className="flex-1 bg-primary text-ink hover:bg-primary/90"
                      onClick={() => setStep(3)}
                    >
                      Continua
                    </Button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Servizio Richiesto</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Seleziona un servizio" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="detailing">Detailing Completo</SelectItem>
                        <SelectItem value="lucidatura">Lucidatura Auto</SelectItem>
                        <SelectItem value="ceramica">Protezione Ceramica</SelectItem>
                        <SelectItem value="sanificazione">Sanificazione Interni</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Note Aggiuntive (opzionale)</label>
                    <Textarea placeholder="Descrivi eventuali problematiche o richieste specifiche..." rows={4} />
                  </div>
                  <div className="flex gap-4">
                    <Button
                      variant="outline"
                      className="flex-1"
                      onClick={() => setStep(2)}
                    >
                      Indietro
                    </Button>
                    <Button
                      className="flex-1 bg-primary text-ink hover:bg-primary/90"
                      onClick={() => setStep(4)}
                    >
                      Continua
                    </Button>
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Data Preferita</label>
                    <Input type="date" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Orario Preferito</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Seleziona orario" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="9">9:00 - 10:00</SelectItem>
                        <SelectItem value="10">10:00 - 11:00</SelectItem>
                        <SelectItem value="11">11:00 - 12:00</SelectItem>
                        <SelectItem value="14">14:00 - 15:00</SelectItem>
                        <SelectItem value="15">15:00 - 16:00</SelectItem>
                        <SelectItem value="16">16:00 - 17:00</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex gap-4">
                    <Button
                      variant="outline"
                      className="flex-1"
                      onClick={() => setStep(3)}
                    >
                      Indietro
                    </Button>
                    <Button
                      className="flex-1 bg-primary text-ink hover:bg-primary/90"
                      onClick={() => alert('Prenotazione inviata! Ti contatteremo presto.')}
                    >
                      Conferma Prenotazione
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-0 bg-base">
        <div className="max-w-container mx-auto px-4 lg:px-8 pb-16">
          <div className="aspect-[16/9] lg:aspect-[21/9] rounded-card overflow-hidden shadow-card">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2970.177284124942!2d9.18854!3d45.46427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDI3JzUxLjQiTiA5wrAxMScxOC44IkU!5e0!3m2!1sit!2sit!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </Page>
  );
}
