import React from 'react';
import {mountWithAppProvider} from 'test-utilities/legacy';
import ThemeProvider from '../ThemeProvider';
import {ThemeContext} from '../../../utilities/theme';

describe('<ThemeProvider />', () => {
  it('mounts', () => {
    const themeProvider = mountWithAppProvider(
      <ThemeProvider theme={{logo: null}}>
        <p>Hello</p>
      </ThemeProvider>,
    );
    expect(themeProvider.exists()).toBe(true);
  });

  it('passes context', () => {
    const Child: React.SFC<{}> = (_props) => {
      return (
        <ThemeContext.Consumer>
          {(polarisTheme) => {
            // eslint-disable-next-line shopify/jest/no-if
            return polarisTheme && polarisTheme.logo ? <div /> : null;
          }}
        </ThemeContext.Consumer>
      );
    };

    const wrapper = mountWithAppProvider(
      <ThemeProvider
        theme={{
          logo: {
            width: 104,
            topBarSource:
              'https://cdn.shopify.com/shopify-marketing_assets/static/shopify-full-color-white.svg',
            contextualSaveBarSource:
              'https://cdn.shopify.com/shopify-marketing_assets/static/shopify-full-color-black.svg',
          },
        }}
      >
        <Child />
      </ThemeProvider>,
    );

    const div = wrapper
      .find(Child)
      .find('div')
      .first();

    expect(div.exists()).toBe(true);
  });

  it('has a default theme', () => {
    const wrapper = mountWithAppProvider(
      <ThemeProvider theme={{}}>
        <p />
      </ThemeProvider>,
    );

    expect(wrapper.find('div').props().style).toBeDefined();
  });

  it('sets a provided theme', () => {
    const wrapper = mountWithAppProvider(
      <ThemeProvider
        theme={{
          colors: {
            brand: '#008060',
          },
        }}
      >
        <p />
      </ThemeProvider>,
    );

    expect(wrapper.find('div').props().style).toStrictEqual({
      '--polaris-accent': 'rgb(156, 106, 222)',
      '--polaris-accent-darkened1': '#8e54d9',
      '--polaris-accent-darkened2': '#803fd5',
      '--polaris-accent-on': '#0c0515',
      '--polaris-attention': 'rgb(238, 194, 0)',
      '--polaris-attention-darkened1': '#d6af00',
      '--polaris-attention-darkened2': '#bd9a00',
      '--polaris-attention-on': '#191500',
      '--polaris-brand': '#008060',
      '--polaris-brand-darkened1': '#00664d',
      '--polaris-brand-darkened2': '#004d39',
      '--polaris-brand-on': '#e5fff9',
      '--polaris-interaction': '#2A94FF',
      '--polaris-interaction-darkened1': '#0f87ff',
      '--polaris-interaction-darkened2': '#007af5',
      '--polaris-interaction-on': '#000d19',
      '--polaris-negative': '#C43256',
      '--polaris-negative-darkened1': '#ae2d4d',
      '--polaris-negative-darkened2': '#9a2844',
      '--polaris-negative-on': '#faebee',
      '--polaris-positive': 'rgb(80, 184, 60)',
      '--polaris-positive-darkened1': '#48a636',
      '--polaris-positive-darkened2': '#40922f',
      '--polaris-positive-on': '#081306',
      '--polaris-surface-0': '#0c0d0e',
      '--polaris-surface-1': '#171a1c',
      '--polaris-surface-10': '#838c95',
      '--polaris-surface-11': '#9199a1',
      '--polaris-surface-12': '#9fa6ad',
      '--polaris-surface-13': '#acb3b9',
      '--polaris-surface-14': '#babfc4',
      '--polaris-surface-15': '#c8ccd0',
      '--polaris-surface-16': '#d6d9dc',
      '--polaris-surface-17': '#e3e6e8',
      '--polaris-surface-18': '#f1f2f3',
      '--polaris-surface-19': '#ffffff',
      '--polaris-surface-2': '#232629',
      '--polaris-surface-3': '#2f3337',
      '--polaris-surface-4': '#3b4045',
      '--polaris-surface-5': '#464d53',
      '--polaris-surface-6': '#525960',
      '--polaris-surface-7': '#5e666e',
      '--polaris-surface-8': '#6a737c',
      '--polaris-surface-9': '#75808a',
      '--polaris-surface-baseOpacified05': 'hsl(210, 8%, 5%, 0.05)',
      '--polaris-surface-baseOpacified1': 'hsl(210, 8%, 5%, 0.1)',
      '--polaris-surface-baseOpacified2': 'hsl(210, 8%, 5%, 0.2)',
      '--polaris-surface-baseOpacified3': 'hsl(210, 8%, 5%, 0.3)',
      '--polaris-surface-baseOpacified4': 'hsl(210, 8%, 5%, 0.4)',
      '--polaris-surface-baseOpacified5': 'hsl(210, 8%, 5%, 0.5)',
      '--polaris-surface-baseOpacified6': 'hsl(210, 8%, 5%, 0.6)',
      '--polaris-surface-baseOpacified7': 'hsl(210, 8%, 5%, 0.7)',
      '--polaris-surface-baseOpacified8': 'hsl(210, 8%, 5%, 0.8)',
      '--polaris-surface-baseOpacified9': 'hsl(210, 8%, 5%, 0.9)',
      '--polaris-surface-onBase': '#f1f2f3',
      '--polaris-surface-onDark': '#f1f2f3',
      '--polaris-surface-onLight': '#0c0d0e',
      '--polaris-surface-onOpposing': '#0c0d0e',
      '--polaris-surface-opposingOpacified05': 'hsl(240, 20%, 99%, 0.05)',
      '--polaris-surface-opposingOpacified1': 'hsl(240, 20%, 99%, 0.1)',
      '--polaris-surface-opposingOpacified2': 'hsl(240, 20%, 99%, 0.2)',
      '--polaris-surface-opposingOpacified3': 'hsl(240, 20%, 99%, 0.3)',
      '--polaris-surface-opposingOpacified4': 'hsl(240, 20%, 99%, 0.4)',
      '--polaris-surface-opposingOpacified5': 'hsl(240, 20%, 99%, 0.5)',
      '--polaris-surface-opposingOpacified6': 'hsl(240, 20%, 99%, 0.6)',
      '--polaris-surface-opposingOpacified7': 'hsl(240, 20%, 99%, 0.7)',
      '--polaris-surface-opposingOpacified8': 'hsl(240, 20%, 99%, 0.8)',
      '--polaris-surface-opposingOpacified9': 'hsl(240, 20%, 99%, 0.9)',
      '--polaris-timeliness': 'rgb(71, 193, 191)',
      '--polaris-timeliness-darkened1': '#3cb4b2',
      '--polaris-timeliness-darkened2': '#36a19f',
      '--polaris-timeliness-on': '#061313',
      '--polaris-warning': 'rgb(244, 147, 66)',
      '--polaris-warning-darkened1': '#f3852b',
      '--polaris-warning-darkened2': '#f17713',
      '--polaris-warning-on': '#180c01',
    });
  });

  it('updates themes', () => {
    const wrapper = mountWithAppProvider(
      <ThemeProvider
        theme={{
          colors: {
            topBar: {
              background: '#108043',
            },
          },
        }}
      >
        <p />
      </ThemeProvider>,
    );

    wrapper.setProps({
      theme: {
        colors: {
          topBar: {
            background: '#021123',
          },
        },
      },
    });
    wrapper.update();

    expect(wrapper.find('div').props().style).toStrictEqual({
      '--polaris-accent': 'rgb(156, 106, 222)',
      '--polaris-accent-darkened1': '#8e54d9',
      '--polaris-accent-darkened2': '#803fd5',
      '--polaris-accent-on': '#0c0515',
      '--polaris-attention': 'rgb(238, 194, 0)',
      '--polaris-attention-darkened1': '#d6af00',
      '--polaris-attention-darkened2': '#bd9a00',
      '--polaris-attention-on': '#191500',
      '--polaris-brand': '#008060',
      '--polaris-brand-darkened1': '#00664d',
      '--polaris-brand-darkened2': '#004d39',
      '--polaris-brand-on': '#e5fff9',
      '--polaris-interaction': '#2A94FF',
      '--polaris-interaction-darkened1': '#0f87ff',
      '--polaris-interaction-darkened2': '#007af5',
      '--polaris-interaction-on': '#000d19',
      '--polaris-negative': '#C43256',
      '--polaris-negative-darkened1': '#ae2d4d',
      '--polaris-negative-darkened2': '#9a2844',
      '--polaris-negative-on': '#faebee',
      '--polaris-positive': 'rgb(80, 184, 60)',
      '--polaris-positive-darkened1': '#48a636',
      '--polaris-positive-darkened2': '#40922f',
      '--polaris-positive-on': '#081306',
      '--polaris-surface-0': '#0c0d0e',
      '--polaris-surface-1': '#171a1c',
      '--polaris-surface-10': '#838c95',
      '--polaris-surface-11': '#9199a1',
      '--polaris-surface-12': '#9fa6ad',
      '--polaris-surface-13': '#acb3b9',
      '--polaris-surface-14': '#babfc4',
      '--polaris-surface-15': '#c8ccd0',
      '--polaris-surface-16': '#d6d9dc',
      '--polaris-surface-17': '#e3e6e8',
      '--polaris-surface-18': '#f1f2f3',
      '--polaris-surface-19': '#ffffff',
      '--polaris-surface-2': '#232629',
      '--polaris-surface-3': '#2f3337',
      '--polaris-surface-4': '#3b4045',
      '--polaris-surface-5': '#464d53',
      '--polaris-surface-6': '#525960',
      '--polaris-surface-7': '#5e666e',
      '--polaris-surface-8': '#6a737c',
      '--polaris-surface-9': '#75808a',
      '--polaris-surface-baseOpacified05': 'hsl(210, 8%, 5%, 0.05)',
      '--polaris-surface-baseOpacified1': 'hsl(210, 8%, 5%, 0.1)',
      '--polaris-surface-baseOpacified2': 'hsl(210, 8%, 5%, 0.2)',
      '--polaris-surface-baseOpacified3': 'hsl(210, 8%, 5%, 0.3)',
      '--polaris-surface-baseOpacified4': 'hsl(210, 8%, 5%, 0.4)',
      '--polaris-surface-baseOpacified5': 'hsl(210, 8%, 5%, 0.5)',
      '--polaris-surface-baseOpacified6': 'hsl(210, 8%, 5%, 0.6)',
      '--polaris-surface-baseOpacified7': 'hsl(210, 8%, 5%, 0.7)',
      '--polaris-surface-baseOpacified8': 'hsl(210, 8%, 5%, 0.8)',
      '--polaris-surface-baseOpacified9': 'hsl(210, 8%, 5%, 0.9)',
      '--polaris-surface-onBase': '#f1f2f3',
      '--polaris-surface-onDark': '#f1f2f3',
      '--polaris-surface-onLight': '#0c0d0e',
      '--polaris-surface-onOpposing': '#0c0d0e',
      '--polaris-surface-opposingOpacified05': 'hsl(240, 20%, 99%, 0.05)',
      '--polaris-surface-opposingOpacified1': 'hsl(240, 20%, 99%, 0.1)',
      '--polaris-surface-opposingOpacified2': 'hsl(240, 20%, 99%, 0.2)',
      '--polaris-surface-opposingOpacified3': 'hsl(240, 20%, 99%, 0.3)',
      '--polaris-surface-opposingOpacified4': 'hsl(240, 20%, 99%, 0.4)',
      '--polaris-surface-opposingOpacified5': 'hsl(240, 20%, 99%, 0.5)',
      '--polaris-surface-opposingOpacified6': 'hsl(240, 20%, 99%, 0.6)',
      '--polaris-surface-opposingOpacified7': 'hsl(240, 20%, 99%, 0.7)',
      '--polaris-surface-opposingOpacified8': 'hsl(240, 20%, 99%, 0.8)',
      '--polaris-surface-opposingOpacified9': 'hsl(240, 20%, 99%, 0.9)',
      '--polaris-timeliness': 'rgb(71, 193, 191)',
      '--polaris-timeliness-darkened1': '#3cb4b2',
      '--polaris-timeliness-darkened2': '#36a19f',
      '--polaris-timeliness-on': '#061313',
      '--polaris-warning': 'rgb(244, 147, 66)',
      '--polaris-warning-darkened1': '#f3852b',
      '--polaris-warning-darkened2': '#f17713',
      '--polaris-warning-on': '#180c01',
    });
  });
});
