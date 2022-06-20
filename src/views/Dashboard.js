import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useParams, Link } from 'react-router-dom';
import { Wrapper, TitleWrapper, GroupWrapper } from './Dashboard.styles';
import StudentsList from 'components/organisms/StudentsList/StudentsList';
import Title from 'components/atoms/Title/Title';
import useStudents from 'hooks/useStudents';
import useModal from 'components/organisms/Modal/useModal';
import StudentDetails from 'components/molecules/StudentDetails/StudentDetails';
import Modal from 'components/organisms/Modal/Modal';

const Dashboard = () => {
  const [groups, setGroups] = useState([]);
  const [currentStudent, setCurrentStudent] = useState([]);
  const { id } = useParams();
  const { getGroups, getStudentsById } = useStudents();
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();

  useEffect(() => {
    (async () => {
      const groups = await getGroups();
      setGroups(groups);
    })();
  }, [getGroups]);

  const handleOpenStudentDetails = async (id) => {
    const student = await getStudentsById(id);
    setCurrentStudent(student);
    handleOpenModal();
  };
  if (!id && groups.length > 0) return <Navigate replace to={`/group/${groups[0].id}`} />;

  return (
    <Wrapper>
      <TitleWrapper>
        <Title as="h2">Groups: {id}</Title>
        <nav>
          {groups.map((group) => (
            <Link key={group.id} to={`/group/${group.id}`}>
              {group.id}{' '}
            </Link>
          ))}
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
