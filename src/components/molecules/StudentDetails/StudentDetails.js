import React from 'react';
import Title from 'components/atoms/Title/Title';
import { Wrapper, BigAverage, StyledDetails, StyledLabel, StyledInfo, StyledSubjectInfo } from './StudentDetails.styles';
import Average from 'components/atoms/Average/Average';

const StudentDetails = ({ student: { name, average, course, grades } }) => {
  return (
    <Wrapper>
      <BigAverage value={average}>{average}</BigAverage>
      <Title isBig>{name}</Title>
      <StyledDetails>
        <StyledLabel>Course:</StyledLabel>
        <StyledInfo isBig>{course}</StyledInfo>
        <StyledLabel>Average grades:</StyledLabel>
        {grades.map(({ subject, grade }) => (
          <StyledSubjectInfo key={subject}>
            <StyledInfo>{subject}</StyledInfo>
            <Average value={grade}>{grade}</Average>
          </StyledSubjectInfo>
        ))}
      </StyledDetails>
    </Wrapper>
  );
};

export default StudentDetails;
