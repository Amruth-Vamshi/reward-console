import React, { Component } from 'react'
import { Upload, Icon, message } from 'antd';
import '../styles/places.css'
import csv from 'csv';

const Dragger = Upload.Dragger;



export default class TestUpload extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fileList: []
        }
    }
   
    render() {
    
        var _this = this

     var  props = {
            name: 'file',
            // className: 'upload-list-inline',
            // listType: 'picture',
            className: 'upload-list-csv',
            multiple: true,
            accept: '.csv',
            beforeUpload(file, fileList) {

                const reader = new FileReader();
                reader.onload = () => {
                    csv.parse(reader.result, (err, data) => {
                        console.log(data);
                    });
                };

                reader.readAsBinaryString(file);

                file.status = 'done'
                return false
            },

            action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
            onChange(info) {
                console.log(info)
                let fileList = [...info.fileList];
        
                fileList = fileList.slice(-1);
        
                fileList = fileList.map(file => {
                    if (file.response) {
                      // Component will show file.url as link
                      file.url = file.response.url;
                    }
                    console.log( file)
                    return file;
                  });
              
                  _this.setState({ fileList });
                console.log( fileList)
        
        
                // const status = info.file.status;
                // if (status !== 'uploading') {
                //     console.log(info.file, info.fileList);
                // }
                // if (status === 'done') {
                //     message.success(`${info.file.name} file uploaded successfully.`);
                // } else if (status === 'error') {
                //     message.error(`${info.file.name} file upload failed.`);
                // }
            },
        };

        return (
            <div>
                <Dragger {...props} fileList={this.state.fileList}>
                    <p className="ant-upload-drag-icon">
                        <Icon type="inbox" />
                    </p>
                    <p className="ant-upload-text">Click or drag file to this area to upload</p>
                    <p className="ant-upload-hint">
                        Support for a single or bulk upload. Strictly prohibit from uploading company data or other
                        band files
                  </p>
                </Dragger>

            </div>
        )
    }
}