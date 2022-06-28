import React, { useEffect, useState } from 'react';
import { StyledList } from './StudentsList.styles';
import StudentListItem from 'components/molecules/StudentListItem/StudentListItem';
import Title from 'components/atoms/Title/Title';
import useStudents from 'hooks/useStudents';
import { useParams } from 'react-router-dom';
import { useError } from 'hooks/useError';
import ErrorMessage from 'components/molecules/ErrorMessage/ErrorMessage';

const StudentsList = ({ handleOpenStudentDetails }) => {
  const [students, setStudents] = useState([]);
  const { id } = useParams();
  const { getStudentsByGroup } = useStudents();
  const { error, dispatchError } = useError();
  useEffect(() => {
    (async () => {
      const students = await getStudentsByGroup(id);
      if (!students.length) dispatchError('There is no students to display! Try again.');
      setStudents(students);
    })();
  }, [getStudentsByGroup, id, dispatchError]);

  return (
    <>
      <Title>Students list</Title>
      <StyledList>
        {!error ? (
          students.map((userData) => (
            <StudentListItem onClick={() => handleOpenStudentDetails(userData.id)} key={userData.id} studentData={userData} />
          ))
        ) : (
          <ErrorMessage message={error} />
        )}
      </StyledList>
    </>
  );
};

export default StudentsList;
