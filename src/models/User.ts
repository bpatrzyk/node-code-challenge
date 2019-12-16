import mongoose, { Document, Schema } from 'mongoose';
import bcrypt from 'bcrypt';

export interface IUser extends Document {
  _id: string;
  name: string;
  email: string;
  password: string;
}

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    index: true,
    unique: true
  },
  email: {
    type: String,
    index: true,
    unique: true
  },
  password: Schema.Types.String
});

// hash user password before saving into database
userSchema.pre<IUser>('save', function(next){
  this.password = bcrypt.hashSync(this.password, 10);
  next();
});

const Users = mongoose.model<IUser>('Users', userSchema);

export default Users;
