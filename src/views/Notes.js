import { Button } from 'components/atoms/Button/Button';
import React from 'react';
import { FormWrapper, NotesWrapper, StyledFormField, Wrapper } from 'views/Notes.styles';
import Note from 'components/molecules/Note/Note';
import { useDispatch, useSelector } from 'react-redux';
import { addNote } from 'store';
import { useForm } from 'react-hook-form';

const Notes = () => {
  const notes = useSelector((state) => state.notes);
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm();

  const handleAddNote = ({ title, content }) => {
    dispatch(addNote({ title, content }));
    reset();
  };

  return (
    <Wrapper>
      <FormWrapper onSubmit={handleSubmit(handleAddNote)}>
        <StyledFormField label="Title" name="Title" id="title" {...register('title', { required: true })} />
        <StyledFormField isTextarea label="Content" name="Content" id="content" {...register('content', { required: true })} />
        <Button type="submit">Add</Button>
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
