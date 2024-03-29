import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';
import { StyledInfo, Wrapper } from './StudentListItem.styles';
import { UserShape } from 'types';
import Average from 'components/atoms/Average/Average';
import { groupsApi, createNotification, useRemoveStudentMutation } from 'store';
import { useDispatch } from 'react-redux';

const StudentListItem = ({ id, studentData: { average, name, attendance = '0%' }, ...props }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [removeStudent] = useRemoveStudentMutation();
  const dispatch = useDispatch();

  const handleRemoveStudent = async (e) => {
    e.stopPropagation();
    await removeStudent({ id: id });
    await dispatch(createNotification({ type: 'SUCCESS', message: 'User has been succesfully deleted.' }));
    dispatch(groupsApi.util.invalidateTags(['Students']));
  };
  return (
    <Wrapper {...props}>
      <Average value={average}>{average}</Average>
      <StyledInfo>
        <p>
          {name}
          <DeleteButton
            aria-label="Delete"
            onClick={(e) => {
              handleRemoveStudent(e);
              setIsClicked(true);
            }}
            isClicked={isClicked}
          />
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
