const API_URL = 'https://fakestoreapi.com/products'

export const obtenerProductos = async () => {
  const respuesta = await fetch(API_URL)

  if (!respuesta.ok) {
    throw new Error('Error al obtener los productos')
  }

  return await respuesta.json()
}