/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  UtensilsCrossed, 
  Clock, 
  MapPin, 
  Phone, 
  ChevronRight, 
  Star, 
  Menu as MenuIcon, 
  X,
  Instagram,
  Facebook,
  ArrowRight,
  Quote
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Главная', href: '#' },
    { name: 'Меню', href: '#menu' },
    { name: 'О нас', href: '#about' },
    { name: 'Отзывы', href: '#reviews' },
    { name: 'Контакты', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'glass-nav py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
            <span className="text-secondary font-serif text-xl font-bold">S</span>
          </div>
          <span className={`text-2xl font-serif font-bold tracking-wider ${isScrolled ? 'text-primary' : 'text-accent'}`}>
            SHABBODA
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`font-display text-sm uppercase tracking-widest transition-colors ${isScrolled ? 'text-primary hover:text-secondary' : 'text-accent hover:text-secondary'}`}
            >
              {link.name}
            </a>
          ))}
          <button className="btn-primary ml-4">Забронировать столик</button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className={isScrolled ? 'text-primary' : 'text-accent'} /> : <MenuIcon className={isScrolled ? 'text-primary' : 'text-accent'} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-accent border-b border-primary/10 md:hidden py-8 px-6 flex flex-col gap-6 shadow-xl"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-primary font-serif text-2xl border-b border-primary/5 pb-2"
              >
                {link.name}
              </a>
            ))}
            <button className="btn-primary w-full">Забронировать столик</button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1974&auto=format&fit=crop" 
          alt="Grilled Shashlik" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-secondary font-display uppercase tracking-[0.3em] text-sm mb-4 block">
            Аутентичное узбекское наследие
          </span>
          <h1 className="text-5xl md:text-8xl text-accent font-serif mb-8 leading-tight">
            Искусство <br />
            <span className="italic">идеального шашлыка</span>
          </h1>
          <p className="text-accent/80 text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto leading-relaxed">
            Почувствуйте легендарные вкусы Ташкента в Кафе Shabboda. Там, где традиции встречаются с роскошью в каждом кусочке.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary flex items-center justify-center gap-2">
              Посмотреть меню <ChevronRight size={18} />
            </button>
            <button className="btn-outline !border-accent !text-accent hover:!bg-accent hover:!text-primary">
              Наша история
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-accent/50 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest">Листайте</span>
        <div className="w-[1px] h-12 bg-accent/30"></div>
      </motion.div>
    </section>
  );
};

