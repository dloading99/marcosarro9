import { Star } from 'lucide-react';

interface Review {
  author: string;
  rating: number;
  date: string;
  text: string;
  service?: string;
}

interface ReviewsProps {
  reviews: Review[];
  averageRating?: number;
  totalReviews?: number;
}

export function Reviews({ reviews, averageRating = 4.9, totalReviews = 150 }: ReviewsProps) {
  return (
    <section className="py-16 bg-base">
      <div className="max-w-container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold mb-4" style={{ fontSize: 'clamp(22px,3vw,34px)', lineHeight: 1.2 }}>
            Cosa Dicono i Nostri Clienti
          </h2>
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`h-6 w-6 ${
                    star <= Math.floor(averageRating)
                      ? 'fill-primary text-primary'
                      : 'text-smoke'
                  }`}
                />
              ))}
            </div>
            <span className="font-bold text-xl">{averageRating}</span>
          </div>
          <p className="text-slate text-sm">Basato su {totalReviews}+ recensioni verificate</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white rounded-card shadow-card p-6">
              <div className="flex items-center gap-1 mb-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`h-4 w-4 ${
                      star <= review.rating ? 'fill-primary text-primary' : 'text-smoke'
                    }`}
                  />
                ))}
              </div>
              <p className="text-slate mb-4 text-sm leading-relaxed">{review.text}</p>
              <div className="border-t border-smoke pt-4">
                <p className="font-medium text-sm">{review.author}</p>
                <div className="flex items-center gap-2 text-xs text-slate mt-1">
                  <span>{review.date}</span>
                  {review.service && (
                    <>
                      <span>•</span>
                      <span>{review.service}</span>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
