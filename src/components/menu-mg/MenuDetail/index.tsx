import { useParams } from 'react-router-dom';
import MenuForm from '../MenuForm';
import { useAtom } from 'jotai';
import { menuAtom } from '../../../atoms/atoms';
import { useEffect } from 'react';
import { Button, TableRow } from '@mui/material';
import { useDeleteMenu, useEditMenu, useMenu } from '../../../api/menus';
import MenuData from '../../../types/menus';

const MenuDetail = () => {
  const { id } = useParams();
  const { data, error } = useMenu();
  const [, setMenu] = useAtom(menuAtom);
  useEffect(() => {
    if (data) {
      setMenu(data);
    }
  }, [data, setMenu]);
  const { mutate: mutateDelete } = useDeleteMenu();
  const { mutate: mutateEdit } = useEditMenu();

  const handleFormSubmit = (formData: MenuData) => {
    mutateEdit({ menuData: formData, id: Number(id) });
  };
  const deleteMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    mutateDelete(Number(id));
  };
  return (
    <>
      {/* 제출 버튼 */}
      {data && (
        <TableRow>
          <MenuForm menuData={data} onSubmit={handleFormSubmit} />
          <Button
            variant="contained"
            color="warning"
            fullWidth
            onClick={deleteMenu}
          >
            삭제
          </Button>
        </TableRow>
      )}
      {error && <p>조회에 실패하였습니다.</p>}
    </>
  );
};

export default MenuDetail;
