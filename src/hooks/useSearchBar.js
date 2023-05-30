import { useCombobox } from 'downshift';
import debounce from 'lodash.debounce';
import { useDispatch } from 'react-redux';
import { useFindStudentsMutation, openModal, setStudentData } from 'store';
import { useState } from 'react';

export const useSearchBar = () => {
  const [matchingStudents, setMatchingStudents] = useState([]);
  const [findStudents] = useFindStudentsMutation();
  const dispatch = useDispatch();

  const getMatchingStudents = debounce(async (inputChange) => {
    if (inputChange.inputValue) {
      // TODO
      // implement stateReducer to handle input
      // console.log(inputChange);
      const {
        data: { students },
      } = await findStudents(inputChange);
      setMatchingStudents(students);
    }
  }, 500);

  const { isOpen, getMenuProps, getInputProps, highlightedIndex, getItemProps, selectedItem, setInputValue } = useCombobox({
    items: matchingStudents,
    onInputValueChange: getMatchingStudents,
  });

  const handleActions = async (data) => {
    if (data) {
      dispatch(setStudentData(data));
      await dispatch(openModal());
      setInputValue('');
      return '';
    }

    return 'No data to use.';
  };
  return { isOpen, getMenuProps, getInputProps, highlightedIndex, getItemProps, selectedItem, handleActions, matchingStudents };
};
