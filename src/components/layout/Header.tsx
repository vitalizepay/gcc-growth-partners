import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import logo from '@/assets/logo.png';

const navItems = [
  { label: 'Who We Are', href: '/who-we-are' },
  { label: 'What We Do', href: '/what-we-do' },
  { label: 'Blogs', href: '/blogs' },
  { label: "Let's Connect", href: '/contact' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Dillon & Bird" className="h-8 sm:h-10 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`nav-link ${location.pathname === item.href ? 'nav-link-active' : ''}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Phone Number - Desktop */}
          <div className="hidden lg:flex items-center gap-2 text-primary font-medium">
            <Phone className="w-4 h-4" />
            <a href="tel:+971123456789" className="hover:text-primary/80 transition-colors">
              +971 123 456 789
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden pb-6 animate-fade-in">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`nav-link text-base py-2 ${location.pathname === item.href ? 'nav-link-active' : ''}`}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="tel:+971123456789"
                className="flex items-center gap-2 text-primary font-medium py-2"
              >
                <Phone className="w-4 h-4" />
                +971 123 456 789
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
