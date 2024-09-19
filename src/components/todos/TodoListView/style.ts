import styled from 'styled-components';

export const Container = styled.section`
  flex-shrink: 0;
  width: 300px;
  border-right: 1px solid ${({ theme }) => theme.borderGray};
  padding: 2rem 1rem 1rem;
`;

export const Content = styled.p`
  font-size: 0.9rem;
  line-height: 1rem;
  color: ${({ theme }) => theme.textGray};
`;
