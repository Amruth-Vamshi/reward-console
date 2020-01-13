import * as React from "react";
import { Row, Col, Button, message, Cascader, Input, Icon, Breadcrumb, Switch, Modal, Upload } from "antd"
import "./style.css"
import { Query, withApollo, ApolloProviderProps } from "react-apollo";
import { RouteComponentProps } from "react-router";
import * as jwt from 'jsonwebtoken';
import { GET_PH_CATEGORIES } from '../../PlatformQueries';
import { FILE_UPLOAD } from "../../query/index"

const { Search } = Input;
const { TextArea } = Input;

const options = [
    {
        value: 'pizza',
        label: 'Pizza',
        data: {},
        children: [
            {
                value: 'pizza vegan',
                label: 'Pizza Vegan',
                data: {},
                children: [
                    {
                        value: 'mushroom',
                        label: 'Mushroom',
                        data: {},
                        children: []
                    }
                ]
            },
        ],
    },
    {
        value: 'chicken wings',
        label: 'Chicken Wings',
        data: {},
        children: [
            {
                value: 'spicy',
                label: 'Spicy',
                data: {},
                children: [],
            },
        ],
    },
    {
        value: 'desserts',
        label: 'Desserts',
        data: {},
        children: []
    }
];


interface OrganizationRouterProps {
    id: string;
}

interface OrganizationCacheProps {
    data: object;
}

interface OrganizationInfoProps
    extends ApolloProviderProps<OrganizationCacheProps>,
    RouteComponentProps<OrganizationRouterProps> {
    organization: object;
    loading: boolean;
    error: string;
}

interface iState {
    selectedCategoryArr: any
    showForm: boolean
    editType: string
    processedCategoryList: any
    rawData: any
    selectedCategory: any
    activeCat: string
    editCategory: any
    visible: boolean
    imageUrl: any
    loading: boolean
}


class CategoryList extends React.Component<OrganizationInfoProps, iState> {
    constructor(props: OrganizationInfoProps) {
        super(props);
        this.state = {
            selectedCategoryArr: [],
            showForm: false,
            editType: "",
            processedCategoryList: [],
            rawData: {},
            selectedCategory: null,
            activeCat: "",
            editCategory: {
                id: "",
                name: "",
                desc: "",
                image: "",
                status: true
            },
            visible: false,
            loading: false,
            imageUrl: ""
        }
    }


    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    // onCSVUpload = () => {
    //     this.setState({ visible: true }, async () => {
    //         if (this.state.csvFile) {
    //             let file = this.state.csvFile;
    //             await this.props.client.mutate({
    //                 mutation: FILE_UPLOAD,
    //                 variables: { file: file }
    //             })
    //                 .then(({ data }) => {
    //                     console.log("Success : ", data)
    //                 })
    //                 .catch(error => {
    //                     console.log("Image Error : ", error)
    //                 });
    //         }
    //     });
    // };

