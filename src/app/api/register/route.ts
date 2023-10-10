import { cookies } from 'next/headers';
import { User } from '@/models/User';
import { USERS_STORAGE_KEY } from '@/utils/constants';
import { v4 } from 'uuid';

export async function POST(request: Request) {
  // Create User
  const user = (await request.json()) as User;
  const users = cookies().get(USERS_STORAGE_KEY);
  let newUsers: User[];

  if (!user.id) {
    user.id = v4();
  }
  if (users) {
    const deserializedUsers = JSON.parse(users.value) as User[];
    newUsers = deserializedUsers.concat(user);
  } else {
    newUsers = [user];
  }

  cookies().set(USERS_STORAGE_KEY, JSON.stringify(newUsers));
  return new Response(JSON.stringify({ success: true }), {
    status: 200,
  });
}

export async function GET() {
  return new Response(JSON.stringify(cookies().get('name')), {
    status: 200,
  });
}
