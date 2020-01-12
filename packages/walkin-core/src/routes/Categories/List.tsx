import * as React from "react";
import { Row, Col, Button, message, Cascader, Input, Icon } from "antd"
import "./style.css"
import { Query, withApollo, ApolloProviderProps } from "react-apollo";
import { RouteComponentProps } from "react-router";
import * as jwt from 'jsonwebtoken';
import { GET_PH_CATEGORIES } from '../../PlatformQueries';
import { element } from "prop-types";

const { Search } = Input;

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
                children: [],
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
            activeCat: ""
        }

        // console.log("PRO : ", this.props, this.props.client)
    }

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

    onCategoryClick(value, index) {
        var data = this.findCategory(value, index)
        console.log("Selected Category : ", data)
        this.setState({ selectedCategory: data, activeCat: value })
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
                    console.log("Category Data Recieved")
                    // console.log("Raw Data : ", res.data.categoriesWithChildren)
                    var final = this.processData(res.data.categoriesWithChildren)
                    console.log("Processed Data : ", final)
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

    onChange(value) {
        var len = (value.length) - 1
        if (value.length > 0) {
            this.setState({ selectedCategoryArr: value, showForm: true }, () => {
                this.onCategoryClick(value[len], len)
            })
        }
        else {
            this.setState({ selectedCategoryArr: value, showForm: false })
        }
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

    // isSelected(val) {
    //     const { selectedCategory } = this.state

    //     console.log("S : ", selectedCategory)
    //     if (selectedCategory.name == val) {
    //         return true
    //     }
    //     else {
    //         return false
    //     }
    // }


    render() {
        const { processedCategoryList, selectedCategoryArr, selectedCategory, activeCat } = this.state

        return (<div>
            <div className="cat-header">Categories Management</div>
            <div className="cat-subheader">Search for a category like "pizza" or explore and choose from the category selector.</div>
            <div className="container">
                <div className="categoryContainer">
                    <Row>
                        <Col span={12}>
                            <Cascader
                                style={{ paddingTop: "6px" }}
                                className="cascaderStyle"
                                options={processedCategoryList}
                                onChange={(val) => { this.onChange(val) }}
                                placeholder="Please select a category"
                            />
                        </Col>
                        <Col span={10} style={{ paddingTop: "6px" }}>
                            <Search
                                placeholder="Search for a category like 'pizza'"
                                enterButton="Search"
                                size="default"
                                onSearch={value => console.log(value)}
                            />
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

                </div>}
            </div>
        </div>)
    }

}

export default withApollo(CategoryList)