import React from 'react';
import { StyledList } from './StudentsList.styles';
import StudentListItem from 'components/molecules/StudentListItem/StudentListItem';
import Title from 'components/atoms/Title/Title';
import useStudents from 'hooks/useStudents';
import { useParams } from 'react-router-dom';

const StudentsList = () => {
  const { id } = useParams();
  const { students } = useStudents({ groupId: id });

  return (
    <>
      <Title>Students list</Title>
      <StyledList>
        {students.map((userData) => (
          <StudentListItem key={userData.id} studentData={userData} />
        ))}
      </StyledList>
    </>
  );
};

export default StudentsList;
