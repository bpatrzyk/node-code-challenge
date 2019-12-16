import mongoose from 'mongoose';

export async function setupDB() {
  await mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true});
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {
    console.log('mongoose connected');
  });
}
