import { TaskRepository } from "../../domain/repositories/TaskRepository";
import { Task  } from "../../domain/entities/Task";

export class ListTask {
    constructor(private taskRepository: TaskRepository){}

    execute(): Task[] {
        return this.taskRepository.list();
    }
}