import * as React from 'react'
import { cn } from '@/lib/utils'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, type = 'text', ...props }, ref) => {
		return (
			<input
				ref={ref}
				type={type}
				className={cn(
					'flex h-10 w-full rounded-md border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black',
					className
				)}
				{...props}
			/>
		)
	}
)
Input.displayName = 'Input'


