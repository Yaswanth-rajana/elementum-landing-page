import { cn } from '../../utils/cn'
import './Button.css'

export function Button({ children, variant = 'primary', onClick, className, ...props }) {
  return (
    <button
      className={cn('btn', `btn-${variant}`, className)}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}