import { atom } from 'jotai';
import TodoData from '../types/todos';
import MenuData from '../types/menus';

// todosAtom 정의
export const todosAtom = atom<TodoData[]>([]);

// filterAtom 정의
export const filterAtom = atom('all');

// menuAtom 정의
export const menuAtom = atom<MenuData>();

// loginAtom 정의
export const userAtom = atom<{ username: string; token: string } | null>(null);
export const authErrorAtom = atom<string | null>(null);
