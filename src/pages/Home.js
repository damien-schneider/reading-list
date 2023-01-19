import BookList from '../components/BookList'
import BookForm from '../components/BookForm'


//hooks
import { useCollection } from '../hooks/useCollection'


export default function Home() {
  const { document: books } = useCollection('books')

  return (
    <div className="App">
      {books && <BookList books={books} />}
      <BookForm />
    </div>
  );
}
