import * as React from "react";
import { Row, Col, Button, message, Cascader, Input, Icon, Breadcrumb, Switch, Modal, Upload } from "antd"
import "./style.css"
import { withApollo, ApolloProviderProps } from "react-apollo";
import { RouteComponentProps } from "react-router";
import * as jwt from 'jsonwebtoken';
import { GET_PH_CATEGORIES, UPDATE_CATEGORY, CREATE_CATEGORY } from '../../PlatformQueries';
import { FILE_UPLOAD } from "../../query/index"
import FileUpload from "./Components/FileUpload"

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
    showCatBtn: boolean
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
                code: "",
                status: true
            },
            visible: false,
            showCatBtn: true
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

    UNSAFE_componentWillMount() {
        this.getCategories()
        this.addCategory()
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
                code: element.code,
                description: element.description,
                status: element.status,
                imageUrl: "",
                children: []
            }
            if (element.extend !== null) {
                if (element.extend.extend_image_url !== undefined) {
                    individual.imageUrl = element.extend.extend_image_url
                }
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
            data.code = selectedCategory.code
            data.image = selectedCategory.imageUrl
            data.status = (selectedCategory.status === "ACTIVE" ? true : false)
            this.setState({ editCategory: data })
        }
        else {

        }
    }

    onCategoryClick(value, index) {
        var data = this.findCategory(value, index)
        const { selectedCategoryArr } = this.state
        console.log("Selected Category : ", data)
        var showBtn = true
        if (selectedCategoryArr.length > 1) {
            if (selectedCategoryArr[selectedCategoryArr.length - 1] == value) {
                showBtn = false
            }
            else {
                showBtn = true
            }
        }
        else {
            showBtn = true
        }
        this.setState({ selectedCategory: data, activeCat: value, editType: "", showCatBtn: showBtn }, () => {
            this.populateForm()
        })
    }

    getCategories = () => {
        const jwtToken = localStorage.getItem('jwt')
        const { org_id }: any = jwt.decode(jwtToken);

        // Core : PH_SQUARE_1
        // Dev : PO_SQUARE

        if (org_id) {
            this.props.client
                .query({
                    query: GET_PH_CATEGORIES,
                    variables: { catalogId: "2", categoryCode: "PO_SQUARE" },
                    fetchPolicy: 'network-only',
                })
                .then(res => {
                    var final = this.processData(res.data.categoriesWithChildren)
                    console.log("Raw Data : ", res.data.categoriesWithChildren)
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

    onSwitchChange(val) {

        const { editCategory } = this.state
        var data = editCategory
        data.status = val
        this.setState({ editCategory: data })

    }

    addCategory() {
        const { selectedCategoryArr } = this.state
        var data = {
            id: "",
            name: "",
            desc: "",
            image: "",
            code: "",
            status: true
        }
        if (selectedCategoryArr.length > 0) {
            // Add a sub category

            this.setState({ editType: "subcategory", editCategory: data, showForm: true })
        }
        else {
            // Add a Category

            this.setState({ editType: "category", editCategory: data, showForm: true })
        }
    }

    onFilterChange(value, selectedOptions) {
        var len = (value.length) - 1
        var data = {
            id: "",
            name: "",
            desc: "",
            image: "",
            code: "",
            status: true
        }
        if (value.length > 0) {
            this.setState({ selectedCategoryArr: value, showForm: true }, () => {
                this.onCategoryClick(value[len], len)
            })
        }
        else {
            this.setState({
                selectedCategoryArr: value, showForm: false, editCategory: data, selectedCategory: null, activeCat: ""
            })
        }
    }

    cancelForm() {
        const { selectedCategoryArr, activeCat, editType, editCategory, selectedCategory } = this.state

        // this.setState({
        //     showForm: false,
        //     selectedCategoryArr: [],
        //     editType: "",
        //     selectedCategory: null,
        //     activeCat: ""
        // })

        var data = {
            id: "",
            name: "",
            desc: "",
            image: "",
            code: "",
            status: true
        }

        if (selectedCategory !== null && editType == "") {
            this.populateForm()
        }

        if (selectedCategory !== null && editType !== "") {
            this.setState({ editCategory: data })
        }

        if (selectedCategory == null && editType !== "") {
            this.setState({ editCategory: data })
        }


    }

    saveData() {
        const { selectedCategoryArr, activeCat, editType, editCategory, selectedCategory, rawData } = this.state

        const jwtToken = localStorage.getItem('jwt')
        const { org_id }: any = jwt.decode(jwtToken);

        var vl = (editCategory.name).trim()
        var vi = (editCategory.code).trim()

        if (vl == "") {
            message.warn("Please provide a valid category name to proceed!")
            return;
        }

        if (vi == "") {
            message.warn("Please provide a valid category code to proceed!")
            return;
        }

        if (org_id) {

            if (selectedCategory !== null && editType == "") {

                // Updating already existing Category or subcategory

                // console.log("Update Category : ", activeCat)
                // console.log("Saved Data : ", selectedCategory)
                // console.log("Edited Data : ", editCategory)

                var updatePayload = {
                    id: selectedCategory.id,
                    name: editCategory.name,
                    description: editCategory.desc,
                    code: editCategory.code,
                    status: (editCategory.status == true ? "ACTIVE" : "INACTIVE"),
                    organizationId: org_id,
                    extend: JSON.stringify({ "extend_image_url": editCategory.image })
                }

                console.log("Update Payload : ", updatePayload)

                this.props.client.mutate({
                    mutation: UPDATE_CATEGORY,
                    variables: { input: updatePayload }
                })
                    .then(({ data }) => {
                        console.log("Success : ", data)
                        message.success("Category Updated!")
                        this.getCategories()
                    })
                    .catch(error => {
                        console.log("Update Error : ", error)
                        message.error("Error while updating")
                    })
            }

            if (selectedCategory !== null && editType !== "") {
                // console.log("Add Sub Category : ", editCategory.name)
                // console.log("Parent Data : ", selectedCategory)
                // console.log("New Data : ", editCategory)

                // Creating a subcategory

                var createSubPayload = {
                    name: editCategory.name,
                    description: editCategory.desc,
                    status: (editCategory.status == true ? "ACTIVE" : "INACTIVE"),
                    organizationId: org_id,
                    code: editCategory.code,
                    catalogId: "2",
                    parentId: selectedCategory.id,
                    extend: JSON.stringify({ "extend_image_url": editCategory.image })
                }

                console.log("create Subcategory Payload : ", createSubPayload)

                this.props.client.mutate({
                    mutation: CREATE_CATEGORY,
                    variables: { input: createSubPayload }
                })
                    .then(({ data }) => {
                        console.log("Create Success : ", data)
                        message.success("Sub Category Created!")
                        this.getCategories()
                    })
                    .catch(error => {
                        console.log("Create Error : ", error)
                        message.error("Error while creating")
                    })

            }

            if (selectedCategory == null && editType !== "") {
                // console.log("Add Category : ", editCategory.name)
                // console.log("New Data : ", editCategory)

                // Creating a root category

                var createCategoryPayload = {
                    name: editCategory.name,
                    description: editCategory.desc,
                    status: (editCategory.status == true ? "ACTIVE" : "INACTIVE"),
                    organizationId: org_id,
                    code: editCategory.code,
                    catalogId: "2",
                    parentId: rawData.id,
                    extend: JSON.stringify({ "extend_image_url": editCategory.image })
                }

                console.log("create Root Category Payload : ", createCategoryPayload)

                this.props.client.mutate({
                    mutation: CREATE_CATEGORY,
                    variables: { input: createCategoryPayload }
                })
                    .then(({ data }) => {
                        console.log("Create Success : ", data)
                        message.success("Sub Category Created!")
                        this.getCategories()
                    })
                    .catch(error => {
                        console.log("Create Error : ", error)
                        message.error("Error while creating")
                    })
            }
        }
    }

    handleUploadedImage = (val) => {
        const { editCategory } = this.state
        var data = editCategory
        data.image = val[0].url

        this.setState({ editCategory: data })
    }

    resetImage() {
        const { editCategory, selectedCategory, editType } = this.state
        var data = editCategory
        if (selectedCategory !== null && editType == "") {
            data.image = selectedCategory.imageUrl
        }
        else {
            data.image = ""
        }
        this.setState({ editCategory: data })
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

    onImageChange({ target: { value } }) {
        const { editCategory } = this.state
        var data = editCategory
        data.image = value
        this.setState({ editCategory: data })
    }

    onCodeChange({ target: { value } }) {
        const { editCategory } = this.state
        var data = editCategory
        data.code = value
        this.setState({ editCategory: data })
    }


    displayRender = (labels, selectedOptions) =>
        labels.map((label, i) => {
            const option = selectedOptions[i];
            if (i === labels.length - 1) {
                return <span key={option.value}>{label}</span>;
            }
            return <span key={option.value}>All / {label} / </span>;
        });

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
        const { processedCategoryList, selectedCategoryArr, selectedCategory, activeCat, editCategory, showCatBtn } = this.state

        return (<div>
            <div className="cat-header">Category Management</div>
            <div className="cat-subheader">Search for a category like "pizza" or explore and choose from the category selector.</div>
            <div className="container">
                <div className="categoryContainer">
                    <Row style={{ paddingBottom: "15px" }}>
                        <Col span={12}>
                            <Cascader
                                options={processedCategoryList}
                                style={{ paddingTop: "6px" }}
                                className="cascaderStyle"
                                value={selectedCategoryArr}
                                displayRender={this.displayRender}
                                onChange={(value, selectedOptions) => { this.onFilterChange(value, selectedOptions) }}
                                placeholder="Select or Search for a category like 'pizza'"
                                showSearch={{ filter }}
                            />
                        </Col>
                        <Col span={10} style={{ paddingTop: "6px" }}></Col>
                    </Row>
                    {((selectedCategory !== null && selectedCategoryArr.length > 0 && showCatBtn == true) || (selectedCategoryArr.length === 0)) && <Row>
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
                            <Button className="cancelBtn" type="danger" onClick={() => { this.cancelForm() }}>Reset</Button>
                        </Col>
                    </Row>
                    <Row className="formDetail">
                        <Col span={12}>
                            <div style={{ marginLeft: "15px", paddingBottom: "20px" }}>
                                <Row className="formTitle">Category Name<span className="mandatoryField">*</span></Row>
                                <Row>
                                    <Input
                                        value={editCategory.name}
                                        placeholder=""
                                        onChange={(val) => { this.onNameChange(val) }}
                                    />
                                </Row>
                            </div>
                            <div style={{ marginLeft: "15px", paddingBottom: "20px" }}>
                                <Row className="formTitle">Category Code<span className="mandatoryField">*</span></Row>
                                <Row>
                                    <Input
                                        value={editCategory.code}
                                        placeholder=""
                                        onChange={(val) => { this.onCodeChange(val) }}
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
                                        {editCategory.image !== "" && <img className="catImage" src={editCategory.image} />}
                                        {editCategory.image == "" && <img className="catImage" src={require('./Assets/add_image.png')} />}
                                    </Col>
                                    <Col span={16}>
                                        <Row className="imgLink">
                                            <Input
                                                size="small"
                                                placeholder=""
                                                value={editCategory.image}
                                                onChange={(val) => { this.onImageChange(val) }}
                                            />
                                        </Row>
                                        <Row>
                                            {/* <Button className="imgUpload" size="small" onClick={() => { this.setState({ visible: true }) }}>Upload Image</Button> */}
                                            <FileUpload uiType={"categoryManagement"} availableImage={0} onImageUpload={this.handleUploadedImage} title="Upload Category Image" />
                                        </Row>
                                        <Row><Button onClick={() => { this.resetImage() }} className="imgReset" size="small" type="link">Reset to Default</Button></Row>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="imageDesc">* Maximum file size allowed is 1 MB</Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </div>}
            </div>
        </div>)
    }

}

function filter(inputValue, path) {
    return path.some(option => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1);
}

export default withApollo(CategoryList)