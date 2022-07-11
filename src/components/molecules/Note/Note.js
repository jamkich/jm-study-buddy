import React from 'react';
import Title from 'components/atoms/Title/Title';
import { NoteWrapper, StyledDeleteButton } from './Note.styles';
import { useDispatch } from 'react-redux';
import { removeNote } from 'store';

const Note = ({ title = 'Untitled', content = 'No content', id }) => {
  const dispatch = useDispatch();
  const handleRemoveNote = () => {
    dispatch(removeNote({ id }));
  };
  return (
    <NoteWrapper>
      <Title>{title}</Title>
      <p>{content}</p>
      <StyledDeleteButton onClick={handleRemoveNote}></StyledDeleteButton>
    </NoteWrapper>
  );
};

export default Note;
