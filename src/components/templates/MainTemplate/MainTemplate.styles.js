import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: scroll;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 150px 1fr;
  background-color: ${({ theme }) => theme.colors.lightGrey};
`;

export default Wrapper;
