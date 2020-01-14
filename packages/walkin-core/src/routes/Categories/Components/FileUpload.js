import React, { Component } from "react";
import { Button, Modal, Col, Row, message, Popconfirm, Tooltip } from 'antd';
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size';
import "../style.css"

// Get Bearer Token from UpTyme System
const BASE_URLS = "http://139.59.51.69:4444"
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbXBsb3llZUlkIjozODcwLCJpYXQiOjE1Nzg5OTE1OTh9.2It6zl8LfWu4RvSTLmF-fvQcyhKgdrBh3NE7WuLS_PI"

const MAX_UPLOAD_LIMIT = 1


registerPlugin(FilePondPluginImagePreview, FilePondPluginFileValidateSize)
const serverOptions = {
    url: BASE_URLS + '/uploadSingle',
    process: {
        headers: {
            authorization: token ? `Bearer ${token}` : null
        }
    }
};

class FileUpload extends Component {
    constructor(props) {
        super(props)
        const { availableImage } = this.props
        var allowedImage = 0

        if (availableImage === 0) {
            allowedImage = MAX_UPLOAD_LIMIT
        }
        if ((availableImage >= 1) && (availableImage < MAX_UPLOAD_LIMIT)) {
            allowedImage = (MAX_UPLOAD_LIMIT - availableImage)
        }

        this.state = {
            visible: false,
            uploadingStatus: {},
            isUploading: false,
            files: [],
            disableUploader: false,
            allowedUpload: allowedImage
        }
    }

    // **************** Methods ****************

    showForm(val) {
        this.setState({ visible: val })
    }

    async UploadAllImages() {
        const { files } = this.state
        if (files.length === 0) {
            message.warning("No Images to upload!")
            return
        }

        try {
            var imagePayload = files.map(images => {
                let item = {
                    url: images.secure_url
                };
                return item;
            })

            this.props.onImageUpload(imagePayload);
            message.success('Image uploaded !')
            this.showForm(false)
        }
        catch (err) {
            message.success('Error while uploading')
            console.log("Image Upload Error : ", err);
        }
    }

    //************************* FilePond Methods *******************************

    onRemoveFile = (err, file) => {
        this.setState({
            uploadingStatus: {
                ...this.state.uploadingStatus,
                [file.id]: false
            }
        }, () => {
            this.setState({
                isUploading: Object.values(this.state.uploadingStatus).some(val => val === true)
            });
        });
    }

    removeUploadedFile = (file_id) => {
        let totalFiles = this.state.files.filter(file => file.public_id !== file_id);
        var disableUpload = false
        if (totalFiles.length >= this.state.allowedUpload) {
            disableUpload = true
        }
        else {
            disableUpload = false
        }
        this.setState({
            files: totalFiles,
            disableUploader: disableUpload
        });
    }

    onFileProcess = (error, file) => {
        if (!error) {
            this.setState({
                files: [...this.state.files, JSON.parse(file.serverId)],
                uploadingStatus: {
                    ...this.state.uploadingStatus,
                    [file.id]: false
                }
            }, () => {
                this.pond.removeFile(null, file.id);
                const totalFiles = this.state.files
                var disableUpload = false
                if (totalFiles.length >= this.state.allowedUpload) {
                    disableUpload = true
                }
                else {
                    disableUpload = false
                }
                this.setState({
                    isUploading: Object.values(this.state.uploadingStatus).some(val => val === true),
                    disableUploader: disableUpload
                });
            });
        }
    }

    onFileProcessing = (file, progress) => {
        if (progress > 0) {
            this.setState({
                isUploading: true,
                uploadingStatus: {
                    ...this.state.uploadingStatus,
                    [file.id]: true
                }
            });
        }
    }

    // *********************  Render Methods ************************

    displayProperButton() {

        const { uiType } = this.props

        switch (uiType) {
            case "categoryManagement":
                return <Button className="imgUpload" size="small" onClick={() => { this.showForm(true) }}>Upload Image</Button>
            case "default":
                return <Button className="imgUpload" size="small" onClick={() => { this.showForm(true) }}>Upload Image</Button>
        }
    }


    render() {
        const { allowedUpload, disableUploader, files } = this.state
        const { availableImage, title } = this.props

        return (
            <div>
                {this.displayProperButton()}
                <Modal
                    title={title}
                    visible={this.state.visible}
                    footer={null}
                    onCancel={() => this.showForm(false)}
                    width='500px'
                >

                    <Col span={24}>
                        <Row style={{ marginTop: '0px', justifyContent: 'flex-end', marginLeft: '1px' }}>
                            <span style={{ fontWeight: '100', fontSize: '9px', marginTop: '-10px', marginBottom: '11px' }}>Maximum {allowedUpload} files can be uploaded</span>
                        </Row>
                        {
                            (files.length !== 0) && <Row style={{ paddingBottom: '20px', marginLeft: '1px' }}>
                                {files.map((file, index) => {
                                    return (
                                        <Popconfirm
                                            title="Are you sure to remove this image?"
                                            key={index}
                                            onConfirm={() => { this.removeUploadedFile(file.public_id) }}
                                            onCancel={() => { console.log("") }}
                                            okText="Yes"
                                            cancelText="No"
                                        >
                                            <Tooltip title="Click to remove image">
                                                <img key={file.id} src={file.secure_url} alt="" style={{ backgroundColor: "#e6e6e6", height: '70px', borderRadius: '5px', marginLeft: '20px', marginRight: '20px' }} />
                                            </Tooltip>
                                        </Popconfirm>
                                    )
                                })}
                            </Row>
                        }
                        <Row>
                            <Col span={24}>
                                <FilePond
                                    allowMultiple={true}
                                    maxFiles={allowedUpload}
                                    server={serverOptions}
                                    name="attachment"
                                    allowRevert={false}
                                    acceptedFileTypes={['image/*']}
                                    ref={ref => this.pond = ref}
                                    onprocessfileprogress={this.onFileProcessing}
                                    onprocessfile={this.onFileProcess}
                                    onremovefile={this.onRemoveFile}
                                    allowImagePreview={true}
                                    imagePreviewMaxHeight={50}
                                    imagePreviewMaxWidth={50}
                                    allowFileSizeValidation={true}
                                    maxFileSize={'3MB'}
                                    disabled={disableUploader}
                                >
                                </FilePond>
                            </Col>
                        </Row>
                        <Row style={{ marginTop: '20px', justifyContent: 'flex-start', marginLeft: '1px' }}>
                            <Button size={'default'} onClick={() => { this.showForm(false) }} type="danger">Cancel</Button>
                            <Button size={'default'} onClick={() => { this.UploadAllImages() }} type="primary" ghost>Save</Button>
                        </Row>
                    </Col>

                </Modal>
            </div>
        )
    }
}

const styles = {
    title: {
        fontSize: '10px',
        fontWeight: '300'
    },
    actionRow: {
        marginTop: '30px',
        justifyContent: 'flex-start'
    }
}

export default FileUpload