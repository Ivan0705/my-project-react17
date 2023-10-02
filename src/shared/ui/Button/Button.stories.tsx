import {Meta, StoryObj} from '@storybook/react';
import {Button, ThemeButton} from './Button';
import './Button.module.scss';
import * as React from "react";


const meta = {
    title: 'shared/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: {control: 'color'},
    },

} as Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: 'Text',


    },
};

export const Clear: Story = {
    decorators: [
        (Story) => (
            <div style={{background: 'red'}}>
                <Story/>
            </div>
        ),
    ],
    args: {
        children: 'Text',
        theme: ThemeButton.CLEAR,
    },
};

export const Outlined: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.OUTLINE
    },
};

