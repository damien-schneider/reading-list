import delete_fill0 from '../assets/icons/delete_FILL0.svg'
import delete_fill1 from '../assets/icons/delete_FILL1.svg'

import { db } from '../firebase/config'
import { deleteDoc, doc } from 'firebase/firestore'

export default function BookList({ books }) {

  const handleClick = async (id) => {
    const docRef = doc(db, 'books', id)
    await deleteDoc(docRef)
  }

  return (    
    <div className="book-list">
      <ul>
        {books.map(book => (
          <li key={book.id} >
            {book.title}
            <img 
              onClick={() => handleClick(book.id)}
              src={delete_fill0} 
              onMouseEnter={e => e.currentTarget.src = delete_fill1}
              onMouseLeave={e => e.currentTarget.src = delete_fill0}
              style={{width: '20px', height: '20px', marginLeft: '10px', display: 'inline-block', float: 'right', cursor: 'pointer'}}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}