import React, { Component, Fragment } from 'react'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'

import Header from './Header'
import Meta from './Meta'

const theme = {
    red: '#FF0000',
    black: '#393939',
    grey: '#3A3A3A',
    lightGrey: '#E1E1E1',
    offWhite: '#EDEDED',
    maxWidth: '1000px',
    bs: '0 12px 24px 0 rgba(0, 0, 0, 09)'
  }

const StyledPage = styled.div`
    background: white;
    color: ${props => props.theme.black};
`;

const Inner = styled.div`
    max-width: ${props => props.theme.maxWidth};
    margin: 0 auto;
    padding: 2rem;
`;
  
const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Roboto';
        src: url('/static/fonts/roboto/Roboto-Regular.ttf') format('ttf');
        font-weight: normal;
        font-style: normal;
    }
    html: {
        box-sizing: border-box;
        font-size: 10px;
    }
    *, *:before, *:after {
        box-sizing: inherit;
    }
    body {
        font-family: 'Roboto', sans-serif;
        padding: 0;
        margin: 0;
        font-size: 1.5rem;
        line-height: 2;
    }
    a {
        text-decoration: none;
        color: ${theme.black}
    }
`;

class Template extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <Fragment>
                    <GlobalStyle />
                    <StyledPage>
                        <Meta />
                        <Header />
                        <Inner>
                            {this.props.children}
                        </Inner>
                    </StyledPage>
                </Fragment>
            </ThemeProvider>
        )
    }
}

export default Template;
