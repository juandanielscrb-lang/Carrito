import Encabezado from './components/Encabezado'
import ListarProductos from './components/ListarProductos'
import Carrito from './components/Carrito'

function App() {
  return (
    <div className="app">
      <Encabezado />

      <main className="contenido">
        <ListarProductos />
        <Carrito />
      </main>
    </div>
  )
}

export default App;