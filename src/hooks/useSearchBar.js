import { useCombobox } from 'downshift';
import debounce from 'lodash.debounce';
import { useDispatch } from 'react-redux';
import { useFindStudentsMutation, openModal, setStudentData } from 'store';
import { useState } from 'react';

export const useSearchBar = () => {
  const [matchingStudents, setMatchingStudents] = useState([]);
  const dispatch = useDispatch();
  const [findStudents] = useFindStudentsMutation();

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

  const handleActions = async (data) => {
    if (data) {
      dispatch(setStudentData(data));
      await dispatch(openModal());
      setInputValue('');
    }

    return 'No data to use.';
  };
  return { isOpen, getMenuProps, getInputProps, getComboboxProps, highlightedIndex, getItemProps, selectedItem, handleActions, matchingStudents };
};
