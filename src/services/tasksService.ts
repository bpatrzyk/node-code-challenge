import Tasks, { ITask } from '../models/Task';

export async function getTasks() {
  return Tasks.find();
}

export async function createTask(newTask: ITask) {
  return Tasks.create(newTask);
}

export async function updateTask() {

}

export async function deleteTask(taskId: string) {
  return Tasks.deleteOne({ _id: taskId });
}
