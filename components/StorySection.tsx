
import React from 'react';
import { BRAND_STORY } from '../constants';

const StorySection: React.FC = () => {
  return (
    <section id="story" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2 relative">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-red-50 rounded-full z-0"></div>
          <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-amber-50 rounded-full z-0"></div>
          <img 
            src="https://images.unsplash.com/photo-1543362906-acfc16c67564?q=80&w=800&auto=format&fit=crop" 
            alt="Wine Making Process"
            className="relative z-10 w-full rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000"
          />
        </div>
        
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl font-serif font-bold text-red-900 mb-6">Gói Trọn Nghĩa Tình Trong Từng Lít Rượu</h2>
          <p className="text-stone-600 leading-loose mb-8 text-lg italic">
            "{BRAND_STORY}"
          </p>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-red-100 text-red-800 rounded-full flex items-center justify-center">
                <i className="fas fa-leaf"></i>
              </div>
              <div>
                <h4 className="font-bold text-stone-800">Nguyên liệu tự nhiên</h4>
                <p className="text-stone-500">Gạo đạt chuẩn VietGAP.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-amber-100 text-amber-800 rounded-full flex items-center justify-center">
                <i className="fas fa-flask"></i>
              </div>
              <div>
                <h4 className="font-bold text-stone-800">Men thơm</h4>
                <p className="text-stone-500">Ủ men gia truyền.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-stone-100 text-stone-800 rounded-full flex items-center justify-center">
                <i className="fas fa-history"></i>
              </div>
              <div>
                <h4 className="font-bold text-stone-800">Hạ thổ</h4>
                <p className="text-stone-500">Rượu được hạ thổ.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
