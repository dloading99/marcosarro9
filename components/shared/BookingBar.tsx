'use client';

import { Button } from '@/components/ui/button';
import { Calendar, Clock } from 'lucide-react';

interface BookingBarProps {
  price: string;
  duration: string;
  buttonText?: string;
  onBook?: () => void;
}

export function BookingBar({ price, duration, buttonText = 'Prenota Ora', onBook }: BookingBarProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden">
      <div className="bg-white border-t border-smoke shadow-lg p-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-1 text-slate">
                <Clock className="h-4 w-4" />
                <span>{duration}</span>
              </div>
              <span className="text-primary font-bold text-xl">{price}</span>
            </div>
          </div>
          <Button
            className="bg-primary text-ink hover:bg-primary/90 rounded-button font-medium"
            onClick={onBook}
          >
            <Calendar className="h-4 w-4 mr-2" />
            {buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
}
