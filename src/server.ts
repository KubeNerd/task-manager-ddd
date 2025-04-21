import Fastify from "fastify";
import { taskRoutes } from "./api/TaskController";

const app = Fastify();

async function bootstrap() {
  await app.register(taskRoutes);

  const PORT = 3000;
  await app.listen({ port: PORT });
  console.log(`🚀 Server running at http://localhost:${PORT}`);
}

bootstrap();
