/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Project scoped imports.

// Component scoped imports.
import ErrorPage from './index';

export default {
  title: `Example/ErrorPage`,
  component: ErrorPage,
  argTypes: {},
} as ComponentMeta<typeof ErrorPage>;

const Template: ComponentStory<typeof ErrorPage> = (args) => (
  <ErrorPage {...args} />
);

export const Standard = Template.bind({});
Standard.args = {
  message: `Lorem ipsum sit amet dolor ex deus`,
  children: <div>sued xe rolod tema tis muspi meroL</div>,
};
