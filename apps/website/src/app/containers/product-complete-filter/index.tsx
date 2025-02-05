'use client'
import { useMutation, useQuery } from "@tanstack/react-query";
import { ComponentProps } from "react";
import { PriceFilter } from 'ui-components'


export default function ProductCompleteFilter(){
  const { data, isLoading } = useQuery({
    queryKey: ["product-complete-filter"],
    queryFn: ()=>{
      return fetch("https://example.com/products").then(res=>res.json())
    }
  })

  const { mutate, data: products, isPending: isLoadingProducts} = useMutation({
    mutationFn: (data: {maximo: number, minimo: number})=>{
      return fetch("https://example.com/products", {
        method: "POST",
        body: JSON.stringify(data)
      }).then(res=>res.json())
    }
  })

  const onChange: ComponentProps<typeof PriceFilter>['onChange'] = ({
    range: {
      max, min
    }
  })=>{
    mutate({
      maximo: max, minimo: min
    })
  }

  return <div>
      {

        isLoading? <span>Loading</span> : <PriceFilter pricingElements={data} onChange={onChange}/>
      }
      {
        isLoadingProducts ? <span> Loading... </span> : products?.map(({name, id, price, description}: any)=><div key={id}>
          {name} - {price} - {description}
        </div>)
      }
    </div>
}