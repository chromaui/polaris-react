import React from 'react';
import {ThemeContext} from '../../utilities/theme';
import {Theme} from '../../utilities/theme/types';
import {setColors} from '../../utilities/theme/utils';
import {isObjectsEqual} from '../../utilities/is-objects-equal';

interface State {
  theme: Theme;
  colors: string[][] | undefined;
}

interface Props {
  /** Custom logos and colors provided to select components */
  theme: Theme;
  /** The content to display */
  children?: React.ReactNode;
}

const defaultTheme = {
  '--top-bar-background': '#00848e',
  '--top-bar-color': '#f9fafb',
  '--top-bar-background-lighter': '#1d9ba4',
};

export default class ThemeProvider extends React.Component<Props, State> {
  state: State = {
    theme: setThemeContext(this.props.theme),
    colors: setColors(this.props.theme),
  };

  componentDidUpdate({theme: prevTheme}: Props) {
    const {theme} = this.props;
    if (isObjectsEqual(prevTheme, theme)) {
      return;
    }

    // eslint-disable-next-line react/no-did-update-set-state
    this.setState({
      theme: setThemeContext(theme),
      colors: setColors(theme),
    });
  }

  render() {
    const {
      theme: {logo = null, ...rest},
    } = this.state;
    const {children} = this.props;
    const styles = this.createStyles() || defaultTheme;

    const theme = {
      ...rest,
      logo,
    };

    return (
      <ThemeContext.Provider value={theme}>
        <div style={styles}>{React.Children.only(children)}</div>
      </ThemeContext.Provider>
    );
  }

  createStyles() {
    const {colors} = this.state;
    return colors
      ? colors.reduce((state, [key, value]) => ({...state, [key]: value}), {})
      : null;
  }
}

function setThemeContext(ctx: Theme): Theme {
  const {colors, ...theme} = ctx;
  return {...theme};
}
