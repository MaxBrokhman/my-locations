import React from 'react'

export const LocationCategoriesList = ({ categories, locationCategories }) => (
  <div className="card details-filed">
    <div className="card-header">
      Location Categories:
    </div>
    {
      locationCategories.map((category) => {
        const foundCategory = categories.find((item) => item.id === category)
        if (foundCategory) {
          return (
            <div className="list-group-item" key={foundCategory.id}>
              {foundCategory.name}
            </div>
          )
        }
        return null
      })
    }
  </div>
)
