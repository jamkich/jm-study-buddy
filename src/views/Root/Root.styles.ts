import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
