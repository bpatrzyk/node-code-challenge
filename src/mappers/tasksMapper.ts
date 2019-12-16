import { NewTaskDTO, TaskDTO } from '../dtos/taskDTOs';
import { ITask } from '../models/Task';


export function toTaskDTOs(tasks: ITask[]) {
  return tasks.map(task => toTaskDTO(task));
}


export function toTaskDTO(task: ITask) {
  return {
    id: task._id,
    title: task.title,
    description: task.description,
    dueDate: task.dueDate.toISOString(),
    reminderDate: task.reminderDate.toISOString(),
    isCompleted: task.isCompleted
  } as TaskDTO;
}

export function toTask(newTask: NewTaskDTO) {
  return {
    title: newTask.title,
    description: newTask.description,
    dueDate: new Date(newTask.dueDate),
    reminderDate: new Date(newTask.reminderDate),
    isCompleted: newTask.isCompleted,
  } as ITask;
}
