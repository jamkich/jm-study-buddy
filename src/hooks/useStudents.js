import axios from 'axios';
import { useCallback } from 'react';

const useStudents = () => {
  const getGroups = useCallback(async () => {
    try {
      const results = await axios.get('/groups');
      return results.data.groups;
    } catch (err) {
      console.error(err);
    }
  }, []);

  const getStudentsById = useCallback(async (studentId) => {
    try {
      const result = await axios.get(`/students/${studentId}`);
      return result.data.students;
    } catch (err) {
      console.error(err);
    }
  }, []);

  const getStudentsByGroup = useCallback(async (groupId) => {
    try {
      const result = await axios.get(`/groups/${groupId}`);
      return result.data.students;
    } catch (err) {
      console.error(err);
    }
  }, []);

  const findStudents = async (inputValue) => {
    try {
      const { data } = await axios.post(`/students/search`, { inputValue });
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  return { getStudentsByGroup, getStudentsById, getGroups, findStudents };
};

export default useStudents;
