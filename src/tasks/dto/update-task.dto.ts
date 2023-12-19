import { TaskStatus } from "../task.model";

export interface UpdateTaskDto{
    id:string;
    status:TaskStatus
}