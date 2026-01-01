
import React, { useState, useRef, useEffect } from 'react';
import { Send, User, Sparkles, PlusCircle } from 'lucide-react';
import { Message } from '../types';
import { getMedicalAdvice } from '../services/geminiService';

const ChatAssistant: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: 'درود بر شما. من مشاور هوشمند ویولت رویال هستم. آماده‌ام تا در سفری به سوی زیبایی، همراه و راهنمای شما باشم. چه خدماتی مد نظر شماست؟',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    const userMsg: Message = { id: Date.now().toString(), role: 'user', content: input, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);
    const responseText = await getMedicalAdvice(input);
    const assistantMsg: Message = { id: (Date.now() + 1).toString(), role: 'assistant', content: responseText || 'پوزش می‌طلبیم، مشاور در دسترس نیست.', timestamp: new Date() };
    setMessages(prev => [...prev, assistantMsg]);
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col h-full bg-[#fffdfa] rounded-[4rem] shadow-[0_50px_100px_-20px_rgba(26,6,51,0.5)] border border-[#c5a059]/20 overflow-hidden">
      {/* Concierge Header */}
      <div className="px-12 py-10 bg-violet-950 text-white flex items-center gap-6">
        <div className="w-20 h-20 bg-gradient-to-tr from-[#c5a059] to-[#f9f1c0] rounded-[2rem] flex items-center justify-center shadow-2xl">
          <Sparkles size={36} className="text-violet-950" />
        </div>
        <div>
          <h3 className="text-2xl font-black tracking-tight">VIP Digital Concierge</h3>
          <p className="text-[#c5a059] text-[10px] font-black uppercase tracking-[0.4em] mt-1">مشاور اختصاصی زیبایی</p>
        </div>
      </div>

      {/* Messages */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto px-12 py-12 space-y-12 bg-white/50 custom-scroll">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex items-start gap-6 ${msg.role === 'user' ? 'flex-row' : 'flex-row-reverse'}`}>
            <div className={`w-14 h-14 rounded-[1.5rem] flex items-center justify-center shrink-0 shadow-lg ${
              msg.role === 'user' ? 'bg-slate-100 text-slate-400' : 'bg-violet-950 text-[#c5a059]'
            }`}>
              {msg.role === 'user' ? <User size={24} /> : <Sparkles size={24} />}
            </div>
            
            <div className={`max-w-[75%] space-y-3 ${msg.role === 'user' ? 'text-right' : 'text-right'}`}>
              <div className={`p-8 rounded-[3rem] leading-relaxed text-[16px] font-medium shadow-sm border ${
                msg.role === 'user'
                  ? 'bg-white text-slate-800 rounded-tr-none border-slate-100'
                  : 'bg-[#fffdfa] text-violet-950 rounded-tl-none border-[#c5a059]/30'
              }`}>
                {msg.content}
              </div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex items-start gap-6 flex-row-reverse">
             <div className="w-14 h-14 rounded-[1.5rem] bg-violet-950 flex items-center justify-center animate-pulse">
               <Sparkles size={24} className="text-[#c5a059]" />
             </div>
             <div className="bg-slate-50 p-8 rounded-[3rem] rounded-tl-none flex gap-2">
                <div className="w-2 h-2 bg-violet-200 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-violet-400 rounded-full animate-bounce delay-150"></div>
                <div className="w-2 h-2 bg-violet-600 rounded-full animate-bounce delay-300"></div>
             </div>
          </div>
        )}
      </div>

      {/* Luxury Input */}
      <div className="p-12 bg-white border-t border-slate-100">
        <div className="relative flex items-center gap-6">
          <button className="text-slate-300 hover:text-[#c5a059] transition-colors"><PlusCircle size={32} /></button>
          <div className="relative flex-1">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="نیازهای زیبایی خود را اینجا بنویسید..."
              className="w-full bg-slate-50 border-none rounded-full px-12 py-6 outline-none focus:ring-4 focus:ring-[#c5a059]/10 text-lg transition-all pr-12 pl-24 font-medium"
            />
            <button
              onClick={handleSend}
              disabled={isLoading}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-violet-950 text-[#c5a059] p-5 rounded-full shadow-xl transition-all active:scale-90 disabled:opacity-50"
            >
              <Send size={24} className="rotate-180" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatAssistant;
