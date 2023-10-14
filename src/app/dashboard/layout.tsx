import * as React from 'react';
import { cookies } from 'next/headers';

export const metadata = {
  title: 'UpToDo | Dashboard',
  description: 'Simple todo application',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log('Cookies', cookies().getAll());
  return <>{children}</>;
}
