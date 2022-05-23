import { useState, useEffect } from 'react';
import axios from 'axios';

const useStudents = ({ groupId = '' } = {}) => {
  const [students, setStudents] = useState([]);
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const results = await axios.get('/groups');
        setGroups(results.data.groups);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  useEffect(() => {
    if (!groupId) return;
    (async () => {
      try {
        const result = await axios.get(`/students/${groupId}`);
        setStudents(result.data.students);
      } catch (err) {
        console.error(err);
      }
    })();
  }, [groupId]);

  const findStudents = async (inputValue) => {
    try {
      const { data } = await axios.post(`/students/search`, { inputValue });
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  return { students, groups, findStudents };
};

export default useStudents;
