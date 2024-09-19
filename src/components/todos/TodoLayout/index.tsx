import { Container } from './style';

interface TodoLayoutProps {
  children: React.ReactNode;
}

const TodoLayout = ({ children }: TodoLayoutProps) => {
  return <Container>{children}</Container>;
};

export default TodoLayout;
