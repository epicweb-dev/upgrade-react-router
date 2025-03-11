import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import './styles/index.css'
import { AppRoutes } from './routes.tsx'

createRoot(document.getElementById('🧭')!).render(
	<Router>
		<AppRoutes />
	</Router>,
)
