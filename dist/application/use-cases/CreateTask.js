"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTask = void 0;
const Task_1 = require("../../domain/entities/Task");
class CreateTask {
    constructor(taskRepository) {
        this.taskRepository = taskRepository;
    }
    execute(title) {
        const id = Date.now().toString();
        const task = new Task_1.Task(id, title);
        return this.taskRepository.create(task);
    }
}
exports.CreateTask = CreateTask;
