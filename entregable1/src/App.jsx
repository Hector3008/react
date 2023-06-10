
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import Navbar from './componentes/Navbar/Navbar'

const App = () => {
  return (
    <div>
      <Navbar/>
      <ItemListContainer greetings = {"Hola, este es el greetings ingresado por props"}/>
     
    </div>
  )
}

export default App

