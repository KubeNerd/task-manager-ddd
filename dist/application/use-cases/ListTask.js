"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListTask = void 0;
class ListTask {
    constructor(taskRepository) {
        this.taskRepository = taskRepository;
    }
    execute() {
        return this.taskRepository.list();
    }
}
exports.ListTask = ListTask;
