/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Project scoped imports.

// Component scoped imports.
import FallbackPage from './index';

export default {
  title: `Example/FallbackPage`,
  component: FallbackPage,
  argTypes: {},
} as ComponentMeta<typeof FallbackPage>;

const Template: ComponentStory<typeof FallbackPage> = (args) => (
  <FallbackPage {...args} />
);

export const Standard = Template.bind({});
Standard.args = {
  children: <div>sued xe rolod tema tis muspi meroL</div>,
};
