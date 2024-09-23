import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Button,
  SelectChangeEvent,
} from '@mui/material';
import MenuData from '../../../types/menus';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface MenuFormProps {
  menuData?: MenuData; // 전달할 데이터의 타입을 정의
  onSubmit: (formData: MenuData) => void; // 이벤트 핸들러 타입 정의
}

const MenuForm: React.FC<MenuFormProps> = ({ menuData, onSubmit }) => {
  const [formState, setFormState] = useState<MenuData>(
    menuData || {
      id: '',
      topMenu: '',
      name: '',
      url: '',
      order: 0,
      unable: false,
      explain: '',
    },
  );

  useEffect(() => {
    if (menuData) setFormState(menuData);
  }, [menuData]);

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | SelectChangeEvent,
  ) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: name === 'order' ? Number(value) : value,
    });
  };
  const navigator = useNavigate();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formState);
    navigator(`/menu/list`);
  };

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        메뉴 생성 폼
      </Typography>
      <form onSubmit={handleSubmit}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>
                <TextField
                  fullWidth
                  label="ID"
                  name="id"
                  value={formState.id}
                  variant="outlined"
                  onChange={handleChange} // onChange 추가
                />
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>상위메뉴명</TableCell>
              <TableCell>
                <TextField
                  fullWidth
                  label="상위메뉴명"
                  name="topMenu"
                  value={formState.topMenu}
                  variant="outlined"
                  onChange={handleChange} // onChange 추가
                />
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>메뉴명</TableCell>
              <TableCell>
                <TextField
                  fullWidth
                  label="메뉴명"
                  name="name"
                  value={formState.name}
                  variant="outlined"
                  onChange={handleChange} // onChange 추가
                />
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>메뉴 URL</TableCell>
              <TableCell>
                <TextField
                  fullWidth
                  label="메뉴 URL"
                  name="url"
                  value={formState.url}
                  variant="outlined"
                  onChange={handleChange} // onChange 추가
                />
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>정렬순서</TableCell>
              <TableCell>
                <TextField
                  fullWidth
                  label="정렬순서"
                  name="order"
                  type="number"
                  value={formState.order}
                  variant="outlined"
                  onChange={handleChange} // onChange 추가
                />
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>사용여부</TableCell>
              <TableCell>
                <FormControl fullWidth>
                  <InputLabel>사용여부</InputLabel>
                  <Select
                    name="unable"
                    value={formState.unable ? 'true' : 'false'}
                    onChange={handleChange} // onChange 추가
                  >
                    <MenuItem value="true">사용</MenuItem>
                    <MenuItem value="false">미사용</MenuItem>
                  </Select>
                </FormControl>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>메뉴설명</TableCell>
              <TableCell>
                <TextField
                  fullWidth
                  label="메뉴설명"
                  name="explain"
                  value={formState.explain}
                  variant="outlined"
                  multiline
                  rows={4}
                  onChange={handleChange} // onChange 추가
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  등록
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </form>
    </div>
  );
};

export default MenuForm;
