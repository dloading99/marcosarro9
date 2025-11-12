import Link from 'next/link';
import Image from 'next/image';
import { ShoppingCart } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Reveal } from '@/components/motion/Reveal';

interface ProductCardProps {
  title: string;
  description: string;
  price: string;
  originalPrice?: string;
  badge?: string;
  imageSrc: string;
  href: string;
  inStock?: boolean;
}

export function ProductCard({ title, description, price, originalPrice, badge, imageSrc, href, inStock = true }: ProductCardProps) {
  return (
    <Reveal>
      <div className="bg-white rounded-card shadow-card overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.04] h-full flex flex-col">
        <Link href={href} className="block">
          <div className="aspect-video relative overflow-hidden">
            <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 hover:scale-110"
          />
          {badge && (
            <div className="absolute top-4 right-4">
              <Badge className="bg-primary text-ink border-0 font-medium">{badge}</Badge>
            </div>
          )}
          {!inStock && (
            <div className="absolute inset-0 bg-ink/50 flex items-center justify-center">
              <span className="bg-graphite text-onDark px-4 py-2 rounded-full text-sm font-medium">
                Esaurito
              </span>
            </div>
          )}
        </div>
      </Link>

      <div className="p-6 flex-1 flex flex-col">
        <Link href={href}>
          <h3 className="font-heading font-bold text-lg mb-2 hover:text-primary transition-colors">
            {title}
          </h3>
        </Link>
        <p className="text-slate text-sm mb-4 line-clamp-2 flex-1">{description}</p>

        <div className="flex items-center justify-between gap-4">
          <div className="flex items-baseline gap-2">
            <span className="text-ink font-bold text-xl">{price}</span>
            {originalPrice && (
              <span className="text-slate text-sm line-through">{originalPrice}</span>
            )}
          </div>

          <Button
            size="icon"
            className="bg-primary text-ink hover:bg-primary/90 rounded-full h-10 w-10 shrink-0"
            disabled={!inStock}
          >
            <ShoppingCart className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
    </Reveal>
  );
}
