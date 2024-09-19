export default interface TodoData {
  title: string;
  completed: boolean;
}

export type RemoveFn = (item: TodoData) => void;
