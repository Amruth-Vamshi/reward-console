import * as React from "react";
import { Row, Col, Button, message, Cascader } from "antd"
import "./style.css"
import { Query, withApollo, ApolloProviderProps } from "react-apollo";
import { RouteComponentProps } from "react-router";
import * as jwt from 'jsonwebtoken';
import { GET_PH_CATEGORIES } from '../../PlatformQueries';

const options = [
    {
        value: 'zhejiang',
        label: 'Zhejiang',
        children: [
            {
                value: 'hangzhou',
                label: 'Hangzhou',
                children: [
                    {
                        value: 'xihu',
                        label: 'West Lake',
                    },
                ],
            },
        ],
    },
    {
        value: 'jiangsu',
        label: 'Jiangsu',
        children: [
            {
                value: 'nanjing',
                label: 'Nanjing',
                children: [
                    {
                        value: 'zhonghuamen',
                        label: 'Zhong Hua Men',
                    },
                ],
            },
        ],
    },
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

}


class CategoryList extends React.Component<OrganizationInfoProps, iState> {
    constructor(props: OrganizationInfoProps) {
        super(props);
        this.state = {
        }

        // console.log("PRO : ", this.props, this.props.client)
    }

    UNSAFE_componentWillMount() {
        this.getCategories()
    }

    getCategories = () => {
        const jwtToken = localStorage.getItem('jwt')
        const { id, org_id }: any = jwt.decode(jwtToken);
        this.setState({ spin: true, userId: id, org_id });

        if (org_id) {
            this.props.client
                .query({
                    query: GET_PH_CATEGORIES,
                    variables: { catalogId: "1", parentCategoryId: null },
                    fetchPolicy: 'network-only',
                })
                .then(res => {
                    console.log("Category Success : ", res)
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
        console.log(value);
    }


    render() {
        return (<div>
            <div className="cat-header">Categories Management</div>
            <div className="cat-subheader">Search for a category like "pizza" or choose and explore from the category listing below</div>
            <div className="container">
                <div className="categoryContainer">
                    <Row>
                        <Col style={{ paddingTop: "6px", fontSize: "12px", color: "#b3b3b3" }} span={12}>CATEGORIES</Col>
                        <Col span={12}><Button size="small" >Add Category</Button></Col>
                    </Row>
                    <Row>
                        {/* <Cascader options={options} onChange={this.onChange} placeholder="Please select" />, */}
                    </Row>
                </div>
            </div>
        </div>)
    }

}

export default withApollo(CategoryList)