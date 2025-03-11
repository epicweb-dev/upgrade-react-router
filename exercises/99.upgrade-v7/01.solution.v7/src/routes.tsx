import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
} from 'react-router'
import { UnknownErrorBoundary } from './error-boundary.tsx'
import { NotFoundRoute } from './routes/404.tsx'
import { AppLayout } from './routes/app/layout.tsx'
import { AboutRoute } from './routes/app/marketing/about.tsx'
import { HomepageRoute } from './routes/app/marketing/homepage.tsx'
import { MarketingLayout } from './routes/app/marketing/layout.tsx'
import { RecipientEditRoute } from './routes/app/recipients/$id.edit.tsx'
import {
	RecipientErrorBoundary,
	RecipientRoute,
} from './routes/app/recipients/$id.tsx'
import { RecipientIndexRoute } from './routes/app/recipients/index.tsx'
import { RecipientsLayout } from './routes/app/recipients/layout.tsx'
import { NewRecipientRoute } from './routes/app/recipients/new.tsx'
import { SignupRoute } from './routes/signup.tsx'

export const router = createBrowserRouter(
	createRoutesFromElements(
		<Route ErrorBoundary={UnknownErrorBoundary}>
			<Route path="/" Component={AppLayout}>
				<Route Component={MarketingLayout}>
					<Route index Component={HomepageRoute} />
					<Route path="about" Component={AboutRoute} />
				</Route>
				<Route path="recipients" Component={RecipientsLayout}>
					<Route index Component={RecipientIndexRoute} />
					<Route path="new" Component={NewRecipientRoute} />
					<Route
						path=":id"
						Component={RecipientRoute}
						ErrorBoundary={RecipientErrorBoundary}
					/>
					<Route
						path=":id/edit"
						Component={RecipientEditRoute}
						ErrorBoundary={RecipientErrorBoundary}
					/>
				</Route>
			</Route>
			<Route path="/signup" Component={SignupRoute} />
			<Route path="*" Component={NotFoundRoute} />
		</Route>,
	),
)
