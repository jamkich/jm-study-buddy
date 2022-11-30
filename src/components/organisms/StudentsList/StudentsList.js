import React from 'react';
import { StyledList } from './StudentsList.styles';
import StudentListItem from 'components/molecules/StudentListItem/StudentListItem';
import Title from 'components/atoms/Title/Title';
import { useParams } from 'react-router-dom';
import { useGetStudentsByGroupQuery } from 'store';
import { useDispatch } from 'react-redux';
import { createNotification } from 'store';

const StudentsList = ({ handleOpenStudentDetails }) => {
  const { id } = useParams();
  const { data, isLoading } = useGetStudentsByGroupQuery({ id });
  const dispatch = useDispatch();

  return (
    <>
      <Title>Students list</Title>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <StyledList>
          {data
            ? data.students.map((userData) => (
                <StudentListItem onClick={() => handleOpenStudentDetails(userData.id)} id={userData.id} key={userData.id} studentData={userData} />
              ))
            : dispatch(createNotification({ type: 'ERROR', message: 'There is no students to display 😢.  Try Again.' }))}
        </StyledList>
      )}
    </>
  );
};

export default StudentsList;
