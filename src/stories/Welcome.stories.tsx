import React from "react";
import Welcome,{Props} from "./Welcome";
import {Meta, Story} from '@storybook/react'

export default {
    title: 'Test/Welcome',
    component: Welcome
} as Meta

const Template: Story<Props> = args => <Welcome {...args} />

export const Base = Template.bind({})
Base.args = {
    className: '',
    text: 'Welcome to the App'
}