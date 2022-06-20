/* eslint-disable prettier/prettier */
import { Document } from 'mongoose';
import { Category } from './product.enum'

interface Price {
  basePrice: number;
}

interface Country {
  name: string;
  price: number;
}
export interface Product extends Document {
  productName: string;
  description: string;
  isActive: boolean;
  price: Price;
  country: Country[];
  sallerName : string;
  mobile : number[];
  sallerEmail : string;
  sallerPassword : string;
  keywords : string[];
  role : string;
  category : Category;
}
