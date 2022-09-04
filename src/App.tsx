import { useQuery } from '@apollo/client';

import {
  AddForm,
  Card,
} from './components';
import { GET_NOTES } from './graphql';
import { Note } from './models';
import styles from './styles.module.css';

function App() {
  const { loading, error, data } = useQuery<{ notes: Note[] }>(GET_NOTES)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return (
    <>
      <AddForm />
      <div className={styles.container}>
        {data?.notes.map(({ text, id }) => (
          <Card key={id} id={id} text={text} />
        ))}
      </div>
    </>
  )
}

export default App
