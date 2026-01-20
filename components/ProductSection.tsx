
import React from 'react';
import { PRODUCTS } from '../constants';
import { Product } from '../types';

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-stone-100 flex flex-col h-full">
      <div className="relative h-80 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-red-800 text-white w-16 h-16 rounded-full flex flex-col items-center justify-center font-bold shadow-lg">
          <span className="text-xl leading-none">{product.degree}°</span>
        </div>
      </div>
      
      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-2xl font-serif font-bold text-stone-800 mb-2">{product.name}</h3>
        <p className="text-red-800 font-bold mb-4">{product.price}</p>
        <p className="text-stone-600 mb-6 flex-grow leading-relaxed">
          {product.description}
        </p>
        
        <div className="mb-8 p-4 bg-stone-50 rounded-lg italic text-sm text-stone-500">
          <i className="fas fa-info-circle mr-2 text-amber-600"></i>
          {product.usage}
        </div>
        
        <button className="w-full py-3 bg-stone-900 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-[1.03] hover:bg-red-900 shadow-md hover:shadow-lg active:scale-95">
          Liên hệ đặt hàng
        </button>
      </div>
    </div>
  );
};

const ProductSection: React.FC = () => {
  return (
    <section id="products" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-red-900 mb-4">Tam Vị Tinh Túy</h2>
          <div className="w-24 h-1 bg-amber-400 mx-auto mb-6"></div>
          <p className="text-stone-600 max-w-2xl mx-auto">
            Mỗi nồng độ mang một phong thái riêng, đáp ứng mọi cung bậc cảm xúc và nhu cầu của quý khách.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRODUCTS.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
