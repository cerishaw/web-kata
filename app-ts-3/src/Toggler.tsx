import * as React from 'react';
import { Component } from 'react';
import './Toggler.css';

interface TogglerProps {
    toggle: boolean;
    toggleOnClick(): void;
}

class Toggler extends Component<TogglerProps, {}> {
    render(): JSX.Element {
        return (
            <div
                className='toggle-expand'
                onClick={this.props.toggleOnClick}
            >
                {this.props.toggle ? '+' : '-'}
            </div>
        );
    }
}

export { Toggler };