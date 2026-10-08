import { useCarrito } from '../store/useCarrito'

function Encabezado() {
  const items = useCarrito((state) => state.items)

  const totalUnidades = items.reduce(
    (suma, item) => suma + item.cantidad,
    0
  )

  return (
    <header className="encabezado">
      <h1>Mi Tienda</h1>
      <span className="insignia">
        {totalUnidades}
      </span>
    </header>
  )
}

export default Encabezado;