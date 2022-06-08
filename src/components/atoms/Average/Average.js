import styled from 'styled-components';

const Average = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;

  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.s};
  background-color: ${({ theme, value }) => {
    if (value >= 4) return theme.colors.success;
    if (value >= 3) return theme.colors.warning;
    if (value >= 2) return theme.colors.error;
    return theme.colors.grey;
  }};
`;

export default Average;
