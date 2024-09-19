import { Radio } from 'antd';
import { useAtom } from 'jotai';
import { filterAtom } from '../../../atoms/atoms';

const TodoFilter = () => {
  const [filter, setFilter] = useAtom(filterAtom);
  return (
    <Radio.Group onChange={(e) => setFilter(e.target.value)} value={filter}>
      <Radio value="all">All</Radio>
      <Radio value="completed">Completed</Radio>
      <Radio value="incompleted">Incompleted</Radio>
    </Radio.Group>
  );
};

export default TodoFilter;
