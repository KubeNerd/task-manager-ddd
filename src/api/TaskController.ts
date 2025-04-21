import { FastifyInstance } from "fastify";
import { InMemoryTaskRepository } from "../infraestructure/repositories/InMemoryTaskRepository";
import { CreateTask } from "../application/use-cases/CreateTask";
import { ListTask } from "../application/use-cases/ListTask";
import { UpdateTask } from "../application/use-cases/UpdateTask";

const taskRepository = new InMemoryTaskRepository();
const createTask = new CreateTask(taskRepository);
const listTasks = new ListTask(taskRepository);

export async function taskRoutes(app: FastifyInstance) {
  app.post('/tasks', async (request, reply) => {
    const { title } = request.body as { title: string };
    const task = createTask.execute(title);
    reply.code(201).send(task);
  });

  app.get('/tasks', async (request, reply) => {
    const tasks = listTasks.execute();
    reply.send(tasks);
  });


  app.put('/tasks/:id', async (request, reply) => {

    const updateTask = new UpdateTask(taskRepository);

    const { id } = request.params as { id: string };
    const { title, completed } = request.body as { title: string; completed: boolean };
  
    const task = updateTask.execute(id, title, completed);
  
    if (!task) {
      reply.code(404).send({ message: "Task not found" });
      return;
    }
  
    reply.send(task);
  });
}
