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

const mockStudent = {
  id: '1',
  name: 'Adam Romański',
  attendance: '39%',
  average: '2.3',
  group: 'A',
  course: 'Economy and finances',
  grades: [
    {
      subject: 'Modern Economy',
      grade: '3.4',
    },
    {
      subject: 'Trade and Logistics',
      grade: '4.1',
    },
    {
      subject: 'Business Philosophy',
      grade: '5.0',
    },
  ],
};

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

  if (!id && groups.length > 0) return <Navigate replace to={`/group/${groups[0]}`} />;

  return (
    <Wrapper>
      <TitleWrapper>
        <Title as="h2">Groups: {id}</Title>
        <nav>
          {groups.map((group) => (
            <Link key={group} to={`/group/${group}`}>
              {group}{' '}
            </Link>
          ))}
        </nav>
      </TitleWrapper>
      <GroupWrapper>
        <StudentsList handleOpenStudentDetails={handleOpenStudentDetails} />
        {isOpen ? (
          <Modal handleClose={handleCloseModal}>
            <StudentDetails student={mockStudent} />
          </Modal>
        ) : null}
      </GroupWrapper>
    </Wrapper>
  );
};

export default Dashboard;
