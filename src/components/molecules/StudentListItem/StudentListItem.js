import React from 'react';
import PropTypes from 'prop-types';
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';
import { StyledInfo, Wrapper } from './StudentListItem.styles';
import { UserShape } from 'types';
import Average from 'components/atoms/Average/Average';
import { useDispatch } from 'react-redux';
import { useRemoveStudentMutation } from 'store';

const StudentListItem = ({ id, studentData: { average, name, attendance = '0%' }, ...props }) => {
  const dispatch = useDispatch();
  const [removeStudent] = useRemoveStudentMutation();

  const handleRemoveStudent = (e) => {
    e.stopPropagation();
    dispatch(removeStudent({ id: id }));
  };

  return (
    <Wrapper {...props}>
      <Average value={average}>{average}</Average>
      <StyledInfo>
        <p>
          {name}
          <DeleteButton aria-label="Delete" onClick={handleRemoveStudent} />
        </p>
        <p>attendance: {attendance}%</p>
      </StyledInfo>
    </Wrapper>
  );
};

StudentListItem.propTypes = {
  studentData: PropTypes.shape(UserShape),
};

export default StudentListItem;
