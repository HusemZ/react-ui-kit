import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import type { RouteItem } from '../@types'
import NotFoundPage from '../pages/NotFound'
import HomePage from '../pages/Home'
import ButtonPage from '../pages/Button.tsx'
import InputPage from '../pages/Input.tsx'

const ROUTES: RouteItem[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/button',
    element: <ButtonPage />,
  },
  {
    path: '/input',
    element: <InputPage />,
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
