import { ComponentMeta, ComponentStory } from '@storybook/react'

import Card, { CardProps } from './Card'
import { mockCardProps } from './Card.mocks'

export default {
    title: 'elements/Card',
    component: Card,
    argTypes: {},
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />

export const Base = Template.bind({})

export const CardWithoutTitle = Template.bind({})
CardWithoutTitle.args = {
    description: 'lorem ipsum',
}

export const CardWithImage = Template.bind({})
CardWithImage.args = {
    ...mockCardProps.base,
    children: (
        <div className="fakeimg" style={{ height: '200px', background: 'red' }}>
            Image
        </div>
    ),
}

Base.args = {
    ...mockCardProps.base,
} as CardProps
