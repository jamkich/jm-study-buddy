import { useState } from 'react';
import { SearchBarWrapper, StatusInfo, SearchWrapper, SearchResults, SearchResultsItem } from './SearchBar.styles';
import { useCombobox } from 'downshift';
import debounce from 'lodash.debounce';
import { Input } from 'components/atoms/Input/Input';
import { useFindStudentsMutation } from 'store';
import { useDispatch } from 'react-redux';
import { openModal } from 'store';
import { setStudentData } from 'store';

/* 
TODO
- use rtk to make search bar working ✅ 
- make modal working with searchBar ✅
- looking for bugs/things to refactor 😝  HALF ✅
- make some tests TODO
- adding/removing users
other stuff.. we will see

*/
export const SearchBar = () => {
  const [matchingStudents, setMatchingStudents] = useState([]);
  const [findStudents] = useFindStudentsMutation();
  const dispatch = useDispatch();

  const getMatchingStudents = debounce(async (inputValue) => {
    const {
      data: { students },
    } = await findStudents(inputValue);
    setMatchingStudents(students);
  }, 500);

  const { isOpen, getMenuProps, getInputProps, getComboboxProps, highlightedIndex, getItemProps, selectedItem } = useCombobox({
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
              <SearchResultsItem
                {...getItemProps({ item, index })}
                key={item.id}
                isHighlighted={highlightedIndex === index}
                selectedItem={selectedItem === item}
                onClick={() => {
                  dispatch(setStudentData(item));
                  dispatch(openModal());
                }}
              >
                {item.name}
              </SearchResultsItem>
            ))}
        </SearchResults>
      </SearchWrapper>
    </SearchBarWrapper>
  );
};
