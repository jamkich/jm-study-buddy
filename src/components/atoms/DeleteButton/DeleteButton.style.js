import styled from 'styled-components';

export const StyledButton = styled.button`
  width: 22px;
  height: 22px;
  margin: 0 10px;
  background-color: ${({ theme }) => theme.colors.darkDetail};
  border-radius: 50px;
  border: none;
  color: ${({ theme }) => theme.colors.black};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  svg {
    width: 100%;
    height: 100%;
  }

  transition: transform 0.3s;

  &:hover {
    transform: ${({ isClicked }) => (isClicked ? 'scale(0.8)' : 'scale(1.2)')};
  }
`;
