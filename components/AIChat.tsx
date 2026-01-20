
import React, { useState, useRef, useEffect } from 'react';
import { getSommelierAdvice } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIChat: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Chào quý khách! Tôi là chuyên gia thử rượu của Rượu Cô Đào. Bạn đang tìm kiếm loại rượu bao nhiêu độ cho dịp đặc biệt nào?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const aiResponse = await getSommelierAdvice(userMsg);
    setMessages(prev => [...prev, { role: 'model', text: aiResponse }]);
    setIsLoading(false);
  };

  return (
    <section id="ai-advice" className="py-16 md:py-24 bg-stone-100">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-10 md:mb-12">
          <span className="text-red-800 font-bold uppercase tracking-widest text-xs md:text-sm">Trợ lý ảo thông minh</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mt-2">Chuyên Gia Tư Vấn Cô Đào</h2>
          <p className="text-stone-600 mt-4 text-sm md:text-base px-4">Hãy chia sẻ nhu cầu của bạn, tôi sẽ giúp bạn chọn ra bình rượu phù hợp nhất.</p>
        </div>

        <div className="bg-white rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden flex flex-col h-[500px] md:h-[650px] border border-stone-200">
          <div className="bg-red-900 p-4 md:p-6 flex items-center gap-4">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center text-red-900 text-lg md:text-xl shadow-inner">
              <i className="fas fa-robot"></i>
            </div>
            <div>
              <h4 className="text-white font-bold text-sm md:text-base">Chuyên Gia Thử Rượu AI</h4>
              <p className="text-red-100 text-[10px] md:text-xs">Đang trực tuyến • Sẵn sàng tư vấn</p>
            </div>
          </div>

          <div className="flex-grow overflow-y-auto p-4 md:p-6 space-y-4 bg-stone-50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] md:max-w-[80%] p-3 md:p-4 rounded-2xl shadow-sm ${
                  msg.role === 'user' 
                  ? 'bg-red-800 text-white rounded-tr-none' 
                  : 'bg-white text-stone-800 rounded-tl-none border border-stone-100'
                }`}>
                  <p className="whitespace-pre-line text-sm md:text-base leading-relaxed">{msg.text}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-3 md:p-4 rounded-2xl rounded-tl-none border border-stone-100 flex gap-2">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-stone-300 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-stone-300 rounded-full animate-bounce [animation-delay:-.3s]"></div>
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-stone-300 rounded-full animate-bounce [animation-delay:-.5s]"></div>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          <div className="p-3 md:p-4 bg-white border-t border-stone-100">
            <div className="flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Mua tặng sếp..."
                className="flex-grow px-4 md:px-6 py-3 md:py-4 bg-stone-100 rounded-full focus:outline-none focus:ring-2 focus:ring-red-800/20 text-stone-800 text-sm md:text-base"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="bg-red-800 text-white w-12 h-12 md:w-14 md:h-14 rounded-full flex-shrink-0 flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:bg-red-700 disabled:opacity-50 shadow-lg active:scale-90"
              >
                <i className="fas fa-paper-plane text-sm md:text-base"></i>
              </button>
            </div>
            <p className="text-[9px] md:text-[10px] text-center text-stone-400 mt-3 italic">
              * Rượu Cô Đào khuyên quý khách uống có trách nhiệm.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIChat;
