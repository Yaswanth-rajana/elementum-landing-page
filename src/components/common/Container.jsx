import { cn } from '../../utils/cn'
import './Container.css'

export function Container({ children, className, size = 'xl' }) {
  return (
    <div className={cn('container', `container-${size}`, className)}>
      {children}
    </div>
  )
}