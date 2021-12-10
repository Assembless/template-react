/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Project scoped imports.

// Component scoped imports.
import {{name}} from './index';

export default {
  title: `Example/{{name}}`,
  component: {{name}},
  argTypes: {},
} as ComponentMeta<typeof {{name}}>;

const Template: ComponentStory<typeof {{name}}> = (args) => (
  <{{name}} {...args} />
);

export const Standard = Template.bind({});
Standard.args = {
  message: `Lorem ipsum sit amet dolor ex deus`,
  children: <div>sued xe rolod tema tis muspi meroL</div>,
};