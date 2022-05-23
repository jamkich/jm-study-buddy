import { useState, useEffect } from 'react';
import { SearchBarWrapper, StatusInfo, SearchWrapper, SearchResults } from './SearchBar.styles';
import debounce from 'lodash.debounce';
import { Input } from 'components/atoms/Input/Input';
import useStudents from 'hooks/useStudents';

export const SearchBar = () => {
  const [inputValue, setInputValue] = useState('');
  const [matchingStudents, setMatchingStudents] = useState('');
  const { findStudents } = useStudents();

  const getMatchingStudents = debounce(async (e) => {
    const { students } = await findStudents(inputValue);
    setMatchingStudents(students);
  }, 500);

  useEffect(() => {
    if (!inputValue) return;
    getMatchingStudents(inputValue);
  }, [inputValue, getMatchingStudents]);

  return (
    <SearchBarWrapper>
      <StatusInfo>
        <p>Logged as:</p>
        <p>
          <strong>Teacher</strong>
        </p>
      </StatusInfo>

      <SearchWrapper>
        <Input onChange={(e) => setInputValue(e.target.value)} value={inputValue} name="Search" id="Search" />
        {inputValue && matchingStudents.length ? (
          <SearchResults>
            {matchingStudents.map((student) => (
              <li key={student.id}>{student.name}</li>
            ))}
          </SearchResults>
        ) : null}
      </SearchWrapper>
    </SearchBarWrapper>
  );
};
