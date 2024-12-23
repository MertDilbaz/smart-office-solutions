import { Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  return (
    <nav className="bg-amber-100 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl font-extrabold text-amber-900">Smart Office Solutions</span>
            </Link>
          </div>
          <div className="flex space-x-4">
            <Button variant="ghost" asChild>
            <Link to="/" style={{ fontSize: '24px', fontWeight: 'bold', color: '#92400e' }}>
                Anasayfa
              </Link>
            </Button>
            <Button variant="ghost" asChild>
            <Link to="/technical-details" style={{ fontSize: '24px', fontWeight: 'bold', color: '#92400e' }}>
                Teknik Detaylar
              </Link>
            </Button>
            <Button variant="ghost" asChild>
            <Link to="/gallery" style={{ fontSize: '24px', fontWeight: 'bold', color: '#92400e' }}>
                Galeri
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}