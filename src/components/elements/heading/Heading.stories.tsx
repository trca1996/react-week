import { ComponentMeta, ComponentStory } from '@storybook/react'

import Heading, { HeadingProps } from './Heading'
import { mockHeadingProps } from './Heading.mocks'

export default {
    title: 'templates/Heading',
    component: Heading,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} as ComponentMeta<typeof Heading>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Heading> = (args) => <Heading {...args} />

export const Base = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
    ...mockHeadingProps.base,
} as HeadingProps
