import { Meta } from '@storybook/react'
import { Button } from './Button'

export default {
  title: "Button",
  component: Button
} as Meta

export const Preview = () => {
  return (<>
    <Button>Hello</Button>
    <Button isDark>Hello</Button>
  </>)
}
