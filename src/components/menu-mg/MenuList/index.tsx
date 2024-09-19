import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from '../../common/Table/style';
import { useMenus } from '../../../api/menus';

const MenuList = () => {
  const navigator = useNavigate();
  const menus = useMenus();

  const handleCellClick = (id: string) => {
    navigator(`/menu/detail/${id}`);
  };
  return (
    <div>
      <h1>Menu Management</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>ID</TableHeaderCell>
            <TableHeaderCell>메뉴명</TableHeaderCell>
            <TableHeaderCell>상위메뉴명</TableHeaderCell>
            <TableHeaderCell>URL</TableHeaderCell>
            <TableHeaderCell>차수</TableHeaderCell>
            <TableHeaderCell>사용여부</TableHeaderCell>
            <TableHeaderCell>메뉴 설명</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {menus.isSuccess &&
            menus.data.map((menu) => (
              <TableRow key={menu.id}>
                <TableCell onClick={() => handleCellClick(menu.id)}>
                  {menu.id}
                </TableCell>
                <TableCell onClick={() => handleCellClick(menu.id)}>
                  {menu.name}
                </TableCell>
                <TableCell onClick={() => handleCellClick(menu.id)}>
                  {menu.topMenu}
                </TableCell>
                <TableCell onClick={() => handleCellClick(menu.id)}>
                  {menu.url}
                </TableCell>
                <TableCell onClick={() => handleCellClick(menu.id)}>
                  {menu.order}
                </TableCell>
                <TableCell onClick={() => handleCellClick(menu.id)}>
                  {menu.unable ? '사용' : '미사용'}
                </TableCell>
                <TableCell onClick={() => handleCellClick(menu.id)}>
                  {menu.explain}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <Button
        variant="contained"
        color="primary"
        onClick={() => navigator('/menu/create')}
      >
        Register...
      </Button>
    </div>
  );
};

export default MenuList;
