import { Request, Response } from 'express';
import * as Service from '../services/tasksService';
import { toTask, toTaskDTO, toTaskDTOs } from '../mappers/tasksMapper'
import { NewTaskDTO } from '../dtos/taskDTOs';

export async function getTasks(req: Request, res: Response) {
  const tasks = await Service.getTasks();
  res.send(toTaskDTOs(tasks));
}

export async function createTask(req: Request, res: Response) {
  const newTaskDTO = req.body as NewTaskDTO;
  const newTask = toTask(newTaskDTO)
  const task = await Service.createTask(newTask);
  res.send(toTaskDTO(task));
}

export async function updateTask(req: Request, res: Response) {

}

export async function deleteTask(req: Request, res: Response) {
  const taskId = req.params.taskId;
  await Service.deleteTask(taskId);
  res.send();
}
