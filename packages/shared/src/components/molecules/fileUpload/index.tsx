import * as React from 'react'
import { Upload, Button, Icon } from 'antd';
import { Mutation } from 'react-apollo'

interface iProps {

}
class FileUpload extends React.Component<iProps, {}> {
    constructor(props: iProps) {
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
