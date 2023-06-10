import './ItemListContainer.css'

const ItemListContainer = ({greetings}) => {
  return (
    <h2 className="greetings text-center display-4">{greetings}</h2>
  )
}

export default ItemListContainer