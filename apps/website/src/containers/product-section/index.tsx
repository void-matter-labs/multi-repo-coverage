import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { PriceFilter } from 'ui-components'

import { fetchFilterOptions } from './fetch-filter-options'

const ProductSection = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["product-complete-filter"],
    queryFn: fetchFilterOptions,
    retry: 0
  })

  const onChange = () => { }

  return (
    <div>
      {
        isLoading ? <span>Loading</span> : <PriceFilter pricingElements={data} onChange={onChange} />
      }
    </div>
  )
}

export default ProductSection