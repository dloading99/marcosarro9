import { Hero } from '@/components/shared/Hero';
import { ProductCard } from '@/components/shared/ProductCard';
import { BreadcrumbNav } from '@/components/ui/breadcrumb-nav';

const products = [
  {
    title: 'Kit Manutenzione Pro',
    description: 'Set completo per la cura quotidiana della tua auto con prodotti professionali',
    price: '€89,90',
    originalPrice: '€129,90',
    badge: 'Offerta',
    imageSrc: 'https://images.pexels.com/photos/6870326/pexels-photo-6870326.jpeg',
    href: '/shop/kit-manutenzione-pro',
  },
  {
    title: 'Shampoo pH Neutro 1L',
    description: 'Formula professionale delicata su vernice e protezioni ceramiche',
    price: '€24,90',
    imageSrc: 'https://images.pexels.com/photos/5835359/pexels-photo-5835359.jpeg',
    href: '/shop/shampoo-ph-neutro',
  },
  {
    title: 'Cera Protettiva Premium',
    description: 'Cera sintetica ad alta protezione con durata fino a 6 mesi',
    price: '€39,90',
    badge: 'Bestseller',
    imageSrc: 'https://images.pexels.com/photos/6870318/pexels-photo-6870318.jpeg',
    href: '/shop/cera-protettiva',
  },
  {
    title: 'Detailer Spray 500ml',
    description: 'Quick detailer per ritocchi veloci e brillantezza istantanea',
    price: '€19,90',
    imageSrc: 'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg',
    href: '/shop/detailer-spray',
  },
  {
    title: 'Set Panni Microfibra',
    description: 'Set 6 panni professionali ultra-assorbenti per ogni superficie',
    price: '€29,90',
    imageSrc: 'https://images.pexels.com/photos/5835256/pexels-photo-5835256.jpeg',
    href: '/shop/panni-microfibra',
  },
  {
    title: 'Pulitore Interni',
    description: 'Detergente universale per plastiche, pelle e tessuti',
    price: '€16,90',
    imageSrc: 'https://images.pexels.com/photos/4489737/pexels-photo-4489737.jpeg',
    href: '/shop/pulitore-interni',
  },
];

export default function ShopPage() {
  return (
    <>
      <BreadcrumbNav items={[{ label: 'Shop' }]} />

      <Hero
        subtitle="Il Nostro Shop"
        title="Prodotti Professionali per la Cura della Tua Auto"
        description="Scopri la nostra selezione di prodotti professionali certificati. Gli stessi che utilizziamo ogni giorno nel nostro centro detailing."
        primaryCta={{ label: 'Contattaci', href: '/contatti' }}
        imageSrc="https://images.pexels.com/photos/5835623/pexels-photo-5835623.jpeg"
      />

      <section className="py-16 bg-base">
        <div className="max-w-container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
