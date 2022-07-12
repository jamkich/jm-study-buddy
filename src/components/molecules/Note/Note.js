import React, { useEffect } from 'react';
import Title from 'components/atoms/Title/Title';
import { NoteWrapper, StyledDeleteButton } from './Note.styles';
import { useRemoveNoteMutation } from 'store';

const Note = ({ title = 'Untitled', content = 'No content', id }) => {
  const [removeNote] = useRemoveNoteMutation();

  const handleRemoveNote = () => {
    removeNote({ id: id });
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
