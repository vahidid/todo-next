import { ILoginReq } from '@/interfaces/Auth';
import { cookies } from 'next/headers';
import {
  LOGGED_IN_USER_STORAGE_KEY,
  USERS_STORAGE_KEY,
} from '@/utils/constants';
import { User } from '@/models/User';
import bcrypt from 'bcrypt';

export async function POST(request: Request) {
  const body = (await request.json()) as ILoginReq;

  // Find User
  const users = cookies().get(USERS_STORAGE_KEY);
  if (users) {
    const usersArr = JSON.parse(users.value) as User[];
    const foundUser = usersArr.find((u) => u.email === body.email);

    // Compare Password
    if (foundUser) {
      const valid = await bcrypt.compare(body.password, foundUser.password);
      if (valid) {
        cookies().set(LOGGED_IN_USER_STORAGE_KEY, foundUser.id);
        return new Response(
          JSON.stringify({ success: false, message: 'Logged In successfully' }),
          {
            status: 200,
          }
        );
      }
    }
  }

  return new Response(
    JSON.stringify({
      success: false,
      message: 'Your credentials are not valid',
    }),
    {
      status: 400,
    }
  );
}
