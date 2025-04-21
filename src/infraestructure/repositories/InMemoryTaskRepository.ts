import { TaskRepository } from "../../domain/repositories/TaskRepository";
import { Task } from "../../domain/entities/Task";

export class InMemoryTaskRepository implements TaskRepository {
    private tasks: Task[] = [];

    create(task: Task): Task {
        this.tasks.push(task);
        return task;
    }

    list(): Task[] {
        return this.tasks;
    }

    update(updatedTask: Task): Task | null {
        const index = this.tasks.findIndex(task => task.id === updatedTask.id);
        if (index === -1){
            return null;
        }
        this.tasks[index] = updatedTask;

        return updatedTask;
    }
}