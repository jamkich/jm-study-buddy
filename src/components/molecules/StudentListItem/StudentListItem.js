import React from 'react';
import PropTypes from 'prop-types';
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';
import { StyledInfo, Wrapper } from './StudentListItem.styles';
import { UserShape } from 'types';
import Average from 'components/atoms/Average/Average';
import { useRemoveStudentMutation } from 'store';
import { groupsApi } from 'store';
import { useDispatch } from 'react-redux';
import { createNotification } from 'store';

const StudentListItem = ({ id, studentData: { average, name, attendance = '0%' }, ...props }) => {
  const [removeStudent] = useRemoveStudentMutation();
  const dispatch = useDispatch();

  const handleRemoveStudent = async (e) => {
    e.stopPropagation();
    await removeStudent({ id: id });
    dispatch(createNotification({ type: 'success', message: 'User has been succesfully deleted.' }));
    dispatch(groupsApi.util.invalidateTags(['Students']));
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
