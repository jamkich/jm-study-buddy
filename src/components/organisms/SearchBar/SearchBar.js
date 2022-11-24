import { useState } from 'react';
import { SearchBarWrapper, StatusInfo, SearchWrapper, SearchResults, SearchResultsItem } from './SearchBar.styles';
import { useCombobox } from 'downshift';
import debounce from 'lodash.debounce';
import { Input } from 'components/atoms/Input/Input';
import { useFindStudentsMutation, openModal, setStudentData } from 'store';
import { useDispatch } from 'react-redux';

export const SearchBar = () => {
  const [matchingStudents, setMatchingStudents] = useState([]);
  const [findStudents] = useFindStudentsMutation();
  const dispatch = useDispatch();

  const wait = (amount = 0) => new Promise((resolve) => setTimeout(resolve, amount));

  const getMatchingStudents = debounce(async (inputValue) => {
    const {
      data: { students },
    } = await findStudents(inputValue);
    setMatchingStudents(students);
  }, 500);

  const { isOpen, getMenuProps, getInputProps, getComboboxProps, highlightedIndex, getItemProps, selectedItem, setInputValue } = useCombobox({
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
                onClick={async () => {
                  dispatch(setStudentData(item));
                  // modal is overwriting input with [object object] BUG
                  // DONE used setTimeout with min. delay to make it work like should
                  dispatch(openModal());
                  wait();
                  setInputValue('');
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
