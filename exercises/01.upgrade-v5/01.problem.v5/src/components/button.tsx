import { cva, type VariantProps } from 'class-variance-authority'
import { type ButtonHTMLAttributes } from 'react'
import { Link, type LinkProps } from 'react-router-dom'

const buttonStyles = cva(
	'flex items-center justify-center rounded-full font-medium no-underline transition-colors hover:no-underline focus:no-underline',
	{
		variants: {
			variant: {
				primary: [
					'bg-button text-button-text',
					'hover:bg-button-hover',
					'active:bg-button-active',
				],
				secondary: [
					'bg-button-secondary text-button-secondary-text',
					'hover:bg-button-secondary-hover',
					'active:bg-button-secondary-active',
				],
				outlined: [
					'border-button text-button border bg-transparent',
					'hover:bg-button/10',
					'active:bg-button/20',
				],
				borderless: [
					'text-button border-none bg-transparent',
					'hover:bg-button/10',
					'active:bg-button/20',
				],
			},
			status: {
				success: [
					'bg-success-background text-success-foreground',
					'hover:bg-success-background/90',
					'active:bg-success-background/80',
				],
				danger: [
					'bg-danger-background text-danger-foreground',
					'hover:bg-danger-background/90',
					'active:bg-danger-background/80',
				],
			},
			icon: {
				true: 'flex h-10 w-10 items-center justify-center rounded-full p-2',
				false: 'px-6 py-2',
			},
		},
		defaultVariants: {
			variant: 'primary',
			icon: false,
		},
	},
)

export function Button({
	variant,
	status,
	icon,
	className,
	...props
}: ButtonHTMLAttributes<HTMLButtonElement> &
	VariantProps<typeof buttonStyles>) {
	return (
		<button
			className={buttonStyles({ variant, status, icon, className })}
			{...props}
		/>
	)
}

export function ButtonLink({
	variant,
	status,
	icon,
	className,
	...props
}: LinkProps & VariantProps<typeof buttonStyles>) {
	return (
		<Link
			className={buttonStyles({ variant, status, icon, className })}
			{...props}
		/>
	)
}
