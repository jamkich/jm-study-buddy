import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useParams, Link } from 'react-router-dom';
import { Wrapper, TitleWrapper, GroupWrapper } from './Dashboard.styles';
import StudentsList from 'components/organisms/StudentsList/StudentsList';
import Title from 'components/atoms/Title/Title';
import useStudents from 'hooks/useStudents';

const Dashboard = () => {
  const [groups, setGroups] = useState([]);
  const { id } = useParams();
  const { getGroups } = useStudents();

  useEffect(() => {
    (async () => {
      const groups = await getGroups();
      setGroups(groups);
    })();
    // eslint-disable-next-line
  }, [getGroups]);

  if (!id && groups > 0) return <Navigate replace to={`/group/${groups[0]}`} />;

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
        <StudentsList />
      </GroupWrapper>
    </Wrapper>
  );
};

export default Dashboard;
