import { useAtom } from 'jotai';
import TodoData, { RemoveFn } from '../../../types/todos';
import { FormEvent } from 'react';
import TodoFilter from '../TodoFilter';
import TodoList from '../TodoList';
import { todosAtom } from '../../../atoms/atoms';

const TodoCreate = () => {
  const [todos, setTodos] = useAtom(todosAtom);

  const remove: RemoveFn = (todo) =>
    setTodos((prev) => prev.filter((item) => item !== todo));

  const add = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const title = e.currentTarget.inputTitle.value;
    e.currentTarget.inputTitle.value = '';
    const newTodo: TodoData = { title, completed: false };
    setTodos((prev) => [...prev, newTodo]);
  };

  console.log('Todos in TodoCreate:', todos);

  return (
    <form onSubmit={add}>
      <TodoFilter />
      <input name="inputTitle" placeholder="TODO" />
      <TodoList remove={remove} />
    </form>
  );
};

export default TodoCreate;
