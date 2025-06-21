
import { Search, Menu, User, Heart, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-yanolja-primary">
              야놀자
            </div>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-yanolja-primary transition-colors">
              국내숙소
            </a>
            <a href="#" className="text-gray-700 hover:text-yanolja-primary transition-colors">
              해외숙소
            </a>
            <a href="#" className="text-gray-700 hover:text-yanolja-primary transition-colors">
              레저·티켓
            </a>
            <a href="#" className="text-gray-700 hover:text-yanolja-primary transition-colors">
              렌터카
            </a>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hidden md:flex">
              <Heart className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" className="hidden md:flex">
              <Bell className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <User className="w-4 h-4" />
              <span className="hidden sm:ml-2 sm:inline">로그인</span>
            </Button>
            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
