/* eslint-disable @typescript-eslint/no-this-alias */
import bcrypt from 'bcrypt';
import { Schema, model } from 'mongoose';
import { TUser, UserModel} from './user.interface';
import config from '../../config';



export const userSchema = new Schema<TUser,UserModel>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['Super Admin', 'Merchant Admin', 'Rider'],
  },
  status: {
    type: String,
    enum: ["Pending", "Active", "Disable"],
  }
}, { timestamps: true }); 


userSchema.pre('save', async function (next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this; // doc
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds),
  );

  next();
});

// set '' after saving password
userSchema.post('save', function (doc, next) {
  doc.password = '';
  next();
});

userSchema.statics.userExists = async function (
  paylod:string
) {
  const user = await User.findOne({ email:paylod }).select('+password');
  
  if(user){
    return user;
  }else{
    
    return await User.findOne({ phone:paylod }).select('+password')
  }
};





userSchema.statics.isPasswordMatched = async function (
  plainTextPassword,
  hashedPassword,
) {
  return await bcrypt.compare(plainTextPassword, hashedPassword);
};





export const User = model<TUser, UserModel>('User', userSchema);

