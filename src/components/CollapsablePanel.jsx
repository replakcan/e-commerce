/* eslint-disable react/prop-types */
import { useState } from 'react'

const CollapsiblePanel = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="collapsible-panel">
      <div onClick={() => setIsOpen(!isOpen)} className="panel-header">
        <h3>{title}</h3>
        <span>{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && <div className="panel-content">{children}</div>}
    </div>
  )
}

export default CollapsiblePanel
