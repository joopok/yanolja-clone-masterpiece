
import { useState } from 'react';
import { Search, MapPin, Calendar, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const SearchForm = () => {
  const [location, setLocation] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('2');

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
        {/* Location */}
        <div className="space-y-2">
          <Label className="text-sm font-medium text-gray-700">여행지</Label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              placeholder="어디로 여행가세요?"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="pl-10 h-12 border-gray-300 focus:border-yanolja-primary focus:ring-yanolja-primary"
            />
          </div>
        </div>

        {/* Check-in */}
        <div className="space-y-2">
          <Label className="text-sm font-medium text-gray-700">체크인</Label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="pl-10 h-12 border-gray-300 focus:border-yanolja-primary focus:ring-yanolja-primary"
            />
          </div>
        </div>

        {/* Check-out */}
        <div className="space-y-2">
          <Label className="text-sm font-medium text-gray-700">체크아웃</Label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="pl-10 h-12 border-gray-300 focus:border-yanolja-primary focus:ring-yanolja-primary"
            />
          </div>
        </div>

        {/* Guests */}
        <div className="space-y-2">
          <Label className="text-sm font-medium text-gray-700">인원</Label>
          <div className="relative">
            <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <select
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="pl-10 h-12 w-full border border-gray-300 rounded-md focus:border-yanolja-primary focus:ring-yanolja-primary appearance-none bg-white"
            >
              <option value="1">성인 1명</option>
              <option value="2">성인 2명</option>
              <option value="3">성인 3명</option>
              <option value="4">성인 4명</option>
            </select>
          </div>
        </div>
      </div>

      {/* Search Button */}
      <div className="mt-6 flex justify-center">
        <Button 
          className="bg-yanolja-primary hover:bg-yanolja-dark text-white px-8 py-3 h-12 text-base font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
        >
          <Search className="w-5 h-5 mr-2" />
          검색하기
        </Button>
      </div>
    </div>
  );
};

export default SearchForm;
