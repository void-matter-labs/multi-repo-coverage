import { ChangeEvent, useCallback } from "react";
import { PriceFilterProps } from "./types";
import Checkbox from "../checkbox";

export default function PriceFilter<T extends string>({
  pricingElements,
  initialDefaultCheckedId,
  multi,
  onChange
}: Readonly<PriceFilterProps<T>>) {
  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const { currentTarget } = event
    const {
      max,
      min
    } = currentTarget.dataset

    onChange?.({
      id: currentTarget.id,
      range: {
        max: Number(max),
        min: Number(min)
      }
    }, event)
  }, [onChange])

  return <div>
    {
      pricingElements?.map(({ id, label, range: { max, min } }) => <label key={id}>
        {label}
        <Checkbox
          id={id}
          defaultChecked={initialDefaultCheckedId === id}
          type={multi ? "checkbox" : "radio"}
          name="pricing"
          onChange={handleChange}
          data-max={max}
          data-min={min}
        />
      </label>)
    }
  </div>
}