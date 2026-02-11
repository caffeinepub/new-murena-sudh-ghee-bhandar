import { Menu, X, Award, Droplet, ShieldCheck } from 'lucide-react';
import { useState } from 'react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="app-container">
      {/* Header & Navigation */}
      <header className="site-header">
        <nav className="navbar">
          <div className="navbar-brand">
            <h1 className="brand-name">New Murena Sudh Ghee Bhandar</h1>
          </div>
          
          <button 
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <ul className={`nav-links ${mobileMenuOpen ? 'nav-links-open' : ''}`}>
            <li><button onClick={() => scrollToSection('home')} className="nav-link">Home</button></li>
            <li><button onClick={() => scrollToSection('dairy-products')} className="nav-link">Dairy Products</button></li>
            <li><button onClick={() => scrollToSection('sweets')} className="nav-link">Sweets</button></li>
            <li><button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button></li>
          </ul>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section id="home" className="hero-section">
          <div className="hero-content">
            <h2 className="hero-headline">Experience the Taste of Purity</h2>
            <p className="hero-subheadline">Your one-stop shop for Sudh Ghee, Dairy, and Confectionery</p>
            <button 
              className="cta-button"
              onClick={() => scrollToSection('contact')}
            >
              Visit Store
            </button>
          </div>
          <div className="hero-decoration"></div>
        </section>

        {/* Featured Collection */}
        <section id="dairy-products" className="featured-section">
          <div className="section-container">
            <h2 className="section-title">Our Featured Collection</h2>
            <p className="section-subtitle">Premium quality products for your family</p>
            
            <div className="featured-grid">
              <article className="product-card product-card-featured">
                <div className="product-icon">
                  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M32 8C20 8 12 16 12 28C12 40 20 48 32 56C44 48 52 40 52 28C52 16 44 8 32 8Z" fill="currentColor" opacity="0.2"/>
                    <path d="M32 12C22 12 16 18 16 28C16 38 22 44 32 52C42 44 48 38 48 28C48 18 42 12 32 12Z" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="32" cy="28" r="6" fill="currentColor"/>
                  </svg>
                </div>
                <h3 className="product-title">Pure Ghee</h3>
                <p className="product-description">100% authentic and pure desi ghee made from the finest quality milk. Rich in flavor and nutrition.</p>
                <span className="product-badge">Bestseller</span>
              </article>

              <article className="product-card">
                <div className="product-icon">
                  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="16" y="12" width="32" height="40" rx="4" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.1"/>
                    <path d="M24 20H40M24 28H40M24 36H36" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <h3 className="product-title">Refined Oils</h3>
                <p className="product-description">Premium quality cooking oils for healthy living.</p>
              </article>

              <article className="product-card">
                <div className="product-icon">
                  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="20" y="16" width="24" height="32" rx="2" fill="currentColor" opacity="0.2"/>
                    <rect x="18" y="14" width="28" height="36" rx="3" stroke="currentColor" strokeWidth="2"/>
                    <rect x="24" y="20" width="16" height="8" rx="1" fill="currentColor"/>
                  </svg>
                </div>
                <h3 className="product-title">Cadbury Chocolates</h3>
                <p className="product-description">Wide range of delicious Cadbury chocolates.</p>
              </article>

              <article className="product-card">
                <div className="product-icon">
                  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M32 12L28 24H36L32 12Z" fill="currentColor"/>
                    <rect x="20" y="24" width="24" height="28" rx="4" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.1"/>
                    <circle cx="32" cy="38" r="3" fill="currentColor"/>
                  </svg>
                </div>
                <h3 className="product-title">Real Juices</h3>
                <p className="product-description">Fresh and natural fruit juices for refreshment.</p>
              </article>

              <article id="sweets" className="product-card">
                <div className="product-icon">
                  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="32" cy="32" r="16" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.1"/>
                    <circle cx="28" cy="28" r="3" fill="currentColor"/>
                    <circle cx="36" cy="28" r="3" fill="currentColor"/>
                    <circle cx="32" cy="36" r="3" fill="currentColor"/>
                  </svg>
                </div>
                <h3 className="product-title">Fresh Sweets</h3>
                <p className="product-description">Traditional Indian sweets made fresh daily.</p>
              </article>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="why-choose-section">
          <div className="section-container">
            <h2 className="section-title">Why Choose Us</h2>
            <div className="features-grid">
              <div className="feature-item">
                <div className="feature-icon">
                  <Award size={48} strokeWidth={1.5} />
                </div>
                <h3 className="feature-title">100% Pure</h3>
                <p className="feature-description">Guaranteed authentic products with no additives or preservatives</p>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <Droplet size={48} strokeWidth={1.5} />
                </div>
                <h3 className="feature-title">Fresh Daily</h3>
                <p className="feature-description">Products prepared fresh every day for maximum quality</p>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <ShieldCheck size={48} strokeWidth={1.5} />
                </div>
                <h3 className="feature-title">Trusted Brands</h3>
                <p className="feature-description">Only the most reliable and reputable brands in stock</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contact" className="site-footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-heading">Visit Us</h3>
            <p className="footer-text">New Murena Sudh Ghee Bhandar</p>
            <p className="footer-text">Shop No. 7, Rajeev Gandhi Complex, Manisha Market, Shahpura Lake, Shahpura, Bhopal, Madhya Pradesh 462039</p>
          </div>

          <div className="footer-section">
            <h3 className="footer-heading">Contact</h3>
            <p className="footer-text">Phone: 09981123849</p>
            <p className="footer-text">Open Daily: 8:00 AM - 9:00 PM</p>
          </div>

          <div className="footer-section">
            <h3 className="footer-heading">Quality Assured</h3>
            <p className="footer-text">Serving pure and authentic products since establishment</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            © {new Date().getFullYear()} New Murena Sudh Ghee Bhandar. All rights reserved.
          </p>
          <p className="attribution">
            Built with love using{' '}
            <a 
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="caffeine-link"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
