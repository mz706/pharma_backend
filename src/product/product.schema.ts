/* eslint-disable prettier/prettier */
import { Schema } from 'mongoose';
import { Category } from './product.enum'



export const ProductSchema = new Schema({
  productName : { type : String},
  description : { type : String  , default : "No description fourd!"},
  isActive : { type : Boolean , default : false },
  price : {
    basePrice : { type : Number , default : 0.00 , required  : true }
  },
  country : [
    {
      name: { type: String  , required  : true },
      price: { type: Number , required  : true },
    }      
  ],
  sallerName : { type : String , required  : true },
  mobile : [ Number ],
  sallerEmail : { type : String , required  : true },
  sallerPassword :{ type : String , required  : true },
  keywords : [String],
  catagory: {
    type: String,
    enum: Category,
    default: Category.NOT_DEFINED
},
// timestamps: { createdAt:  'createTime', updatedAt:  'updateTime' }
});
