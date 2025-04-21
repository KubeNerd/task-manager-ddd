import { Task } from "../entities/Task";

export interface TaskRepository {
    create(task: Task): Task;
    list(): Task[];
    update(task: Task): Task | null;
}