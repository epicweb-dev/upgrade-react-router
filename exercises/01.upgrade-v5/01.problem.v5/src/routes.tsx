import { Route, Switch } from 'react-router-dom'
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

// Wrapper components for different layout combinations
function MarketingLayoutWrapper({
	Component,
}: {
	Component: React.ComponentType
}) {
	return (
		<AppLayout>
			<MarketingLayout>
				<Component />
			</MarketingLayout>
		</AppLayout>
	)
}

function RecipientsLayoutWrapper({
	Component,
}: {
	Component: React.ComponentType
}) {
	return (
		<AppLayout>
			<RecipientsLayout>
				<Component />
			</RecipientsLayout>
		</AppLayout>
	)
}

function RecipientsErrorBoundaryWrapper({
	Component,
}: {
	Component: React.ComponentType
}) {
	return (
		<AppLayout>
			<RecipientsLayout>
				<RecipientErrorBoundary>
					<Component />
				</RecipientErrorBoundary>
			</RecipientsLayout>
		</AppLayout>
	)
}

// Route-specific components
function WrappedHomepage() {
	return <MarketingLayoutWrapper Component={HomepageRoute} />
}

function WrappedAbout() {
	return <MarketingLayoutWrapper Component={AboutRoute} />
}

function WrappedRecipientIndex() {
	return <RecipientsLayoutWrapper Component={RecipientIndexRoute} />
}

function WrappedNewRecipient() {
	return <RecipientsLayoutWrapper Component={NewRecipientRoute} />
}

function WrappedRecipient() {
	return <RecipientsErrorBoundaryWrapper Component={RecipientRoute} />
}

function WrappedRecipientEdit() {
	return <RecipientsErrorBoundaryWrapper Component={RecipientEditRoute} />
}

export function AppRoutes() {
	return (
		<UnknownErrorBoundary>
			<Switch>
				<Route path="/" exact component={WrappedHomepage} />
				<Route path="/about" component={WrappedAbout} />
				<Route path="/recipients" exact component={WrappedRecipientIndex} />
				<Route path="/recipients/new" component={WrappedNewRecipient} />
				<Route path="/recipients/:id" exact component={WrappedRecipient} />
				<Route path="/recipients/:id/edit" component={WrappedRecipientEdit} />
				<Route path="/signup" component={SignupRoute} />
				<Route path="*" component={NotFoundRoute} />
			</Switch>
		</UnknownErrorBoundary>
	)
}
