import React from 'react'

export const DetailsField = ({ label, caption }) => (
  <div className="card mb-2">
    <div className="card-header">
      {label}
    </div>
    <div className="list-group-item">
      {caption}
    </div>
  </div>
)
