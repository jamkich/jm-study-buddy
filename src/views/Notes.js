import { Button } from 'components/atoms/Button/Button';
import React from 'react';
import { FormWrapper, NotesWrapper, StyledFormField, Wrapper } from 'views/Notes.styles';
import Note from 'components/molecules/Note/Note';
import { useDispatch, useSelector } from 'react-redux';
import { addNote } from 'store';

const Notes = () => {
  const notes = useSelector((state) => state.notes);
  const dispatch = useDispatch();

  const handleAddNote = () => {
    dispatch(addNote({ title: `New note ${Math.floor(Math.random() * 20)}`, content: 'Lorem ipsum dolor sit amet' }));
  };

  return (
    <Wrapper>
      <FormWrapper>
        <StyledFormField label="Title" name="Title" id="title" />
        <StyledFormField isTextarea label="Content" name="Content" id="content" />
        <Button onClick={handleAddNote}>Add</Button>
      </FormWrapper>
      <NotesWrapper>
        {notes.length ? (
          notes.map(({ id, title, content }) => {
            return <Note id={id} key={id} title={title} content={content}></Note>;
          })
        ) : (
          <p>Create your first Note</p>
        )}
      </NotesWrapper>
    </Wrapper>
  );
};

export default Notes;