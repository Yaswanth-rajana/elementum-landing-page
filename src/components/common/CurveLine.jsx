import './CurveLine.css'

export function CurveLine({ position = 'between-sections' }) {
  return (
    <div className={`curve-line curve-${position}`}>
      <img src="/Vector 2517.png" alt="" aria-hidden="true" className="curve-line-image" />
    </div>
  )
}
