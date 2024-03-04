import { createBrowserRouter } from 'react-router-dom'

import { Cart } from './pages/cart'
import { Layout } from './components/layout'
import { Home } from './pages/home'
import { ProductDetail } from './pages/detail'

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/cart',
        element: <Cart />
      },
      {
        path: '/product/:id',
        element: <ProductDetail />
      }
    ]
  }
])

export { router }