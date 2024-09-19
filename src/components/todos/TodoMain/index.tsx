import memoImage from '../../../assets/image.png';
import TodoCreate from '../TodoCreate';
import { Container, Title, Img } from './style';

const TodoMain = () => {
  return (
    <Container>
      <Title>새로운 할일을 추가하고 관리하세요!</Title>
      <Img src={memoImage} alt="메모 이미지" />
      <TodoCreate />
    </Container>
  );
};

export default TodoMain;
