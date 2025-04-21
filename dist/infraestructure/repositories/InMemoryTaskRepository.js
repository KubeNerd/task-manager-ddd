"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemoryTaskRepository = void 0;
class InMemoryTaskRepository {
    constructor() {
        this.tasks = [];
    }
    create(task) {
        this.tasks.push(task);
        return task;
    }
    list() {
        return this.tasks;
    }
}
exports.InMemoryTaskRepository = InMemoryTaskRepository;
