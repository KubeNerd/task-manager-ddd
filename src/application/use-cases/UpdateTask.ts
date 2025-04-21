import { TaskRepository } from "../../domain/repositories/TaskRepository";
import { Task } from "../../domain/entities/Task";

export class UpdateTask {
    constructor(private taskRepository: TaskRepository){}

    execute(id: string, title: string, completed: boolean): Task | null {
        const existingTasks = this.taskRepository.list();
        const task = existingTasks.find(task => task.id === id);

        if(!task){
            return null;
        }

        task.title = title;
        task.completed = completed;

        return this.taskRepository.update(task);
    }
}