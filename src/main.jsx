import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux';
import { store } from './redux/store.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Body from './components/Body.jsx';
import SearchResult from './components/SearchResult.jsx';

const router = createBrowserRouter([
    {
        path:"/",
        element: <App />,
        children: [
            {
                path:"/",
                element: <Body />
            },
            {
                path:"/search",
                element: <SearchResult />
            }
        ]
    }
])

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
);