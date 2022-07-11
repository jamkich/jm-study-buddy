import { Button } from 'components/atoms/Button/Button';
import React, { useEffect } from 'react';
import { FormWrapper, NotesWrapper, StyledFormField, Wrapper } from 'views/Notes.styles';
import Note from 'components/molecules/Note/Note';
import { useForm } from 'react-hook-form';
import { useGetNotesQuery, useAddNoteMutation } from 'store';

const Notes = () => {
  const { register, handleSubmit, reset } = useForm();
  const { data, isLoading } = useGetNotesQuery();
  const [addNote] = useAddNoteMutation();

  useEffect(() => {
    console.log(data);
  }, [data]);

  const handleAddNote = ({ title, content }) => {
    addNote({ title, content });
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
        {isLoading ? (
          <h2>Loading...</h2>
        ) : data.notes.length ? (
          data.notes.map(({ id, title, content }) => {
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
