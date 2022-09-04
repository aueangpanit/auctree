import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

interface NoteFormProps {
  value: string
  setValue: (value: string) => void
  handleSubmit: () => void
}

export const NoteForm = ({ value, setValue, handleSubmit }: NoteFormProps) => (
  <>
    <TextField
      id="outlined-basic"
      label="Outlined"
      variant="outlined"
      value={value}
      onChange={e => setValue(e.target.value)}
    />
    <Button variant="text" onClick={handleSubmit}>
      Submit
    </Button>
  </>
)
