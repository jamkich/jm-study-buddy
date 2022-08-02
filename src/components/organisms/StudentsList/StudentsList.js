import React from 'react';
import { StyledList } from './StudentsList.styles';
import StudentListItem from 'components/molecules/StudentListItem/StudentListItem';
import Title from 'components/atoms/Title/Title';
import { useParams } from 'react-router-dom';
import { useError } from 'hooks/useError';
import { useGetStudentsByGroupQuery } from 'store';

const StudentsList = ({ handleOpenStudentDetails }) => {
  const { id } = useParams();
  const { data, isLoading } = useGetStudentsByGroupQuery({ id });
  const { error, dispatchError } = useError();

  return (
    <>
      <Title>Students list</Title>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <StyledList>
          {!error
            ? data.students.map((userData) => (
                <StudentListItem onClick={() => handleOpenStudentDetails(userData.id)} key={userData.id} studentData={userData} />
              ))
            : dispatchError(error)}
        </StyledList>
      )}
    </>
  );
};

export default StudentsList;
