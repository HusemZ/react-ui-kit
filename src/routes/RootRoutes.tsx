import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import type { RouteItem } from '../@types'
import NotFoundPage from '../pages/NotFound'
import HomePage from '../pages/Home'

const ROUTES: RouteItem[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]

export default function RootRoutes() {
  const router = createBrowserRouter(ROUTES)

  return <RouterProvider router={router} />
}
