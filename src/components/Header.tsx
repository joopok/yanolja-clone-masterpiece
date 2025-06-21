
import { Search, Menu, User, Heart, Bell, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-xl sm:text-2xl font-bold text-yanolja-primary">
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
          <div className="flex items-center space-x-2 sm:space-x-4">
            <Button variant="ghost" size="sm" className="hidden sm:flex">
              <Heart className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" className="hidden sm:flex">
              <Bell className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" className="hidden sm:flex">
              <User className="w-4 h-4" />
              <span className="ml-2">로그인</span>
            </Button>
            
            {/* Mobile login button */}
            <Button variant="ghost" size="sm" className="sm:hidden">
              <User className="w-4 h-4" />
            </Button>

            {/* Mobile menu */}
            <Drawer open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <DrawerTrigger asChild>
                <Button variant="ghost" size="sm" className="md:hidden">
                  <Menu className="w-5 h-5" />
                </Button>
              </DrawerTrigger>
              <DrawerContent className="h-[80vh]">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-8">
                    <div className="text-2xl font-bold text-yanolja-primary">
                      야놀자
                    </div>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <X className="w-5 h-5" />
                    </Button>
                  </div>
                  
                  <nav className="space-y-6">
                    <a 
                      href="#" 
                      className="block text-lg text-gray-700 hover:text-yanolja-primary transition-colors py-3 border-b border-gray-100"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      국내숙소
                    </a>
                    <a 
                      href="#" 
                      className="block text-lg text-gray-700 hover:text-yanolja-primary transition-colors py-3 border-b border-gray-100"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      해외숙소
                    </a>
                    <a 
                      href="#" 
                      className="block text-lg text-gray-700 hover:text-yanolja-primary transition-colors py-3 border-b border-gray-100"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      레저·티켓
                    </a>
                    <a 
                      href="#" 
                      className="block text-lg text-gray-700 hover:text-yanolja-primary transition-colors py-3 border-b border-gray-100"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      렌터카
                    </a>
                    
                    <div className="pt-6 space-y-4">
                      <Button className="w-full bg-yanolja-primary hover:bg-yanolja-dark text-white">
                        로그인
                      </Button>
                      <div className="flex justify-center space-x-6">
                        <Button variant="ghost" size="sm">
                          <Heart className="w-5 h-5" />
                          <span className="ml-2">위시리스트</span>
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Bell className="w-5 h-5" />
                          <span className="ml-2">알림</span>
                        </Button>
                      </div>
                    </div>
                  </nav>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
