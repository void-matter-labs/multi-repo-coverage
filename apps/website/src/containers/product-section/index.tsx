import { useMutation, useQuery } from '@tanstack/react-query'
import React, { ComponentProps } from 'react'
import { PriceFilter } from 'ui-components'

import { fetchFilterOptions } from './fetch-filter-options'

const ProductSection = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["product-complete-filter"],
    queryFn: fetchFilterOptions,
    retry: 0
  })


  const { mutate, data: products, isPending: isLoadingProducts } = useMutation({
    mutationFn: (data: { maximo: number, minimo: number }) => {
      return fetch("https://example.com/products", {
        body: JSON.stringify(data)
      }).then(res => res.json())
    }
  })

  const onChange: ComponentProps<typeof PriceFilter>['onChange'] = ({
    range: {
      max, min
    }
  }) => {
    mutate({
      maximo: max, minimo: min
    })
  }

  return (
    <div>
      {
        isLoading ? <span>Loading</span> : <PriceFilter pricingElements={data} onChange={onChange} />
      }

      {
        isLoadingProducts ? <span> Loading... </span> : products?.map(({ name, id, price, description }: any) => <div key={id}>
          <span>{name}</span>
          <span>{price}</span>
          <span>{description}</span>
        </div>)
      }

    </div>
  )
}

export default ProductSection