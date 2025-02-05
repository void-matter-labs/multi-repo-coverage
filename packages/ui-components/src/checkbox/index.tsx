
import { InputHTMLAttributes } from 'react'
import { cx } from 'class-variance-authority'

import styles from './styles.module.css'

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
    /**
     * @default checkbox
     */
    type?: 'radio' | 'checkbox'
}


export default function Checkbox({className, type="checkbox",...props}: Readonly<CheckboxProps>) {
    return <input
      className={cx(className, styles.checkbox)}
      type={type}
      {...props}
     />
}