import styled from 'styled-components';

const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.colors.text};
`;

export default Title;
