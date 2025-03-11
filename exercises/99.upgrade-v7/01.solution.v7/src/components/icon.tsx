import { clsx } from 'clsx'
import * as icons from './icons.tsx'

const sizeClassName = {
	font: 'w-[1rem] h-[1lh]',
	xs: 'w-3 h-3',
	sm: 'w-4 h-4',
	md: 'w-5 h-5',
	lg: 'w-6 h-6',
	xl: 'w-7 h-7',
} as const

type Size = keyof typeof sizeClassName

const childrenSizeClassName = {
	font: 'gap-1.5',
	xs: 'gap-1.5',
	sm: 'gap-1.5',
	md: 'gap-2',
	lg: 'gap-2',
	xl: 'gap-3',
} satisfies Record<Size, string>

export type IconName = keyof typeof icons extends `${infer Name}Icon`
	? Name
	: never

/**
 * Renders an SVG icon. The icon defaults to the size of the font. To make it
 * align vertically with neighboring text, you can pass the text as a child of
 * the icon and it will be automatically aligned.
 * Alternatively, if you're not ok with the icon being to the left of the text,
 * you need to wrap the icon and text in a common parent and set the parent to
 * display "flex" (or "inline-flex") with "items-center" and a reasonable gap.
 *
 * Pass `title` prop to the `Icon` component to get `<title>` element rendered
 * in the SVG container, providing this way for accessibility.
 */
export function Icon({
	name,
	size = 'font',
	className,
	children,
	...props
}: icons.IconProps & {
	name: IconName
	size?: Size
}) {
	if (children) {
		return (
			<span
				className={`inline-flex items-center ${childrenSizeClassName[size]}`}
			>
				<Icon
					name={name}
					size={size}
					className={clsx(className, 'flex-none self-start')}
					{...props}
				/>
				{children}
			</span>
		)
	}

	const IconComponent = icons[`${name}Icon`]
	if (!IconComponent) {
		console.error(`Icon "${name}" not found`)
		return null
	}

	return (
		<IconComponent
			className={clsx(sizeClassName[size], className, 'shrink-0')}
			{...props}
		/>
	)
}
