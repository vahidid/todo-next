import { IRegisterReq } from '@/interfaces/Auth';

export const RegisterService = (url: string, { arg }: { arg: IRegisterReq }) =>
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(arg),
  }).then((res) => res.json());
