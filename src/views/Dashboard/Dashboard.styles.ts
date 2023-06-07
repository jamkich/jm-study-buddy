import styled from 'styled-components';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px 50px;
`;

export const GroupWrapper = styled(ViewWrapper)`
  margin: 0;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;

  nav a {
    margin-left: 15px;
    text-decoration: none;
    background-color: ${({ theme }) => theme.colors.white};
    display: inline-block;
    border-radius: 50px;
    width: 30px;
    height: 30px;
    text-align: center;
    padding: 5px;
    color: ${({ theme }) => theme.colors.text};
    font-weight: bold;
  }

  nav a:hover {
    background-color: ${({ theme }) => theme.colors.lightDetail};
  }
`;
