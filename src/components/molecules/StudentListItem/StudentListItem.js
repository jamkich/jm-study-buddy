import React from 'react';
import PropTypes from 'prop-types';
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';
import { StyledAverage, StyledInfo, Wrapper } from './StudentListItem.styles';
import { UserShape } from 'types';

const StudentListItem = ({ studentData: { average, name, attendance = '0%' }, ...props }) => {
  return (
    <Wrapper {...props}>
      <StyledAverage value={average}>{average}</StyledAverage>
      <StyledInfo>
        <p>
          {name}
          <DeleteButton />
        </p>
        <p>attendance: {attendance}</p>
      </StyledInfo>
    </Wrapper>
  );
};

StudentListItem.propTypes = {
  studentData: PropTypes.shape(UserShape),
};

export default StudentListItem;
