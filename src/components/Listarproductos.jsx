import { productos } from '../data/productos'
import { useCarrito } from '../store/useCarrito'

function ListarProductos() {
  const [productos, setProductos] = useState([])
  const agregarProducto = useCarrito(
    (state) => state.agregarProducto
  )

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const data = await obtenerProductos()
        setProductos(data)
      } catch (error) {
        console.error('Error al obtener los productos:', error)
      }
    }

    fetchProductos()
  }, [])

  return (
    <section>
      <h2>Productos</h2>

      <div className="productos">
        {productos.map((producto) => (
          <article className="producto" key={producto.id}>
            <h3>{producto.nombre}</h3>

            <p>
              ${producto.precio.toLocaleString('es-CO')}
            </p>

            <button
              className="btn btn-principal"
              onClick={() => agregarProducto(producto)}
            >
              Agregar al carrito
            </button>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ListarProductos;