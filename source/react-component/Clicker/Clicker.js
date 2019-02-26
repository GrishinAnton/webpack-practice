// Core
import React, { useState, useCallback } from 'react';
import { hot } from 'react-hot-loader/root';

// Styles
import Styles from './postcss.css';
import Sass from './styles.scss';
import kitty from '../theme/images/kitty.jpg';
import { ReactComponent as ReactLogoComponent } from '../theme/images/react.svg';
import reactLogo from '../theme/images/react.svg';

import { Button } from '../Button';

const Clicker = () => {
    const [ count, setCount ] = useState(34);

    const inc = () => useCallback(
        () => void this.setState(({ count }) => ({ count: count + 1 })),
        [],
    );
    const dec = () => useCallback(
        () => void this.setState(({ count }) => ({ count: count - 1 })),
        [],
    );

    const { count } = this.state;

    return (
        <section
            className = { Styles.clicker }
            style = {{
                '--mainColor':       'rebeccapurple',
                '--headingFontSize': this.state.count + 'px',
            }}>
            <ReactLogoComponent width = { 50 } />
            <img src = { reactLogo } />
            <img src = { kitty } />
            <h1 className = { Sass.test }>Test: {count}</h1>
            <Button onClick = { this.inc }>INCREMENT</Button>
            <Button onClick = { this.dec }>Decrement</Button>
        </section>
    );
};

export default hot(Clicker);