const Features = () => {
  const features = [
    {
      icon: <UtensilsCrossed className="text-secondary" />,
      title: "Мастерский шашлык",
      desc: "Наши фирменные шашлыки маринуются 24 часа с использованием секретных семейных специй."
    },
    {
      icon: <Star className="text-secondary" />,
      title: "Традиционные манты",
      desc: "Манты ручной лепки, приготовленные на пару до совершенства, полные аутентичного вкуса."
    },
    {
      icon: <Clock className="text-secondary" />,
      title: "Быстро и свежо",
      desc: "Роскошь не означает ожидание. Мы гордимся быстрым и безупречным обслуживанием."
    }
  ];

  return (
    <section className="py-24 bg-accent">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group"
            >
              <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-500">
                {React.cloneElement(f.icon as React.ReactElement, { className: 'group-hover:text-accent transition-colors' })}
              </div>
              <h3 className="text-2xl font-serif mb-4 text-primary">{f.title}</h3>
              <p className="text-primary/60 leading-relaxed font-light">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const MenuPreview = () => {
  const items = [
    { name: "Фирменный шашлык из баранины", price: "45,000 UZS", desc: "Нежные кусочки баранины, приготовленные на углях." },
    { name: "Традиционные манты с говядиной", price: "38,000 UZS", desc: "Манты ручной работы с пряной говядиной и луком." },
    { name: "Фирменный салат Shabboda", price: "25,000 UZS", desc: "Свежие ташкентские помидоры, огурцы и зелень." },
    { name: "Узбекский плов (Блюдо дня)", price: "42,000 UZS", desc: "Король узбекской кухни, приготовленный из риса премиум-класса." }
  ];

  return (
    <section id="menu" className="py-24 bg-primary text-accent overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1514328539438-2b2450cbb920?q=80&w=2070&auto=format&fit=crop" 
          alt="Pattern" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-secondary font-display uppercase tracking-widest text-sm mb-4 block">Наш выбор</span>
            <h2 className="text-4xl md:text-6xl font-serif leading-tight">Попробуйте <br /><span className="italic text-secondary">совершенство</span></h2>
          </div>
          <button className="btn-outline !border-secondary !text-secondary hover:!bg-secondary hover:!text-primary">
            Полное меню
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-x-20 gap-y-12">
          {items.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex justify-between items-start border-b border-accent/10 pb-6 group cursor-pointer"
            >
              <div>
                <h4 className="text-xl font-serif mb-2 group-hover:text-secondary transition-colors">{item.name}</h4>
                <p className="text-accent/50 text-sm font-light italic">{item.desc}</p>
              </div>
              <span className="text-secondary font-display font-medium">{item.price}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Reviews = () => {
  const reviews = [
    {
      name: "Диана Нормирзаева",
      role: "Местный эксперт",
      text: "Вкусно, дешево, быстро. Большое меню с аутентичными вкусами. Обязательно к посещению в Ташкенте!",
      rating: 5
    },
    {
      name: "Файзулло Джураев",
      role: "Гурман-путешественник",
      text: "Еда невероятно вкусная. Особенно шашлык и манты. По-настоящему аутентичный опыт.",
      rating: 5
    }
  ];

  return (
    <section id="reviews" className="py-24 bg-accent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <Quote className="mx-auto text-secondary mb-6" size={48} />
          <h2 className="text-4xl md:text-5xl font-serif text-primary">Что говорят наши гости</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {reviews.map((r, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-3xl shadow-sm border border-primary/5"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(r.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-primary/80 text-xl font-serif italic mb-8 leading-relaxed">
                "{r.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center font-serif text-primary">
                  {r.name[0]}
                </div>
                <div>
                  <h5 className="font-display font-bold text-primary">{r.name}</h5>
                  <span className="text-primary/40 text-xs uppercase tracking-widest">{r.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-secondary font-display uppercase tracking-widest text-sm mb-4 block">Посетите нас</span>
            <h2 className="text-4xl md:text-6xl font-serif text-primary mb-8">Найдите свой столик в <span className="italic">Shabboda</span></h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="text-primary" size={20} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-primary mb-1">Местоположение</h4>
                  <p className="text-primary/60 font-light">9667+MP Ташкент, Узбекистан</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center shrink-0">
                  <Phone className="text-primary" size={20} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-primary mb-1">Телефон</h4>
                  <p className="text-primary/60 font-light">+998 71 229 18 78</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center shrink-0">
                  <Clock className="text-primary" size={20} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-primary mb-1">Часы работы</h4>
                  <p className="text-primary/60 font-light">Открыто ежедневно: 09:00 — 23:00</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex gap-4">
              <button className="btn-primary">Позвонить для заказа</button>
              <button className="btn-outline">Проложить маршрут</button>
            </div>
          </div>

          <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.345678901234!2d69.2401!3d41.2995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDE3JzU4LjIiTiA2OcKwMTQnMjQuNCJF!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              title="Расположение Кафе Shabboda"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-primary py-16 text-accent/60 border-t border-accent/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center">
                <span className="text-secondary font-serif text-sm font-bold">S</span>
              </div>
              <span className="text-xl font-serif font-bold tracking-wider text-accent">
                SHABBODA
              </span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed">
              Приносим аутентичный вкус Ташкента к вашему столу. Традиции, качество и страсть в каждом блюде.
            </p>
          </div>

          <div className="flex gap-8">
            <a href="#" className="hover:text-secondary transition-colors"><Instagram size={20} /></a>
            <a href="#" className="hover:text-secondary transition-colors"><Facebook size={20} /></a>
          </div>

          <div className="text-center md:text-right">
            <p className="text-xs uppercase tracking-[0.2em] mb-2">© 2026 Кафе Shabboda</p>
            <p className="text-[10px] opacity-50">Создано для совершенства в Ташкенте</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen selection:bg-secondary selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <section id="about" className="py-24 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"></div>
                <img 
                  src="https://images.unsplash.com/photo-1541518763669-27fef04b14ea?q=80&w=1933&auto=format&fit=crop" 
                  alt="Uzbek Hospitality" 
                  className="rounded-3xl shadow-2xl relative z-10"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-6 -right-6 bg-secondary p-8 rounded-2xl shadow-xl z-20 hidden md:block">
                  <span className="text-primary font-serif text-4xl block">20+</span>
                  <span className="text-primary/60 text-xs uppercase tracking-widest">Лет наследия</span>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-secondary font-display uppercase tracking-widest text-sm mb-4 block">Наше наследие</span>
                <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6 leading-tight">
                  Где каждое блюдо рассказывает <span className="italic">историю</span>
                </h2>
                <p className="text-primary/70 text-lg font-light mb-8 leading-relaxed">
                  Ранее известное как «Чархпалак», Кафе Shabboda на протяжении десятилетий является краеугольным камнем кулинарной сцены Ташкента. Наше название, означающее «Ветерок», отражает наше стремление обеспечить освежающий и аутентичный обеденный опыт.
                </p>
                <p className="text-primary/70 text-lg font-light mb-10 leading-relaxed">
                  Мы специализируемся на душе узбекской кухни: идеальном шашлыке и мантах ручной работы. Все ингредиенты поставляются из местных источников, что гарантирует присутствие яркого духа Узбекистана в каждом кусочке.
                </p>
                <button className="btn-primary flex items-center gap-2">
                  Узнать больше о нас <ArrowRight size={18} />
                </button>
              </motion.div>
            </div>
          </div>
        </section>
        <MenuPreview />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
