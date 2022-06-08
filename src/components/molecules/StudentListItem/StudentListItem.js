import React from 'react';
import PropTypes from 'prop-types';
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';
import { StyledInfo, Wrapper } from './StudentListItem.styles';
import { UserShape } from 'types';
import Average from 'components/atoms/Average/Average';

const StudentListItem = ({ studentData: { average, name, attendance = '0%' }, ...props }) => {
  return (
    <Wrapper {...props}>
      <Average value={average}>{average}</Average>
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
