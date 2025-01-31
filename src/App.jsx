import { RouterProvider, createBrowserRouter, NavLink, Outlet } from "react-router-dom"
import PageError from "./pages/PageError"
import Home from "./pages/Home"
import Properties from "./pages/Properties"
import Options from "./pages/Options"
import PropertyForm from "./pages/PropertyForm"
import OptionForm from "./pages/OptionForm"
import PropertyList from './components/PropertyList'

const router = createBrowserRouter([
  {
    path: "/",
    element: <><Root /></>,
    errorElement: <PageError />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: '/properties',
        children: [
          {
            path: '',
            element: <Properties />
          },
          {
            path: 'new',
            element: <PropertyForm />
          }, {
            path: ':id',
            element: <PropertyForm />
          }
        ]
      },
      {
        path: '/options',
        children: [
          {
            path: '',
            element: <Options />
          },
          {
            path: 'new',
            element: <OptionForm />
          }, {
            path: ':id',
            element: <OptionForm />
          }
        ]
      }

    ]
  }
])

function Root() {
  return <>
    <header>
      <nav className="flex item-center justify-between mb-6 flex-wrap bg-blue-600 p-6">
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <NavLink className="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white mr-4" to="/">Home</NavLink>
            <NavLink className="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white mr-4" to="/properties">Properties</NavLink>
            <NavLink className="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white mr-4" to="/options">Options</NavLink>
          </div>
        </div>
      </nav>
    </header>
    <div className="container  mx-auto">
      <Outlet />
    </div>
  </>
}

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">
            Immo Admin
          </h1>
        </div>
      </header>
      <main>
        <RouterProvider router={router}></RouterProvider>
      </main>
    </div>
  )
}

export default App