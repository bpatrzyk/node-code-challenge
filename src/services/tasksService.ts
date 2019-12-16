import Tasks, { ITask } from '../models/Task';

export async function getTasks() {
  return Tasks.find();
}

export async function createTask(newTask: ITask) {
  return Tasks.create(newTask);
}

export async function updateTask(taskId: string, updatedTask: ITask) {
  return Tasks.findByIdAndUpdate(taskId, updatedTask, { new: true });
}

export async function deleteTask(taskId: string) {
  return Tasks.findByIdAndDelete(taskId);
}
