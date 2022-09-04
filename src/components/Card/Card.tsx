import {
  useCallback,
  useState,
} from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MCard from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import MModal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';

import { NoteForm } from '../NoteForm';

interface CardProps {
  id: number
  text: string
}

export const Card = ({ id, text }: CardProps) => {
  const [open, setOpen] = useState(false)

  const handleOpen = useCallback(() => {
    setOpen(true)
  }, [])

  const handleClose = useCallback(() => {
    setOpen(false)
  }, [])

  return (
    <MCard sx={{ width: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {text}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={handleOpen}>Edit</Button>
        <Modal id={id} open={open} handleClose={handleClose} />
      </CardActions>
    </MCard>
  )
}

interface ModalProps {
  id: number
  open: boolean
  handleClose: () => void
}

// const UPDATE_NOTE = gql`
//   mutation UpdateNote($note: notes_set_input!, $id: Int!) {
//     update_notes(_set: $note, where: { id: { _eq: $id } }) {

//     }
//   }
// `

const Modal = ({ id, open, handleClose }: ModalProps) => {
  const [value, setValue] = useState('')
  // const [updateNote, { data, loading, error }] = useMutation(UPDATE_NOTE)

  const handleSubmit = useCallback(() => {
    // updateNote({ variables: { note: { text: value }, id } })
  }, [])

  return (
    <MModal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={{ backgroundColor: 'white' }}>
        <NoteForm
          value={value}
          setValue={setValue}
          handleSubmit={handleSubmit}
        />
      </Box>
    </MModal>
  )
}
