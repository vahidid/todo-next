import { cookies } from 'next/headers';
import {
  LOGGED_IN_USER_STORAGE_KEY,
} from '@/utils/constants';

export async function POST() {
  // Find User
  cookies().delete(LOGGED_IN_USER_STORAGE_KEY);
  return new Response(
    JSON.stringify({
      success: true,
      message: 'Logged out successfully',
    }),
    {
      status: 400,
    }
  );
}
