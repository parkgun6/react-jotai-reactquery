import { atom, useAtom } from 'jotai';
import TodoData, { RemoveFn } from '../../../types/todos';
import TodoListView from '../TodoListView';
import { filterAtom, todosAtom } from '../../../atoms/atoms';

// 필터링된 todos를 반환하는 atom
const filteredAtom = atom<TodoData[]>((get) => {
  const filter = get(filterAtom);
  const todos = get(todosAtom);
  if (filter === 'all') return todos;
  else if (filter === 'completed')
    return todos.filter((todo) => todo.completed);
  else return todos.filter((todo) => !todo.completed);
});

type FilteredType = {
  remove: RemoveFn;
};

const TodoList = (props: FilteredType) => {
  const [todos] = useAtom(filteredAtom);
  return (
    <div>
      {todos.map((todo) => (
        <TodoListView key={todo.title} todo={todo} remove={props.remove} />
      ))}
    </div>
  );
};

export default TodoList;
