import styled from 'styled-components';

export const Input = styled.input`
  padding: 10px 12px;
  border: 1px solid ${({ theme }) => theme.colors.darkDetail};
  box-sizing: border-box;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  border-radius: ${({ isTextarea }) => (isTextarea ? '15px' : '25px')};
  font-size: ${({ theme }) => theme.fontSize.l};
  resize: none;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};

  &:focus {
    outline: none;
    box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.3);
  }
`;
