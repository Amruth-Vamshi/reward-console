import * as React from "react";
import { Card, Col, Button, Row } from "antd";
import './WHead.css';

export interface IAppProps {
    title?: any;
    styleName?: string;
    extra?: any;
}

export default class WHeader extends React.Component<IAppProps> {
    public render() {
        let { title, styleName, extra } = this.props
        return (
            <div className={`wHeaderStyle ${styleName}`} style={{ width: "100%" }}>
                <span style={{ verticalAlign: 'middle', float: 'left', lineHeight: 2 }} className='w-title'>{title}</span>
                <div style={{ float: "right", flexFlow: "right", verticalAlign: 'middle', lineHeight: 2 }}>  {extra} </div>
            </div>
        );
    }
}
