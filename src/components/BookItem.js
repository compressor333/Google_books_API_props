

const BookItem = ({ item }) => {
  return (
    <div className="card">
        <ul>
            <img src={item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.thumbnail} alt='front'></img>
        </ul>
    </div>
  )
}

export default BookItem