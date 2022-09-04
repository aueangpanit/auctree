import {
  useCallback,
  useState,
} from 'react';

import {
  gql,
  useMutation,
} from '@apollo/client';

import { GET_NOTES } from '../../graphql';
import { NoteForm } from '../NoteForm';

const ADD_NOTE = gql`
  mutation AddNote($note: notes_insert_input!) {
    insert_notes_one(object: $note) {
      id
      text
    }
  }
`

export const AddForm = () => {
  const [value, setValue] = useState('')

  const [addNote, { data, loading, error }] = useMutation(ADD_NOTE, {
    refetchQueries: [
      { query: GET_NOTES }, // DocumentNode object parsed with gql
      'GetNotes' // Query name
    ]
  })

  const handleSubmit = useCallback(() => {
    addNote({ variables: { note: { text: value } } })
  }, [addNote, value])

  if (loading) return <div>Submitting...</div>
  if (error) return <div>{`Submission error! ${error.message}`}</div>

  return (
    <NoteForm value={value} setValue={setValue} handleSubmit={handleSubmit} />
  )
}
