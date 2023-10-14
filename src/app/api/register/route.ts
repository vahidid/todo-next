import { cookies } from 'next/headers';
import { User } from '@/models/User';
import {
  LOGGED_IN_USER_STORAGE_KEY,
  USERS_STORAGE_KEY,
} from '@/utils/constants';
import { v4 } from 'uuid';
import bcrypt from 'bcrypt';

export async function POST(request: Request) {
  // Create User
  const user = (await request.json()) as User;
  const users = cookies().get(USERS_STORAGE_KEY);
  let newUsers: User[];

  if (!user.id) {
    user.id = v4();
    user.password = await bcrypt.hash(user.password, 10);
  }
  if (users) {
    const deserializedUsers = JSON.parse(users.value) as User[];
    newUsers = deserializedUsers.concat(user);
  } else {
    newUsers = [user];
  }

  cookies().set(USERS_STORAGE_KEY, JSON.stringify(newUsers));
  cookies().set(LOGGED_IN_USER_STORAGE_KEY, user.id);
  return new Response(JSON.stringify({ success: true }), {
    status: 200,
  });
}
