"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const TaskController_1 = require("./api/TaskController");
const app = (0, fastify_1.default)();
async function bootstrap() {
    await app.register(TaskController_1.taskRoutes);
    const PORT = 3000;
    await app.listen({ port: PORT });
    console.log(`🚀 Server running at http://localhost:${PORT}`);
}
bootstrap();
