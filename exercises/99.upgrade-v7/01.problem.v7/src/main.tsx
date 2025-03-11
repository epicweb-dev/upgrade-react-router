import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './styles/index.css'
import { UnknownErrorBoundary } from './error-boundary.tsx'
import { router } from './routes.tsx'

createRoot(document.getElementById('🧭')!).render(
	<UnknownErrorBoundary>
		<RouterProvider router={router} />
	</UnknownErrorBoundary>,
)
