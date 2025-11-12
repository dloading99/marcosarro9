import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbNavProps {
  items: BreadcrumbItem[];
}

export function BreadcrumbNav({ items }: BreadcrumbNavProps) {
  return (
    <nav className="py-4 px-4 lg:px-8 bg-base border-b border-smoke">
      <div className="max-w-container mx-auto">
        <ol className="flex items-center gap-2 text-sm">
          <li>
            <Link href="/" className="text-slate hover:text-ink transition-colors">
              Home
            </Link>
          </li>
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              <ChevronRight className="h-4 w-4 text-slate" />
              {item.href ? (
                <Link href={item.href} className="text-slate hover:text-ink transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className="text-ink font-medium">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
