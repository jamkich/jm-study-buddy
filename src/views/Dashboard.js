import React from 'react';
import { Navigate } from 'react-router-dom';
import { useParams, Link } from 'react-router-dom';
import { Wrapper, TitleWrapper, GroupWrapper } from './Dashboard.styles';
import StudentsList from 'components/organisms/StudentsList/StudentsList';
import Title from 'components/atoms/Title/Title';
import { useDispatch } from 'react-redux';
import { useGetGroupsQuery, useGetStudentsByIdMutation, openModal, setStudentData } from 'store';

const Dashboard = () => {
  const { id } = useParams();

  const { data, isLoading } = useGetGroupsQuery();
  const [getStudentsById] = useGetStudentsByIdMutation();
  const dispatch = useDispatch();

  const handleOpenStudentDetails = async (studentId) => {
    const {
      data: { student },
    } = await getStudentsById(studentId);
    dispatch(setStudentData(student));
    dispatch(openModal());
  };

  if (isLoading) {
    return (
      <Wrapper>
        <TitleWrapper>Loading...</TitleWrapper>
      </Wrapper>
    );
  }

  if (!id && data.groups.length > 0) return <Navigate replace to={`/group/${data.groups[0].id}`} />;

  return (
    <Wrapper>
      <TitleWrapper>
        <Title as="h2">Groups: {id}</Title>
        <nav>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            data.groups.map((group) => (
              <Link key={group.id} to={`/group/${group.id}`}>
                {group.id}{' '}
              </Link>
            ))
          )}
        </nav>
      </TitleWrapper>
      <GroupWrapper>
        <StudentsList handleOpenStudentDetails={handleOpenStudentDetails} />
      </GroupWrapper>
    </Wrapper>
  );
};

export default Dashboard;
