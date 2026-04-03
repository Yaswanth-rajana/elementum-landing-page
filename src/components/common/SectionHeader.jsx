import './SectionHeader.css'

export function SectionHeader({ title, highlight, subtitle, align = 'center' }) {
  return (
    <div className={`section-header section-header-${align}`}>
      {highlight && <span className="section-highlight">{highlight}</span>}
      <h2 className="section-title">
        {title}
        <span className="title-stroke"></span>
      </h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  )
}