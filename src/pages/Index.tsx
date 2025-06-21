
import Header from '@/components/Header';
import SearchForm from '@/components/SearchForm';
import HotelCard from '@/components/HotelCard';

const Index = () => {
  const popularHotels = [
    {
      id: '1',
      name: '신라호텔 서울',
      location: '서울 중구',
      rating: 4.7,
      reviewCount: 1245,
      price: 280000,
      originalPrice: 350000,
      imageUrl: 'photo-1566073771259-6a8506099945',
      tags: ['5성급', '비즈니스']
    },
    {
      id: '2',
      name: '부산 해운대 리조트',
      location: '부산 해운대구',
      rating: 4.5,
      reviewCount: 892,
      price: 120000,
      originalPrice: 180000,
      imageUrl: 'photo-1571896349842-33c89424de2d',
      tags: ['오션뷰', '리조트']
    },
    {
      id: '3',
      name: '제주 감귤호텔',
      location: '제주시',
      rating: 4.3,
      reviewCount: 567,
      price: 95000,
      imageUrl: 'photo-1520250497591-112f2f40a3f4',
      tags: ['제주특화', '조식포함']
    },
    {
      id: '4',
      name: '강릉 오션팰리스',
      location: '강릉시',
      rating: 4.6,
      reviewCount: 734,
      price: 150000,
      originalPrice: 200000,
      imageUrl: 'photo-1549294413-26f195200c16',
      tags: ['오션뷰', '스파']
    },
    {
      id: '5',
      name: '경주 한옥스테이',
      location: '경주시',
      rating: 4.4,
      reviewCount: 423,
      price: 85000,
      imageUrl: 'photo-1578662996442-48f60103fc96',
      tags: ['한옥', '전통']
    },
    {
      id: '6',
      name: '여수 마리나베이',
      location: '여수시',
      rating: 4.5,
      reviewCount: 656,
      price: 110000,
      imageUrl: 'photo-1584132967334-10e028bd69f7',
      tags: ['바다뷰', '낭만']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-yanolja-primary to-yanolja-secondary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24">
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 animate-fade-in leading-tight">
              어디든 갈 수 있어요
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl opacity-90 animate-fade-in px-4">
              전국 최저가 숙소를 야놀자에서 만나보세요
            </p>
          </div>
          
          {/* Search Form */}
          <div className="relative z-10">
            <SearchForm />
          </div>
        </div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform rotate-12 translate-y-12"></div>
        </div>
      </section>

      {/* Popular Hotels Section */}
      <section className="py-12 sm:py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              인기 숙소
            </h2>
            <p className="text-base sm:text-lg text-gray-600 px-4">
              많은 고객들이 선택한 베스트 숙소들을 만나보세요
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {popularHotels.map((hotel) => (
              <HotelCard key={hotel.id} {...hotel} />
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <button className="bg-white border-2 border-yanolja-primary text-yanolja-primary px-6 sm:px-8 py-3 rounded-xl font-medium hover:bg-yanolja-primary hover:text-white transition-all duration-200 w-full sm:w-auto">
              더 많은 숙소 보기
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-12 sm:py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              야놀자만의 특별함
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center p-4 sm:p-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-yanolja-light rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl sm:text-2xl">💰</span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">최저가 보장</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                동일한 상품을 더 저렴한 가격에 판매하는 곳이 있다면 차액을 돌려드립니다
              </p>
            </div>

            <div className="text-center p-4 sm:p-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-yanolja-light rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl sm:text-2xl">⚡</span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">즉시 예약 확정</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                예약과 동시에 확정! 기다림 없이 바로 여행 계획을 세우세요
              </p>
            </div>

            <div className="text-center p-4 sm:p-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-yanolja-light rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl sm:text-2xl">🎁</span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">특가 혜택</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                회원만을 위한 독점 할인과 특별 혜택을 놓치지 마세요
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div className="col-span-2 md:col-span-1">
              <div className="text-xl sm:text-2xl font-bold text-yanolja-primary mb-4">
                야놀자
              </div>
              <p className="text-sm sm:text-base text-gray-400 mb-4">
                대한민국 No.1 여행 플랫폼
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-sm sm:text-base">서비스</h4>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">국내숙소</a></li>
                <li><a href="#" className="hover:text-white transition-colors">해외숙소</a></li>
                <li><a href="#" className="hover:text-white transition-colors">레저·티켓</a></li>
                <li><a href="#" className="hover:text-white transition-colors">렌터카</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-sm sm:text-base">고객지원</h4>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">고객센터</a></li>
                <li><a href="#" className="hover:text-white transition-colors">공지사항</a></li>
                <li><a href="#" className="hover:text-white transition-colors">자주 묻는 질문</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-sm sm:text-base">회사정보</h4>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">회사소개</a></li>
                <li><a href="#" className="hover:text-white transition-colors">이용약관</a></li>
                <li><a href="#" className="hover:text-white transition-colors">개인정보처리방침</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-xs sm:text-sm text-gray-400">
            <p>&copy; 2024 야놀자. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
