import { useCreateMenu } from '../../../api/menus';
import MenuData from '../../../types/menus';
import MenuForm from '../MenuForm';

const MenuCreate = () => {
  const { mutate, isError, isSuccess } = useCreateMenu();

  const handleFormSubmit = (formData: MenuData) => {
    mutate(formData); // 메뉴 생성 요청
  };
  return (
    <div>
      <MenuForm onSubmit={handleFormSubmit} />
      {isError && <p>등록에 실패하였습니다.</p>}
      {isSuccess && <p>등록에 성공하였습니다.</p>}
    </div>
  );
};

export default MenuCreate;
