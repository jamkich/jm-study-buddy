import { useEffect, useState } from 'react';
import { SearchBarWrapper, StatusInfo, SearchWrapper, SearchResults, SearchResultsItem } from './SearchBar.styles';
import { useCombobox } from 'downshift';
import debounce from 'lodash.debounce';
import { Input } from 'components/atoms/Input/Input';
import { useFindStudentsMutation } from 'store';

/* 
TODO
- use rtk to make search bar working ✅
- check all components looking for bugs/things to refactor 😝
- make some tests
other stuff.. we will see

*/
export const SearchBar = () => {
  const [matchingStudents, setMatchingStudents] = useState([]);
  const [findStudents] = useFindStudentsMutation();

  const getMatchingStudents = debounce(async (inputValue) => {
    const {
      data: { students },
    } = await findStudents(inputValue);
    setMatchingStudents(students);
  }, 500);

  const { isOpen, getMenuProps, getInputProps, getComboboxProps, highlightedIndex, getItemProps } = useCombobox({
    items: matchingStudents,
    onInputValueChange: getMatchingStudents,
  });

  return (
    <SearchBarWrapper>
      <StatusInfo>
        <p>Logged as:</p>
        <p>
          <strong>Teacher</strong>
        </p>
      </StatusInfo>

      <SearchWrapper {...getComboboxProps()}>
        <Input {...getInputProps()} name="Search" id="Search" placeholder="Search" />
        <SearchResults isVisible={isOpen && matchingStudents.length} {...getMenuProps()} aria-label="results">
          {isOpen &&
            matchingStudents.map((item, index) => (
              <SearchResultsItem {...getItemProps({ item, index })} key={item.id} isHighlighted={highlightedIndex === index}>
                {item.name}
              </SearchResultsItem>
            ))}
        </SearchResults>
      </SearchWrapper>
    </SearchBarWrapper>
  );
};
