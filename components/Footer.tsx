
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-400 py-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-10 h-10 bg-red-800 rounded-full flex items-center justify-center text-white font-serif text-xl">CĐ</div>
            <span className="text-2xl font-serif font-bold text-white">Rượu Cô Đào</span>
          </div>
          <p className="mb-6 max-w-md leading-relaxed">
            Chuyên cung cấp sỉ và lẻ các dòng rượu truyền thống chưng cất thủ công. 
            Cam kết chất lượng, không sử dụng cồn công nghiệp, mang lại sự an tâm tuyệt đối cho khách hàng.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 bg-stone-800 rounded-full flex items-center justify-center hover:bg-red-800 hover:text-white transition-all"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="w-10 h-10 bg-stone-800 rounded-full flex items-center justify-center hover:bg-red-800 hover:text-white transition-all"><i className="fab fa-instagram"></i></a>
            <a href="#" className="w-10 h-10 bg-stone-800 rounded-full flex items-center justify-center hover:bg-red-800 hover:text-white transition-all"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Liên hệ</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3">
              <i className="fas fa-map-marker-alt text-red-800"></i>
              <span>Nghề rượu truyền thống</span>
            </li>
            <li className="flex gap-3">
              <i className="fas fa-phone text-red-800"></i>
              <span>09xx xxx xxx</span>
            </li>
            <li className="flex gap-3">
              <i className="fas fa-envelope text-red-800"></i>
              <span>info@ruoucodao.vn</span>
            </li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Chính sách</h4>
          <ul className="space-y-4 text-sm">
            <li><a href="#" className="hover:text-red-800">Chính sách giao hàng</a></li>
            <li><a href="#" className="hover:text-red-800">Chính sách bảo mật</a></li>
            <li><a href="#" className="hover:text-red-800">Điều khoản sử dụng</a></li>
            <li className="pt-4 text-xs font-bold text-amber-500 uppercase">
              Uống rượu có trách nhiệm
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-stone-800 text-center text-xs">
        <p>&copy; {new Date().getFullYear()} Rượu Cô Đào. Tất cả các quyền được bảo hộ.</p>
        <p className="mt-2 text-stone-600 italic">Sản phẩm không dùng cho người dưới 18 tuổi và phụ nữ đang mang thai.</p>
      </div>
    </footer>
  );
};

export default Footer;
