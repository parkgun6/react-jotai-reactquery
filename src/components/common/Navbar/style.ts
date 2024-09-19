import styled from 'styled-components';
interface NavContainerProps {
  expanded: boolean;
}

interface NavItemProps {
  active: boolean;
}

interface DetailMenuProps {
  show: boolean;
}

export const Wrapper = styled.nav`
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.white};
  box-shadow: 0 0 0.5rem 0 rgba(100, 100, 100, 0.3);
  padding: 1rem 2rem;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  width: 250px;
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const NavContainer = styled.ul<NavContainerProps>`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  height: ${(props) => (props.expanded ? '200px' : '80px')};
  overflow: hidden;
  transition: height 0.25s ease-in-out;
`;

export const NavItem = styled.li<NavItemProps>`
  width: 200px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 19px;
  font-weight: 600;
  color: rgb(3, 51, 90);
  cursor: pointer;

  p {
    margin: 0;
  }
`;

export const DetailMenu = styled.div<DetailMenuProps>`
  position: absolute;
  top: 80px; // Adjust this value if needed
  left: 0;
  display: ${(props) => (props.show ? 'flex' : 'none')};
  width: 100%;
  height: auto;
  z-index: 1;
`;

export const DetailMenuList = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
`;

export const DetailMenuItem = styled.div`
  text-align: center;
  margin-bottom: 10px;
  color: rgb(7, 7, 105);
  font-weight: 600;
  padding: 5px;
  cursor: pointer;

  &:hover {
    background-color: rgb(198, 198, 241);
  }
`;
