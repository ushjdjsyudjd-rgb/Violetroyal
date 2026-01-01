
import React, { useState, useEffect } from 'react';
import { 
  Flower2, 
  Menu, 
  X, 
  ChevronDown, 
  Sparkles, 
  Crown, 
  ShieldCheck, 
  Star, 
  ArrowLeft,
  Instagram,
  Phone,
  MapPin
} from 'lucide-react';
import ChatAssistant from './components/ChatAssistant';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass-header py-4' : 'py-8'}`}>
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="bg-violet-950 p-2 rounded-lg group-hover:rotate-180 transition-transform duration-700">
              <Flower2 size={24} className="text-[#c5a059]" />
            </div>
            <h1 className="text-2xl font-black tracking-widest text-violet-950">VIOLET <span className="text-[#c5a059]">ROYALE</span></h1>
          </div>
          
          <div className="hidden lg:flex items-center gap-12 font-bold text-[13px] tracking-widest uppercase text-violet-900">
            <a href="#services" className="hover:text-[#c5a059] transition-colors">خدمات برگزیده</a>
            <a href="#philosophy" className="hover:text-[#c5a059] transition-colors">فلسفه زیبایی</a>
            <a href="#gallery" className="hover:text-[#c5a059] transition-colors">عمارت ویولت</a>
            <button 
              onClick={() => setShowChat(true)}
              className="bg-violet-950 text-[#c5a059] px-8 py-3 rounded-full hover:bg-violet-900 transition-all shadow-xl"
            >
              مشاوره VIP
            </button>
          </div>

          <button className="lg:hidden text-violet-950" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover animate-zoom"
            alt="Luxury Spa"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-violet-950/40 via-transparent to-violet-950/60"></div>
        </div>
        
        <div className="relative z-10 text-center text-white space-y-8 px-4">
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-2 rounded-full border border-white/20 mb-4 reveal active">
            <Crown size={18} className="text-[#c5a059]" />
            <span className="text-[10px] font-black tracking-[0.3em] uppercase">The Sanctuary of Aesthetics</span>
          </div>
          <h2 className="text-6xl md:text-9xl font-black leading-tight reveal active delay-200">
            تجلی شکوه، <br/> <span className="gold-gradient">در آینه زیبایی</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/80 font-medium leading-relaxed reveal active delay-500">
            به دنیای ویولت خوش آمدید؛ جایی که هنر پزشکی و ظرافت اشرافی برای خلق شاهکاری به نام "شما" با هم پیوند می‌خورند.
          </p>
          <div className="pt-10 flex flex-col md:flex-row items-center justify-center gap-6 reveal active delay-700">
            <button className="w-full md:w-auto bg-[#c5a059] text-violet-950 px-12 py-5 rounded-full font-black text-sm hover:scale-105 transition-all shadow-2xl">
              رزرو نوبت اختصاصی
            </button>
            <button className="w-full md:w-auto border border-white/30 backdrop-blur-md text-white px-12 py-5 rounded-full font-black text-sm hover:bg-white/10 transition-all">
              تور مجازی کلینیک
            </button>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
          <ChevronDown size={32} />
        </div>
      </section>

      {/* Stats/Trust Section */}
      <section className="bg-violet-950 py-24">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-16">
          {[
            { icon: ShieldCheck, label: 'تجهیزات آلمانی', sub: 'استاندارد FDA آمریکا' },
            { icon: Star, label: 'پزشکان متخصص', sub: 'تیم فوق تخصصی پوست' },
            { icon: Crown, label: 'تجربه VIP', sub: 'پذیرایی و خدمات هتلینگ' },
            { icon: Sparkles, label: 'نتایج ماندگار', sub: 'بیش از ۱۰،۰۰۰ رضایت' },
          ].map((item, i) => (
            <div key={i} className="text-center space-y-4 reveal">
              <div className="inline-flex p-4 bg-white/5 rounded-2xl text-[#c5a059] mb-2">
                <item.icon size={32} strokeWidth={1.5} />
              </div>
              <h4 className="text-white text-xl font-black">{item.label}</h4>
              <p className="text-violet-300/60 text-xs font-bold">{item.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Main Services Grid */}
      <section id="services" className="py-32 bg-[#fffdfa]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-24 space-y-4">
            <span className="text-[#c5a059] font-black tracking-widest text-[10px] uppercase">Curated Services</span>
            <h3 className="text-5xl font-black text-violet-950">منوی خدمات سلطنتی</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { 
                title: 'جوانسازی با هایفو اولترا', 
                desc: 'لیفت غیرتهاجمی صورت با تکنولوژی ۲۰۲۵.',
                img: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=600'
              },
              { 
                title: 'لیزر الکساندرایت کندلا', 
                desc: 'بدون درد، برای داشتن پوستی به لطافت ابریشم.',
                img: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=600'
              },
              { 
                title: 'تزریقات زیبایی و فیلر', 
                desc: 'اصلاح فرم صورت با برندهای معتبر جهانی.',
                img: 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&q=80&w=600'
              }
            ].map((service, i) => (
              <div key={i} className="group cursor-pointer reveal">
                <div className="relative rounded-[3rem] overflow-hidden aspect-[4/5] mb-8 shadow-2xl">
                  <img src={service.img} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-violet-950/20 group-hover:bg-transparent transition-colors"></div>
                  <div className="absolute bottom-8 right-8 left-8 p-8 bg-white/90 backdrop-blur-md rounded-[2rem] transform translate-y-12 group-hover:translate-y-0 transition-transform duration-500">
                    <h4 className="text-xl font-black text-violet-950 mb-2">{service.title}</h4>
                    <p className="text-xs text-slate-500 font-bold mb-4">{service.desc}</p>
                    <button className="text-[#c5a059] text-[10px] font-black uppercase flex items-center gap-2">
                      جزئیات بیشتر <ArrowLeft size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Consultation Section */}
      <section className="bg-violet-950 py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
          <div className="space-y-8 reveal">
            <h3 className="text-5xl font-black text-white leading-tight">
              مشاور دیجیتال شما، <br/> <span className="text-[#c5a059]">همیشه بیدار</span>
            </h3>
            <p className="text-violet-200/70 text-lg leading-relaxed font-medium">
              تکنولوژی هوش مصنوعی ویولت با تحلیل نیازهای شما، بهترین مسیر زیبایی را پیشنهاد می‌دهد. همین حالا گفتگوی VIP خود را آغاز کنید.
            </p>
            <button 
              onClick={() => setShowChat(true)}
              className="bg-white text-violet-950 px-12 py-5 rounded-full font-black text-sm flex items-center gap-4 hover:bg-[#c5a059] transition-all"
            >
              <Sparkles size={20} /> شروع مشاوره هوشمند
            </button>
          </div>
          <div className="relative reveal delay-300">
            <div className="aspect-square bg-gradient-to-tr from-violet-800 to-fuchsia-600 rounded-[4rem] rotate-6 shadow-2xl flex items-center justify-center">
               <Sparkles size={120} className="text-white/20 animate-pulse" />
            </div>
            <div className="absolute -top-10 -right-10 w-48 h-48 border-2 border-[#c5a059]/30 rounded-full animate-spin-slow"></div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/[0.02] -skew-x-12"></div>
      </section>

      {/* Footer / Contact */}
      <footer className="bg-white pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="md:col-span-2 space-y-8">
            <div className="flex items-center gap-3">
              <div className="bg-violet-950 p-2 rounded-lg">
                <Flower2 size={24} className="text-[#c5a059]" />
              </div>
              <h1 className="text-2xl font-black text-violet-950">VIOLET ROYALE</h1>
            </div>
            <p className="text-slate-500 max-w-sm font-medium leading-loose">
              میراث ما، درخشش شماست. کلینیک ویولت با تکیه بر دانش روز و محیطی آرام، تجربه‌ای متفاوت از خدمات زیبایی را برای شما به ارمغان می‌آورد.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center text-violet-900 hover:bg-violet-950 hover:text-white transition-all">
                <Instagram size={24} />
              </a>
              <a href="#" className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center text-violet-900 hover:bg-violet-950 hover:text-white transition-all">
                <Phone size={24} />
              </a>
            </div>
          </div>
          
          <div className="space-y-6">
            <h5 className="font-black text-violet-950 text-lg underline decoration-[#c5a059] decoration-4 underline-offset-8">دسترسی سریع</h5>
            <ul className="space-y-4 text-slate-500 font-bold text-sm">
              <li><a href="#" className="hover:text-violet-950 transition-colors">رزرو آنلاین</a></li>
              <li><a href="#" className="hover:text-violet-950 transition-colors">لیست قیمت‌ها</a></li>
              <li><a href="#" className="hover:text-violet-950 transition-colors">درباره ما</a></li>
              <li><a href="#" className="hover:text-violet-950 transition-colors">سوالات متداول</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h5 className="font-black text-violet-950 text-lg underline decoration-[#c5a059] decoration-4 underline-offset-8">تماس با ما</h5>
            <div className="space-y-4 text-slate-500 font-bold text-sm">
              <p className="flex items-center gap-3"><MapPin size={18} className="text-[#c5a059]" /> تهران، خیابان جردن، برج ویولت</p>
              <p className="flex items-center gap-3"><Phone size={18} className="text-[#c5a059]" /> ۰۲۱-۲۲۰۰۰۰۰۰</p>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-8 pt-16 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-slate-400 text-xs font-bold">© ۲۰۲۵ کلینیک تخصصی ویولت رویال. تمامی حقوق محفوظ است.</p>
          <div className="flex gap-8 text-slate-400 text-[10px] font-black uppercase tracking-widest">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </footer>

      {/* Chat Assistant Overlay */}
      {showChat && (
        <div className="fixed inset-0 z-[100] bg-violet-950/60 backdrop-blur-xl animate-in fade-in duration-500 flex items-center justify-center p-4">
          <div className="w-full max-w-5xl h-[85vh] relative animate-in zoom-in-95 duration-500">
            <button 
              onClick={() => setShowChat(false)}
              className="absolute -top-16 right-0 text-white hover:rotate-90 transition-transform p-2 bg-white/10 rounded-full"
            >
              <X size={32} />
            </button>
            <ChatAssistant />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
