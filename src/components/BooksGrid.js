import BookItem from "./BookItem"
import Spinner from "./Spinner";


const BooksGrid = ({ items, load }) => {
    return (load ? (<Spinner />) : (<div className="cards">
        {items.map(item => {
            return <BookItem key={item.id} item={item}></BookItem>
        })}
    </div>)

    )
}

export default BooksGrid