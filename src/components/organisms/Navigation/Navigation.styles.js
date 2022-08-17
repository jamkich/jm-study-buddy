import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-right: 1px solid ${({ theme }) => theme.colors.darkPurple};
  justify-content: flex-start;
  padding: 30px 0;
  grid-row: 1 / 3;
  grid-column: 1 / 1;
`;

export const Logo = styled.div`
  width: 100%;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.darkGrey};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 30px;

  h1 {
    font-size: 15px;
    color: ${({ theme }) => theme.colors.white};
    text-align: right;
    margin-right: 20px;
  }
`;

export const StyledLink = styled(NavLink)`
  font-weight: bold;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.darkGrey};
  text-align: right;
  margin: 15px 20px 15px auto;
  position: relative;
  cursor: pointer;
  display: flex;
  flex-flow: column nowrap;

  &::after {
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
    content: '';
    position: absolute;
    width: 18px;
    height: 3px;
    top: 50%;
    transform: translateY(-50%);
    right: -20px;
    background-color: ${({ theme }) => theme.colors.darkPurple};
  }

  &.active::after {
    opacity: 1;
  }

  &:last-child {
    text-align: right;
    display: flex;
    width: 100%;
    height: 60px;
    margin-top: auto;
    background-color: ${({ theme }) => theme.colors.error};

    p {
      margin-right: 20px;
      color: ${({ theme }) => theme.colors.white};
      margin-top: 15px;
    }
  }
`;
