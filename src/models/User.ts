import mongoose, { Schema } from 'mongoose';

const userSchema = new mongoose.Schema({
  name: Schema.Types.String,
  email: Schema.Types.String,
  password: Schema.Types.String
});

const Users = mongoose.model('Users', userSchema);

export default Users;
