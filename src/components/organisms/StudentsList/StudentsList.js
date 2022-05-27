import React, { useEffect, useState } from 'react';
import { StyledList } from './StudentsList.styles';
import StudentListItem from 'components/molecules/StudentListItem/StudentListItem';
import Title from 'components/atoms/Title/Title';
import useStudents from 'hooks/useStudents';
import { useParams } from 'react-router-dom';

const StudentsList = () => {
  const [students, setStudents] = useState([]);
  const { id } = useParams();
  const { getStudents } = useStudents();

  useEffect(() => {
    (async () => {
      const students = await getStudents(id);
      setStudents(students);
    })();
  }, [getStudents, id]);

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
