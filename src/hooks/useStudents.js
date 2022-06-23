import axios from 'axios';
import { useCallback } from 'react';

const studentsAPI = axios.create({});

studentsAPI.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');

    if (token) {
      config.headers.authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  }
);

const useStudents = () => {
  const getGroups = useCallback(async () => {
    try {
      const results = await studentsAPI.get('/groups');
      return results.data.groups;
    } catch (err) {
      console.error(err);
    }
  }, []);

  const getStudentsById = useCallback(async (studentId) => {
    try {
      const result = await studentsAPI.get(`/students/${studentId}`);
      return result.data.students;
    } catch (err) {
      console.error(err);
    }
  }, []);

  const getStudentsByGroup = useCallback(async (groupId) => {
    try {
      const result = await studentsAPI.get(`/groups/${groupId}`);
      return result.data.students;
    } catch (err) {
      console.error(err);
    }
  }, []);

  const findStudents = async (inputValue) => {
    try {
      const { data } = await studentsAPI.post(`/students/search`, { inputValue });
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  return { getStudentsByGroup, getStudentsById, getGroups, findStudents };
};

export default useStudents;
