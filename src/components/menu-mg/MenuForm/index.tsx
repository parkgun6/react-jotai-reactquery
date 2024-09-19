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
} from '@mui/material';
import MenuData from '../../../types/menus';
import { useRef } from 'react';

interface MenuFormProps {
  menuData?: MenuData; // 전달할 데이터의 타입을 정의
  onSubmit: (formData: MenuData) => void; // 이벤트 핸들러 타입 정의
}

const MenuForm: React.FC<MenuFormProps> = ({ menuData, onSubmit }) => {
  // useRef로 각 입력 필드 값을 추적
  const idRef = useRef<HTMLInputElement>(null);
  const topMenuRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const urlRef = useRef<HTMLInputElement>(null);
  const orderRef = useRef<HTMLInputElement>(null);
  const unableRef = useRef<HTMLSelectElement>(null);
  const explainRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 폼 제출 시에만 formData를 설정
    const formData: MenuData = {
      id: idRef.current?.value || '',
      topMenu: topMenuRef.current?.value || '',
      name: nameRef.current?.value || '',
      url: urlRef.current?.value || '',
      order: Number(orderRef.current?.value) || 0,
      unable: unableRef.current?.value === 'true', // 사용 여부는 true/false로 처리
      explain: explainRef.current?.value || '',
    };

    onSubmit(formData); // 상위 컴포넌트로 데이터 전달
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
                  inputRef={idRef}
                  fullWidth
                  label="ID"
                  name="ID"
                  value={menuData && menuData.id}
                  variant="outlined"
                />
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>상위메뉴명</TableCell>
              <TableCell>
                <TextField
                  inputRef={topMenuRef}
                  fullWidth
                  label="상위메뉴명"
                  name="parentMenuName"
                  value={menuData && menuData.topMenu}
                  variant="outlined"
                />
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>메뉴명</TableCell>
              <TableCell>
                <TextField
                  inputRef={nameRef}
                  fullWidth
                  label="메뉴명"
                  name="menuName"
                  value={menuData && menuData.name}
                  variant="outlined"
                />
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>메뉴 URL</TableCell>
              <TableCell>
                <TextField
                  inputRef={urlRef}
                  fullWidth
                  label="메뉴 URL"
                  name="menuUrl"
                  value={menuData && menuData.url}
                  variant="outlined"
                />
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>정렬순서</TableCell>
              <TableCell>
                <TextField
                  inputRef={orderRef}
                  fullWidth
                  label="정렬순서"
                  name="order"
                  type="number"
                  value={menuData && menuData.order}
                  variant="outlined"
                />
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>사용여부</TableCell>
              <TableCell>
                <FormControl fullWidth>
                  <InputLabel>사용여부</InputLabel>
                  <Select
                    inputRef={unableRef}
                    name="isActive"
                    value={menuData && menuData.unable}
                    label="사용여부"
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
                  inputRef={explainRef}
                  fullWidth
                  label="메뉴설명"
                  name="description"
                  value={menuData && menuData.explain}
                  variant="outlined"
                  multiline
                  rows={4}
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
