import styled, { keyframes } from 'styled-components';
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';
import { Label } from 'components/atoms/Label/Label';
import Title from 'components/atoms/Title/Title';

const handleColorType = (theme, type) => {
  switch (type) {
    case 'ERROR':
      return theme.colors.error;
    case 'SUCCESS':
      return theme.colors.success;
    case 'INFO':
      return theme.colors.info;
    case 'WARNING':
      return theme.colors.warning;
    default:
      return 'black';
  }
};

const slideAnimation = keyframes`
  from {
    transform: translateY(-200%);
  }
  to {
    transform: translateY(0);
  }
`;

export const Wrapper = styled.div`
  width: 200px;
  height: 100px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 2px;
  border: 1px solid;
  border-top: 10px solid;
  border-color: ${({ theme, type }) => handleColorType(theme, type)};
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSize.xm};
  position: relative;
  padding: 15px;
  position: absolute;
  top: 30px;
  left: 82%;
  animation: ${slideAnimation} 0.5s ease-in-out 1 forwards, ${slideAnimation} 0.5s 8s ease-in-out 1 reverse forwards;
  /* opacity: ${({ isShow }) => (isShow ? 1 : 0)}; */
`;

export const StyledTitle = styled(Title)`
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme, type }) => handleColorType(theme, type)};
  margin-top: -5px;
`;

export const StyledLabel = styled(Label)`
  font-size: 14px;
  padding: 10px;
  font-weight: normal;
  padding: 0;
  margin-top: -5px;
`;

export const CloseButton = styled(DeleteButton)`
  position: absolute;
  top: 5px;
  left: 80%;
  background-color: ${({ theme, type }) => handleColorType(theme, type)};
  width: 25px;
  height: 25px;
  border-radius: 7px;
  /* border-radius: 2px; */
`;
