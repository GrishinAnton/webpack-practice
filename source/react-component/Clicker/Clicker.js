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

    const increment = useCallback(
        () => void setCount((count) => ({ count: count + 1 })),
        [],
    );
    const decrement = useCallback(
        () => void setCount((count) => ({ count: count - 1 })),
        [],
    );

    return (
        <section
            className = { Styles.clicker }
            style = {{
                '--mainColor':       'rebeccapurple',
                '--headingFontSize': count + 'px',
            }}>
            <ReactLogoComponent width = { 50 } />
            <img src = { reactLogo } />
            <img src = { kitty } />
            <h1 className = { Sass.test }>Test: {count}</h1>
            <Button onClick = { increment }>Increment</Button>
            <Button onClick = { decrement }>Decrement</Button>
        </section>
    );
};

export default hot(Clicker);
