import * as React from "react";
import SortableTree, { changeNodeAtPath, removeNodeAtPath, addNodeUnderParent } from 'react-sortable-tree';
import 'react-sortable-tree/style.css';
import { Select, Row, Col, Button, Modal, Input, Icon, message } from "antd"
import CustomNodeRenderer from "./customNodeRenderer"
import { HoverText } from '@walkinsole/shared'

const { Option } = Select

interface iState {
    treeData?: Array<any>,
    nodeTitle?: string,
    visible?: boolean,
    nodeData?: any
}

interface iProps {

}

const data = [
    {
        "id": 1,
        "title": "Overall Experience",
        "children": [
            {
                "id": 3,
                "title": "Store",
                "children": [
                    {
                        "id": 5,
                        "title": "Ambience",
                        "children": []
                    },
                    {
                        "id": 7,
                        "title": "Billing",
                        "children": []
                    },
                    {
                        "id": 8,
                        "title": "Cleanliness",
                        "children": []
                    }
                ]
            },
            {
                "id": 4,
                "title": "Staff",
                "children": []
            },
            {
                "id": 6,
                "title": "Stock",
                "children": []
            }
        ]
    },
    {
        "id": 2,
        "title": "Service Experience",
        "children": []
    }
]

class TagTree extends React.Component<iProps, iState>
{
    constructor(props) {
        super(props);

        this.state = {
            treeData: [],
            nodeTitle: "",
            visible: false,
            nodeData: {}
        };
    }

    onTitleChange = ({ target: { value } }) => {
        this.setState({ nodeTitle: value });
    };

    onCancelNewNode() {
        this.setState({
            visible: false,
            nodeTitle: ""
        })
    }

    createNewNode() {
        const nodeData = this.state.nodeData
        var path = nodeData.path
        var isParent = false

        if (path.length === 1) {
            isParent = true
        }

        var NEW_NODE = {
            id: "Value",
            title: this.state.nodeTitle,
            isDirectory: true,
            expanded: true,
            type: "nodeValue",
            children: []
        }

        const replacedTree = changeNodeAtPath({
            treeData: this.state.treeData,
            path: path,
            newNode: NEW_NODE,
            getNodeKey: ({ treeIndex }) => treeIndex,
            ignoreCollapsed: true,
        });

        if (isParent) {
            var arr = replacedTree
            arr.push({
                id: "value",
                title: "Add Node",
                type: "newNode",
                expanded: true,
                children: []
            })
            this.setState({ visible: false, nodeTitle: "", nodeData: {}, treeData: arr })
        }
        else {
            this.setState({ visible: false, nodeTitle: "", nodeData: {}, treeData: replacedTree })
        }

    }

    convertedNodes() {
        var newSet = this.convertNodes(data)
        this.setState({ treeData: newSet })
    }

    convertNodes(data) {
        var el = []
        data.forEach(element => {
            el.push({
                id: element.id,
                title: element.title,
                type: "nodeValue",
                expanded: true,
                children: (element.children.length === 0) ? [] : this.convertNodes(element.children)
            })
        })

        // To add New Node option by default on all childrens

        el.push({
            id: 0,
            title: "Add Node",
            type: "newNode",
            expanded: true,
            children: []
        })
        return el
    }

    getCleanedData() {
        var d = this.cleanData(this.state.treeData)
        console.log("Cleaned Data : ", d)
    }

    cleanData(data) {
        var el = []
        data.forEach(element => {
            if (element.type !== "newNode") {
                el.push({
                    id: element.id,
                    title: element.title,
                    children: (element.children.length === 0) ? [] : this.cleanData(element.children)
                })
            }
        })

        return el
    }

    // handleChange(value) {
    //     console.log(`selected ${value}`);
    // }

    // displaySelect() {
    //     return (<Select size={"small"} defaultValue="1" style={{ width: 120, fontSize: "10px", fontWeight: 500 }} onChange={(val) => { this.handleChange(val) }}>
    //         <Option value="1">Store</Option>
    //         <Option value="2">Stock</Option>
    //         <Option value="3"> Manager</Option>
    //         <Option value="4">Marketing</Option>
    //     </Select>)
    // }

