import { Task } from "../../domain/entities/Task";
import { TaskRepository } from "../../domain/repositories/TaskRepository";


export class CreateTask {
    constructor(private taskRepository: TaskRepository){}

    execute(title: string): Task {
        const id = Date.now().toString();
        const task = new Task(id, title);
        return this.taskRepository.create(task);
    }
    
}