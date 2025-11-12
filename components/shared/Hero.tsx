import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle?: string;
  description: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
  imageSrc?: string;
  badge?: string;
}

export function Hero({ title, subtitle, description, primaryCta, secondaryCta, imageSrc, badge }: HeroProps) {
  return (
    <section className="bg-gradient-to-br from-ink to-graphite text-onDark">
      <div className="max-w-container mx-auto px-4 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-3 gap-12 items-center">
          <div className="lg:col-span-2">
            {badge && (
              <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                {badge}
              </span>
            )}
            {subtitle && (
              <p className="text-primary font-medium mb-4" style={{ fontSize: '18px' }}>
                {subtitle}
              </p>
            )}
            <h1 className="font-heading font-bold mb-6" style={{ fontSize: 'clamp(28px,4vw,44px)', lineHeight: 1.15 }}>
              {title}
            </h1>
            <p className="text-slate text-lg mb-8 leading-relaxed max-w-2xl" style={{ lineHeight: 1.6 }}>
              {description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                className="bg-primary text-ink hover:bg-primary/90 rounded-button font-medium px-8 h-12"
                asChild
              >
                <a href={primaryCta.href}>
                  {primaryCta.label}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              {secondaryCta && (
                <Button
                  variant="outline"
                  className="border-graphite text-onDark hover:bg-graphite rounded-button h-12 px-8"
                  asChild
                >
                  <a href={secondaryCta.href}>
                    {secondaryCta.label}
                  </a>
                </Button>
              )}
            </div>
          </div>

          {imageSrc && (
            <div className="lg:col-span-1">
              <div className="aspect-[4/3] rounded-card overflow-hidden shadow-card relative">
                <Image
                  src={imageSrc}
                  alt={title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
