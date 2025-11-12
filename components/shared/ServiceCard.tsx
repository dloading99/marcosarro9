import Link from 'next/link';
import Image from 'next/image';
import { Check } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  duration: string;
  benefits: string[];
  badge?: string;
  imageSrc: string;
  href: string;
}

export function ServiceCard({ title, description, price, duration, benefits, badge, imageSrc, href }: ServiceCardProps) {
  return (
    <Link href={href} className="block group">
      <div className="bg-white rounded-card shadow-card overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.04] h-full">
        <div className="aspect-video relative overflow-hidden">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
          {badge && (
            <div className="absolute top-4 right-4">
              <Badge className="bg-primary text-ink border-0 font-medium">{badge}</Badge>
            </div>
          )}
        </div>

        <div className="p-6">
          <h3 className="font-heading font-bold text-xl mb-2">{title}</h3>
          <p className="text-slate text-sm mb-4 line-clamp-2">{description}</p>

          <div className="flex items-center gap-4 mb-4 text-sm">
            <span className="text-primary font-bold text-lg">{price}</span>
            <span className="text-slate">• {duration}</span>
          </div>

          <ul className="space-y-2">
            {benefits.slice(0, 3).map((benefit, index) => (
              <li key={index} className="flex items-start gap-2 text-sm">
                <Check className="h-4 w-4 text-success shrink-0 mt-0.5" />
                <span className="text-slate">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Link>
  );
}
