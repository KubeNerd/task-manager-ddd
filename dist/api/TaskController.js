"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskRoutes = taskRoutes;
const InMemoryTaskRepository_1 = require("../infraestructure/repositories/InMemoryTaskRepository");
const CreateTask_1 = require("../application/use-cases/CreateTask");
const ListTask_1 = require("../application/use-cases/ListTask");
const taskRepository = new InMemoryTaskRepository_1.InMemoryTaskRepository();
const createTask = new CreateTask_1.CreateTask(taskRepository);
const listTasks = new ListTask_1.ListTask(taskRepository);
async function taskRoutes(app) {
    app.post('/tasks', async (request, reply) => {
        const { title } = request.body;
        const task = createTask.execute(title);
        reply.code(201).send(task);
    });
    app.get('/tasks', async (request, reply) => {
        const tasks = listTasks.execute();
        reply.send(tasks);
    });
}
