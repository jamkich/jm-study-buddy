import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useParams, Link } from 'react-router-dom';
import { Wrapper, TitleWrapper, GroupWrapper } from './Dashboard.styles';
import StudentsList from 'components/organisms/StudentsList/StudentsList';
import Title from 'components/atoms/Title/Title';
import { useModal } from 'hooks/useModal';
import StudentDetails from 'components/molecules/StudentDetails/StudentDetails';
import Modal from 'components/organisms/Modal/Modal';
import { useGetGroupsQuery, useGetStudentsByIdMutation } from 'store';

const Dashboard = () => {
  const { id } = useParams();
  const [currentStudent, setCurrentStudent] = useState([]);
  // const { isOpen, handleOpenModal, handleCloseModal } = useModal();
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();
  const { data, isLoading } = useGetGroupsQuery();
  const [getStudentsById] = useGetStudentsByIdMutation();

  const handleOpenStudentDetails = async (studentId) => {
    const {
      data: { student },
    } = await getStudentsById(studentId);
    setCurrentStudent(student);
    handleOpenModal();
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
        <Modal isOpen={isOpen} handleClose={handleCloseModal}>
          <StudentDetails student={currentStudent} />
        </Modal>
      </GroupWrapper>
    </Wrapper>
  );
};

export default Dashboard;
