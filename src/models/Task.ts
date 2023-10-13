export enum TaskPriority {
  Low,
  Medium,
  High,
  Emergency,
}

export type Task = {
  id?: string;
  title: string;
  description: string;
  datetime?: number;
  priority: TaskPriority;
  isDone: boolean;
  createdAt?: Date;
  updatedAt?: Date;
};
