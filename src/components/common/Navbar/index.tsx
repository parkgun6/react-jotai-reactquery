import { useState } from 'react';
import {
  DetailMenu,
  DetailMenuItem,
  DetailMenuList,
  Nav,
  NavContainer,
  NavItem,
  Title,
  Wrapper,
} from './style';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [showAllMenus, setShowAllMenus] = useState(false);

  const handleMouseEnter = () => {
    setShowAllMenus(true);
  };

  const handleMouseLeave = () => {
    setShowAllMenus(false);
  };

  const navigator = useNavigate();

  return (
    <>
      <Wrapper>
        <Title>지갑</Title>
        <Nav onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <NavContainer expanded={showAllMenus}>
            <NavItem active={showAllMenus}>
              <p>시스템관리</p>
            </NavItem>
            <NavItem active={showAllMenus}>
              <p>고객센터관리</p>
            </NavItem>
            <NavItem active={showAllMenus}>
              <p>서비스관리</p>
            </NavItem>
            <NavItem active={showAllMenus}>
              <p>현황 및 통계</p>
            </NavItem>
          </NavContainer>
          <DetailMenu show={showAllMenus}>
            <DetailMenuList>
              <DetailMenuItem onClick={() => navigator('/menu/list')}>
                메뉴관리
              </DetailMenuItem>
              <DetailMenuItem onClick={() => navigator('/user-mg')}>
                사용자관리
              </DetailMenuItem>
              <DetailMenuItem onClick={() => navigator('/auth-mg')}>
                권한관리
              </DetailMenuItem>
            </DetailMenuList>
            <DetailMenuList>
              <DetailMenuItem onClick={() => navigator('/notice')}>
                공지사항
              </DetailMenuItem>
              <DetailMenuItem onClick={() => navigator('/faq')}>
                FAQ관리
              </DetailMenuItem>
            </DetailMenuList>
            <DetailMenuList>
              <DetailMenuItem onClick={() => navigator('/provider-mg')}>
                제공기관관리
              </DetailMenuItem>
              <DetailMenuItem onClick={() => navigator('/organization-mg')}>
                이용기관관리
              </DetailMenuItem>
            </DetailMenuList>
            <DetailMenuList>
              <DetailMenuItem onClick={() => navigator('/contents-his')}>
                콘텐츠사용이력
              </DetailMenuItem>
              <DetailMenuItem onClick={() => navigator('/contents-state')}>
                콘텐츠 통계 및 집계
              </DetailMenuItem>
            </DetailMenuList>
          </DetailMenu>
        </Nav>
      </Wrapper>
    </>
  );
};

export default Navbar;
