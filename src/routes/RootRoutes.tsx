import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import type { RouteItem } from '../@types'
import NotFoundPage from '../pages/NotFound'
import HomePage from '../pages/Home'
import ButtonPage from '../pages/Button.tsx'
import InputPage from '../pages/Input.tsx'
import TagPage from '../pages/Tag.tsx'
import SelectPage from '../pages/Select.tsx'
import RadioPage from '../pages/Radio.tsx'
import CheckboxPage from '../pages/Checkbox.tsx'

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
    path: '/tag',
    element: <TagPage />,
  },
  {
    path: '/select',
    element: <SelectPage />,
  },
  {
    path: '/radio',
    element: <RadioPage />,
  },
  {
    path: '/checkbox',
    element: <CheckboxPage />,
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
