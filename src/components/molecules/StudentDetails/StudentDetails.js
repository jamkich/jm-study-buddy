import React from 'react';
import Title from 'components/atoms/Title/Title';
import { StyledAverage } from '../StudentListItem/StudentListItem.styles';

const StudentDetails = ({ student }) => {
  return (
    <div>
      <Title>
        {student.name} | Group {student.group}
      </Title>
      <p>{student.attendance}</p>
      <StyledAverage value={student.average}>{student.average}</StyledAverage>
    </div>
  );
};

export default StudentDetails;
