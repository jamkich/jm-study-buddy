import styled from 'styled-components';
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';
import { Label } from 'components/atoms/Label/Label';
import Title from 'components/atoms/Title/Title';
import { types } from './Notification';

export const Wrapper = styled.div`
  width: 200px;
  height: 100px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 2px;
  border: 1px solid;
  border-top: 10px solid;
  border-color: ${({ theme, type }) => {
    if (type === types.success.type) return theme.colors.success;
    if (type === types.error.type) return theme.colors.error;
    if (type === types.info.type) return theme.colors.info;
    if (type === types.warning.type) return theme.colors.warning;
  }};
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSize.xm};
  position: relative;
  padding: 15px;
`;

export const StyledTitle = styled(Title)`
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme, type }) => {
    if (type === types.success.type) return theme.colors.success;
    if (type === types.error.type) return theme.colors.error;
    if (type === types.info.type) return theme.colors.info;
    if (type === types.warning.type) return theme.colors.warning;
  }};
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
  background-color: ${({ theme, type }) => {
    if (type === 'success') return theme.colors.success;
    if (type === types.error.type) return theme.colors.error;
    if (type === types.info.type) return theme.colors.info;
    if (type === types.warning.type) return theme.colors.warning;
  }};
  width: 25px;
  height: 25px;
  /* border-radius: 7px; */
`;
