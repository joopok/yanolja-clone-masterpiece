
import { Star, Heart, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HotelCardProps {
  id: string;
  name: string;
  location: string;
  rating: number;
  reviewCount: number;
  price: number;
  originalPrice?: number;
  imageUrl: string;
  tags?: string[];
}

const HotelCard = ({ 
  name, 
  location, 
  rating, 
  reviewCount, 
  price, 
  originalPrice, 
  imageUrl, 
  tags = [] 
}: HotelCardProps) => {
  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer">
      {/* Image */}
      <div className="relative h-48 sm:h-52 overflow-hidden">
        <img 
          src={`https://images.unsplash.com/${imageUrl}?w=400&h=300&fit=crop`}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <Button 
          variant="ghost" 
          size="sm" 
          className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-white/80 hover:bg-white text-gray-700 rounded-full p-2 w-8 h-8 sm:w-auto sm:h-auto"
        >
          <Heart className="w-3 h-3 sm:w-4 sm:h-4" />
        </Button>
        {discount > 0 && (
          <div className="absolute top-2 sm:top-3 left-2 sm:left-3 bg-yanolja-primary text-white px-2 py-1 rounded-md text-xs sm:text-sm font-medium">
            {discount}% 할인
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-3 sm:p-4">
        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-2">
            {tags.slice(0, 2).map((tag, index) => (
              <span 
                key={index} 
                className="text-xs bg-yanolja-light text-yanolja-primary px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
            {tags.length > 2 && (
              <span className="text-xs text-gray-500">+{tags.length - 2}</span>
            )}
          </div>
        )}

        {/* Hotel Name */}
        <h3 className="font-semibold text-base sm:text-lg text-gray-900 mb-1 line-clamp-2 leading-tight">
          {name}
        </h3>

        {/* Location */}
        <div className="flex items-center text-gray-600 mb-2">
          <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-1 flex-shrink-0" />
          <span className="text-xs sm:text-sm truncate">{location}</span>
        </div>

        {/* Rating */}
        <div className="flex items-center mb-3">
          <div className="flex items-center">
            <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" />
            <span className="text-xs sm:text-sm font-medium ml-1">{rating}</span>
          </div>
          <span className="text-xs text-gray-500 ml-2 truncate">
            ({reviewCount.toLocaleString()}개 후기)
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div className="flex-1 min-w-0">
            {originalPrice && (
              <div className="text-xs sm:text-sm text-gray-500 line-through">
                {originalPrice.toLocaleString()}원
              </div>
            )}
            <div className="flex items-baseline">
              <span className="text-lg sm:text-xl font-bold text-yanolja-primary">
                {price.toLocaleString()}원
              </span>
              <span className="text-xs sm:text-sm text-gray-600 ml-1">/박</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
