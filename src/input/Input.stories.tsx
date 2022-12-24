import { Meta } from '@storybook/react'
import { Input } from './Input'

export default {
  title: "Input",
  component: Input
} as Meta

export const Preview = () => {
  return (<>
    <Input />
  </>)
}