    handleChange = info => {
        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, imageUrl =>
                this.setState({
                    imageUrl,
                    loading: false,
                }, async () => {
                    let file = imageUrl;
                    console.log("Image Data : ", imageUrl)
                    console.log("Image Details : ", info.file)
                    await this.props.client.mutate({
                        mutation: FILE_UPLOAD,
                        variables: { input: { file: file, description: "test_image", fileSystemId: "6", organizationId: "5d0c0277-2128-48bd-9b46-e3614c0f3141" } }
                    })
                        .then(({ data }) => {
                            console.log("Success : ", data)
                        })
                        .catch(error => {
                            console.log("Image Error : ", error)
                        })
                }),
            );
        }
    };

    UNSAFE_componentWillMount() {
        this.getCategories()
    }

    processData(data) {
        var arr = []
        var el = data.children
        el.forEach((element) => {
            var individual = {
                id: element.id,
                name: element.name,
                value: element.name,
                label: element.name,
                description: element.description,
                status: element.status,
                children: []
            }
            if (element.children !== undefined) {
                individual.children = (element.children.length > 0 ? this.processData(element) : [])
            }
            arr.push(individual)
        })
        return arr
    }

    findCategory(value, index) {
        const { processedCategoryList, selectedCategoryArr } = this.state
        if (index === 0) {
            var final = null
            processedCategoryList.forEach((element) => {
                if (element.name == value) {
                    final = element
                }
            })
            return final
        }
        if (index === 1) {
            var final = null
            var term = selectedCategoryArr[0]
            processedCategoryList.forEach((element) => {
                if (element.name == term) {
                    var el = element.children
                    el.forEach((ele) => {
                        if (ele.name == value) {
                            final = ele
                        }
                    })
                }
            })
            return final
        }
    }

    populateForm() {
        const { activeCat, editCategory, editType, selectedCategory } = this.state

        if (editType == "") {
            var data = editCategory
            data.id = selectedCategory.id
            data.name = selectedCategory.name
            data.desc = selectedCategory.description
            data.status = (selectedCategory.status === "ACTIVE" ? true : false)
            this.setState({ editCategory: data })
        }
        else {

        }
    }

    onCategoryClick(value, index) {
        var data = this.findCategory(value, index)
        console.log("Selected Category : ", data)
        this.setState({ selectedCategory: data, activeCat: value, editType: "" }, () => {
            this.populateForm()
        })
    }

    getCategories = () => {
        const jwtToken = localStorage.getItem('jwt')
        const { org_id }: any = jwt.decode(jwtToken);

        if (org_id) {
            this.props.client
                .query({
                    query: GET_PH_CATEGORIES,
                    variables: { catalogId: "2", categoryCode: "PO_SQUARE" },
                    fetchPolicy: 'network-only',
                })
                .then(res => {
                    var final = this.processData(res.data.categoriesWithChildren)
                    this.setState({ processedCategoryList: final, rawData: res.data.categoriesWithChildren })
                })
                .catch(err => {
                    message.error('ERROR');
                    console.log('Failed to get Category Details' + err);
                });
        } else {
            console.log('Error getting JwtData');
        }
    };

    // onChange(value) {

    //     var len = (value.length) - 1
    //     var data = {
    //         id: "",
    //         name: "",
    //         desc: "",
    //         image: "",
    //         status: true
    //     }
    //     if (value.length > 0) {
    //         this.setState({ selectedCategoryArr: value, showForm: true }, () => {
    //             this.onCategoryClick(value[len], len)
    //         })
    //     }
    //     else {
    //         this.setState({
    //             selectedCategoryArr: value, showForm: false, editCategory: data
    //         })
    //     }
    // }

    onSwitchChange(val) {

        const { editCategory } = this.state
        var data = editCategory
        data.status = val
        this.setState({ editCategory: data })

    }

    addCategory() {
        const { selectedCategoryArr } = this.state
        console.log("Option to add a category clicked")
        if (selectedCategoryArr.length > 0) {
            console.log("Add a sub category")
            this.setState({ editType: "subcategory", showForm: true })
        }
        else {
            console.log("Add a Category")
            this.setState({ editType: "category", showForm: true })
        }
    }

    onFilterChange(value, selectedOptions) {
        var len = (value.length) - 1
        var data = {
            id: "",
            name: "",
            desc: "",
            image: "",
            status: true
        }
        if (value.length > 0) {
            this.setState({ selectedCategoryArr: value, showForm: true }, () => {
                this.onCategoryClick(value[len], len)
            })
        }
        else {
            this.setState({
                selectedCategoryArr: value, showForm: false, editCategory: data
            })
        }
    }

    cancelForm() {
        this.setState({
            showForm: false,
            selectedCategoryArr: [],
            editType: "",
            selectedCategory: null,
            activeCat: ""
        })
    }

    saveData() {
        console.log("Save Data")
    }

    onNameChange({ target: { value } }) {
        const { editCategory } = this.state
        var data = editCategory
        data.name = value
        this.setState({ editCategory: data })
    }

    onDescChange({ target: { value } }) {
        const { editCategory } = this.state
        var data = editCategory
        data.desc = value
        this.setState({ editCategory: data })
    }

    getBreadCrumb() {
        const { selectedCategoryArr, activeCat, editType } = this.state

        var crumbArr = []
        var isPush = true
        selectedCategoryArr.forEach((element) => {
            if (isPush) {
                crumbArr.push(element)
            }
            if (element === activeCat) {
                isPush = false
            }

        })

        if (selectedCategoryArr.length === 0) {
            return (
                <Breadcrumb className="breadCrumbParent">
                    <Breadcrumb.Item>All</Breadcrumb.Item>
                    {
                        (editType !== "") && <Breadcrumb.Item key={9890}><span style={{ color: "#038FDE" }}>New Category</span></Breadcrumb.Item>
                    }
                </Breadcrumb>
            )
        }
        else {
            return (
                <Breadcrumb className="breadCrumbParent">
                    <Breadcrumb.Item key={0}>All</Breadcrumb.Item>
                    {crumbArr.map((element, index) => {
                        return <Breadcrumb.Item key={index + 1}>{element}</Breadcrumb.Item>
                    })}
                    {
                        (editType !== "") && <Breadcrumb.Item key={9890}><span style={{ color: "#038FDE" }}>New Category</span></Breadcrumb.Item>
                    }
                </Breadcrumb>
            )
        }
    }

    render() {
        const { processedCategoryList, selectedCategoryArr, selectedCategory, activeCat, editCategory, imageUrl } = this.state

        const uploadButton = (
            <div>
                <Icon type={this.state.loading ? 'loading' : 'plus'} />
                <div className="ant-upload-text">Upload</div>
            </div>
        );

        return (<div>
            <div className="cat-header">Categories Management</div>
            <div className="cat-subheader">Search for a category like "pizza" or explore and choose from the category selector.</div>
            <div className="container">
                <div className="categoryContainer">
                    <Row style={{ paddingBottom: "15px" }}>
                        <Col span={12}>
                            {/* <Cascader
                                style={{ paddingTop: "6px" }}
                                value={selectedCategoryArr}
                                className="cascaderStyle"
                                options={processedCategoryList}
                                onChange={(val) => { this.onChange(val) }}
                                placeholder="Please select a category"
                            /> */}
                            <Cascader
                                options={processedCategoryList}
                                style={{ paddingTop: "6px" }}
                                className="cascaderStyle"
                                value={selectedCategoryArr}
                                onChange={(value, selectedOptions) => { this.onFilterChange(value, selectedOptions) }}
                                placeholder="Select or Search for a category like 'pizza'"
                                showSearch={{ filter }}
                            />
                        </Col>
                        <Col span={10} style={{ paddingTop: "6px" }}>
                            {/* <Search
                                placeholder="Search for a category like 'pizza'"
                                enterButton="Search"
                                size="default"
                                onSearch={value => console.log(value)}
                            /> */}
                            {/* <Cascader
                                options={processedCategoryList}
                                // value={selectedCategoryArr}
                                onChange={(value, selectedOptions) => { this.onFilterChange(value, selectedOptions) }}
                                placeholder="Search for a category like 'pizza'"
                                showSearch={{ filter }}
                            /> */}
                        </Col>
                    </Row>
                    {((selectedCategory !== null && selectedCategoryArr.length > 0) || (selectedCategoryArr.length === 0)) && <Row>
                        <Col style={{ paddingTop: "6px", fontSize: "12px", color: "#b3b3b3" }} span={5}>Select a category to view/edit</Col>
                        <Col span={5}><Button className="addBtn" size="small" onClick={() => { this.addCategory() }} >{(this.state.selectedCategoryArr.length > 0) ? "Add SubCategory" : "Add Category"}</Button></Col>
                    </Row>}
                </div>
                {(this.state.selectedCategoryArr.length > 0) && <div className="selectedDiv">
                    {selectedCategoryArr.map((element, index) => {
                        if (index === 0) {
                            return <div key={index} onClick={() => { this.onCategoryClick(element, index) }} className={(activeCat == element ? "selectedActiveItem" : "selectedItem")}>{element}</div>
                        }
                        else {
                            return <div key={index}>
                                <Icon style={{ float: "left", paddingLeft: "10px", paddingRight: "10px", paddingTop: "12px" }} type="caret-right" />
                                <div onClick={() => { this.onCategoryClick(element, index) }} className={(activeCat == element ? "selectedActiveItem" : "selectedItem")}>{element}</div>
                            </div>
                        }
                    })}
                </div>}
                {(this.state.showForm === true) && <div className="categoryForm">
                    <Row className="formHeader">
                        <Col span={16} style={{ paddingLeft: "35px" }}>
                            <Row><span style={{ fontSize: "18px", fontWeight: 500 }}>Category :</span> {this.getBreadCrumb()}</Row>
                            <Row style={{ marginTop: "10px" }}><Switch size="small" checked={editCategory.status} onChange={(val) => { this.onSwitchChange(val) }} /> <p className={(editCategory.status == true ? "activeState" : "inActiveState")}>{(editCategory.status == true ? "Active" : "Inactive")}</p></Row>
                        </Col>
                        <Col span={8}>
                            <Button className="saveBtn" type="ghost" onClick={() => { this.saveData() }}>Save</Button>
                            <Button className="cancelBtn" type="danger" onClick={() => { this.cancelForm() }}>Cancel</Button>
                        </Col>
                    </Row>
                    <Row className="formDetail">
                        <Col span={12}>
                            <div style={{ marginLeft: "15px", paddingBottom: "20px" }}>
                                <Row className="formTitle">Category Name</Row>
                                <Row>
                                    <Input
                                        value={editCategory.name}
                                        placeholder=""
                                        onChange={(val) => { this.onNameChange(val) }}
                                    />
                                </Row>
                            </div>
                            <div style={{ marginLeft: "15px", paddingBottom: "10px" }}>
                                <Row className="formTitle">Description</Row>
                                <Row>
                                    <TextArea
                                        value={editCategory.desc}
                                        onChange={(val) => { this.onDescChange(val) }}
                                        placeholder=""
                                        autoSize={{ minRows: 3, maxRows: 5 }}
                                    />
                                </Row>
                            </div>
                        </Col>
                        <Col span={12}>
                            <div style={{ marginLeft: "15px" }}>
                                <Row className="formTitle">Image</Row>
                                <Row>
                                    <Col span={8}>
                                        <img className="catImage" src={"https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/fe5765f54a58c837ccd85e879951005a"} />
                                    </Col>
                                    <Col span={16}>
                                        <Row className="imgLink"><Input size="small" placeholder="http//www.google.com" /></Row>
                                        <Row><Button className="imgUpload" size="small" onClick={() => { this.setState({ visible: true }) }}>Upload Image</Button></Row>
                                        <Row><Button className="imgReset" size="small" type="link">Reset to Default</Button></Row>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </div>}
            </div>
            <Modal
                title="Upload Image"
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
            >
                <Upload
                    name="avatar"
                    listType="picture-card"
                    className="avatar-uploader"
                    showUploadList={false}
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    beforeUpload={beforeUpload}
                    onChange={this.handleChange}
                >
                    {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                </Upload>
            </Modal>
        </div>)
    }

}

function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}

function beforeUpload(file) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
}

function filter(inputValue, path) {
    return path.some(option => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1);
}

export default withApollo(CategoryList)