import { Container, Content } from './style';
import { Button } from '@mui/material';
import TodoData, { RemoveFn } from '../../../types/todos';

type TodoItemProps = {
  todo: TodoData;
  remove: RemoveFn;
};

const TodoListView = ({ todo, remove }: TodoItemProps) => {
  const toggleCompleted = () => {
    remove({ ...todo, completed: !todo.completed });
  };

  return (
    <Container>
      <Content>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={toggleCompleted}
        />
        <span style={{ textDecoration: todo.completed ? 'line-through' : '' }}>
          {todo.title}
        </span>
        <Button onClick={() => remove(todo)}>X</Button>
      </Content>
    </Container>
  );
};

export default TodoListView;
