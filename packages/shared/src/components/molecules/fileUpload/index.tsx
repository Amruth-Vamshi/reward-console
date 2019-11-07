import React, { Component } from 'react'
import { Upload, Button, Icon } from 'antd';
import { Mutation } from 'react-apollo'

class FileUpload extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const props = {
            onChange: this.handleChange,
            multiple: true,
        };
        return (
            <Upload {...props} >
                <Button>
                    <Icon type="upload" /> Upload
                </Button>
            </Upload>
        )
    }
}

export default FileUpload;
