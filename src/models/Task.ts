import mongoose, { Schema, Document } from 'mongoose';

export interface ITask extends Document{
  _id: string;
  title: string;
  description: string;
  dueDate: Date;
  reminderDate: Date;
  isCompleted: boolean;
}

const taskSchema = new Schema({
  title: Schema.Types.String,
  description: Schema.Types.String,
  dueDate: Schema.Types.Date,
  reminderDate: Schema.Types.Date,
  isCompleted: Schema.Types.Boolean
});

const Tasks = mongoose.model<ITask>('Tasks', taskSchema);

export default Tasks;