    renderNode(nodeInfo) {
        const { node, path } = nodeInfo
        // console.log("Node : ", node, "Path : ", path)

        // To be used later when tags can be linked to users 
        //
        // return (
        //     <Row onClick={() => { this.addNewNode(nodeInfo, "newNodeBtn") }}>
        //         <Col span={10} style={{ fontSize: "12px", paddingTop: "5px" }}>{node.title}</Col>
        //         <Col span={14} style={{ paddingRight: "100px" }}>
        //             <span style={{ paddingRight: "10px", paddingLeft: "10px", fontWeight: 400, fontSize: "10px" }}>Assign Role</span>
        //             {this.displaySelect()}
        //         </Col>
        //     </Row>
        // )

        // To display Original Data

        if (node.type === "nodeValue") {
            return (
                <Row>
                    <Col onClick={() => { this.addNewNode(nodeInfo) }} span={10} style={{ fontSize: "12px", paddingTop: "5px" }}><HoverText>{node.title}</HoverText></Col>
                    <Col span={14} style={{ marginRight: "-227px", paddingLeft: "218px" }} >
                        <div onClick={() => { this.removeNode(nodeInfo) }}><Icon type="close" /></div>
                    </Col>
                </Row>
            )
        }

        // To display add node button

        if (node.type === "newNode") {
            return (
                <div onClick={() => { this.setState({ nodeData: nodeInfo, visible: true }) }}>
                    <Col span={24} style={{ fontSize: "12px", paddingTop: "5px", width: "100%" }}>
                        {node.title}
                    </Col>
                </div>
            )
        }

    }

    addNewNode(rowInfo) {
        var stopProcess = false

        var NEW_NODE = {
            title: 'Add Node',
            isDirectory: true,
            expanded: true,
            type: "newNode",
            children: []
        };

        var child = rowInfo.node.children

        child.forEach(element => {
            if (element.type === "newNode") {
                stopProcess = true
            }
        })
        if (!stopProcess) {
            const newTree = addNodeUnderParent({
                treeData: this.state.treeData,
                newNode: NEW_NODE,
                expandParent: true,
                parentKey: rowInfo ? rowInfo.treeIndex : undefined,
                getNodeKey: ({ treeIndex }) => treeIndex,
            });
            this.setState({ treeData: newTree.treeData })
        }
    }

    removeNode(rowInfo) {
        const { path } = rowInfo;
        if (path.length === 1) {
            message.warn("Sorry, You cannot delete parent tag.")
            return
        }
        const updatedTree = removeNodeAtPath({
            treeData: this.state.treeData,
            path,
            getNodeKey: ({ treeIndex }) => treeIndex,
        });
        this.setState({ treeData: updatedTree })
    }

    render() {
        const { visible, treeData, nodeTitle } = this.state
        return (
            <div style={{ height: 'auto', width: "100%" }}>
                <SortableTree
                    canDrag={false}
                    treeData={treeData}
                    onChange={treeData => this.setState({ treeData })}
                    nodeContentRenderer={CustomNodeRenderer}
                    generateNodeProps={(nodeInfo) => ({
                        title: (
                            <div>
                                {this.renderNode(nodeInfo)}
                            </div>
                        )
                    })}
                />
                <Button onClick={() => { this.convertedNodes() }}>Reset</Button>
                <Button onClick={() => { this.getCleanedData() }}>Clean Data</Button>
                <Modal
                    title={"Enter Tag Name"}
                    visible={visible}
                    onCancel={() => { this.onCancelNewNode() }}
                    onOk={() => this.createNewNode()}
                    width='500px'
                >
                    <Input
                        placeholder=""
                        value={nodeTitle}
                        onChange={this.onTitleChange}
                        style={{ fontWeight: 300, fontSize: '12px', marginTop: '10px' }}
                    />
                </Modal>
            </div>
        );
    }
}

export default TagTree; 