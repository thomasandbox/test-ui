import { FC } from "react"
import styles from './Input.module.scss'

export type InputProps = JSX.IntrinsicElements['input']

export const Input: FC<InputProps> = (props) => {
  return <input {...props} className={styles.base} />
}