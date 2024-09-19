import styled from 'styled-components';

export const Container = styled.section`
  width: calc(100% - 4rem);
  min-height: calc(100vh - 9rem);
  max-width: 1160px;
  margin: 3rem auto 0;
  display: flex;
  background-color: ${({ theme }) => theme.white};
  border-radius: 1rem;
  box-shadow: 0 0 0.5rem 0.3rem rgba(100, 100, 100, 0.1);
`;
