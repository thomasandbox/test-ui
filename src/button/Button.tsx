import { FC, ReactNode } from "react"
import styles from './Button.module.scss'

export type ButtonProps = JSX.IntrinsicElements['button'] & {
  children: ReactNode
  isDark?: boolean
}

export const Button: FC<ButtonProps> = ({ children, isDark = false, ...props }) => {
  return <button type="button" {...props} className={isDark ? styles.baseDark : styles.base}>{children}</button>
}
