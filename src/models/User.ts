import mongoose, { Document, Schema } from 'mongoose';

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

const Users = mongoose.model<IUser>('Users', userSchema);

export default Users;
