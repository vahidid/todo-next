import { Task } from '@/models/Task';
import { v4 } from 'uuid';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
  const bodyReq = await request.json();
  // Serialize
  const taskReq = bodyReq as Task;

  taskReq.id = v4();
  taskReq.isDone = false;
  taskReq.createdAt = new Date();

  // Save In Array
  const allTasks = cookies().get('TASKS');
  if (allTasks) {
    const arraySerialized = JSON.parse(allTasks.value) as Task[];
    cookies().set('TASKS', JSON.stringify([...arraySerialized, taskReq]));
  } else {
    cookies().set('TASKS', JSON.stringify([taskReq]));
  }

  return new Response(JSON.stringify(taskReq), {
    status: 200,
  });
}

export async function GET() {
  const cookieData = cookies().get('TASKS');

  if (cookieData) {
    const tasksRes = JSON.parse(cookieData.value) as Task[];
    return new Response(JSON.stringify({ data: tasksRes }), {
      status: 200,
    });
  } else {
    return new Response(JSON.stringify({ data: [] }), {
      status: 200,
    });
  }
}
