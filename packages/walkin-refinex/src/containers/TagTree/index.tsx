import * as React from "react";
import SortableTree, { changeNodeAtPath } from 'react-sortable-tree';
import 'react-sortable-tree/style.css';
import { Select, Row, Col } from "antd"

const { Option } = Select

interface iState {
    treeData?: Array<any>
}

interface iProps {

}

class TagTree extends React.Component<iProps, iState>
{
    constructor(props) {
        super(props);

        this.state = {
            treeData: [
                { title: 'Overall Experience', children: [{ title: 'Store', children: [{ title: 'Ambience', children: [{ title: 'color' }] }, { title: "Billing" }] }] }
            ],
        };
    }

    handleChange(value) {
        console.log(`selected ${value}`);
    }

    displaySelect() {
        return (<Select size={"small"} defaultValue="1" style={{ width: 120, fontSize: "10px", fontWeight: 500 }} onChange={(val) => { this.handleChange(val) }}>
            <Option value="1">Store</Option>
            <Option value="2">Stock</Option>
            <Option value="3"> Manager</Option>
            <Option value="4">Marketing</Option>
        </Select>)
    }

    renderNode(node, path) {
        console.log("Node : ", node, "Path : ", path)
        return (
            <Row>
                <Col span={10} style={{ fontSize: "12px", paddingTop: "5px" }}>{node.title}</Col>
                <Col span={14} style={{ paddingRight: "100px" }}>
                    <span style={{ paddingRight: "10px", paddingLeft: "10px", fontWeight: 400, fontSize: "10px" }}>Assign Role</span>
                    {this.displaySelect()}
                </Col>
            </Row>
        )
    }

    render() {
        const getNodeKey = ({ treeIndex }) => treeIndex;
        return (
            <div style={{ height: 300, width: "100%" }}>
                <SortableTree
                    canDrag={false}
                    treeData={this.state.treeData}
                    onChange={treeData => this.setState({ treeData })}
                    generateNodeProps={({ node, path }) => ({
                        title: (
                            <div>
                                {this.renderNode(node, path)}
                            </div>
                        )
                    })}
                />
            </div>
        );
    }
}

export default TagTree; 