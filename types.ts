
export interface Product {
  id: string;
  name: string;
  degree: number;
  description: string;
  usage: string;
  price: string;
  image: string;
  color: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
