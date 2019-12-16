export interface TaskDTO {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  reminderDate: string;
  isCompleted: boolean;
}

export interface NewTaskDTO {
  title: string;
  description: string;
  dueDate: string;
  reminderDate: string;
  isCompleted: boolean;
}
