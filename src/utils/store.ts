import { atom, useAtom, useSetAtom } from 'jotai'


const initToken = '';
const token = atom<string>(initToken)

export const useToken = () => useAtom(token)
export const useSetToken = () => useSetAtom(token)
