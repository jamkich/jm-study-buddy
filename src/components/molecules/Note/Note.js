import React from 'react';
import Title from 'components/atoms/Title/Title';
import { NoteWrapper, StyledDeleteButton } from './Note.styles';
import { useRemoveNoteMutation } from 'store';
import { useDispatch } from 'react-redux';
import { groupsApi } from 'store';
import { createNotification } from 'store';

const Note = ({ title = 'Untitled', content = 'No content', id }) => {
  const [removeNote] = useRemoveNoteMutation();
  const dispatch = useDispatch();

  const handleRemoveNote = async () => {
    removeNote({ id: id });
    await dispatch(createNotification({ type: 'SUCCESS', message: 'Note has been succesfully deleted.' }));
    dispatch({
      type: `${groupsApi}/invalidateTags`,
      payload: ['Students'],
    });
  };

  return (
    <NoteWrapper>
      <Title>{title}</Title>
      <p>{content}</p>
      <StyledDeleteButton aria-label="Delete" onClick={handleRemoveNote}></StyledDeleteButton>
    </NoteWrapper>
  );
};

export default Note;
