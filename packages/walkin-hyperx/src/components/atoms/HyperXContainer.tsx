import * as React from 'react';

export interface IAppProps {
    children?: any;
    margin?: string;
    headerHeightInPX?: number;
    heightInVH?: number
}

export default class HyperXContainer extends React.Component<IAppProps> {
    public render() {
        let { children, margin, headerHeightInPX, heightInVH } = this.props
        return (
            <div style={{ height: `calc(100vh - ${headerHeightInPX}px)`, overflowY: 'scroll', overflowX: 'hidden' }} className="HyperXContainer">
                <div style={{ margin: `${margin}`, height: `${heightInVH}vh` }} className="HyperXContainerBody">
                    {children}
                </div>
            </div>
        );
    }
}
