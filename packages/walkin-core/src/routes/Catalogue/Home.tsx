import * as React from "react";
import { Row, Col } from "antd"
import "./style.css"
import DisplayBox from "./Components/DisplayBox"
import PromoBox from "./Components/PromoBox"
import DraftBox from "./Components/DraftBox"
import ExploreBox from "./Components/ExploreBox"

interface iProps {
}

interface iState {

}

class CatalogueHome extends React.Component<iProps, iState> {
    constructor(props: iProps) {
        super(props);
        this.state = {
        }

    }

    render() {
        return (<div>
            <div className="cat-header">Welcome, Aashish</div>
            <div className="cat-subheader">This is your Dashboard, you can view your tasks and explore areas of your work.</div>
            <div className="cat-infoHolder">
                <Row>
                    <Col>
                        <Col>
                            <Row>
                                <PromoBox
                                    title="Promo Images"
                                    desc="These images show in the app carousel for a defined period of days."
                                    imageSource="https://res.cloudinary.com/servicex-dev/image/upload/v1579080315/servicex/attachments/attachment_1579080313491_pizza_promo.png.png"
                                    btnText="Edit"

                                />
                            </Row>
                            <Row>
                                <Col span={12}>
                                    <DisplayBox
                                        value="35"
                                        heading="Categories"
                                        subheading="Manage food categories like Pizzas, Pastas, Desserts etc."
                                        btnText="Manage"
                                        path=""
                                    />
                                </Col>
                                <Col span={12}>
                                    <DisplayBox
                                        value="2376"
                                        heading="Unique Items (SKUs)"
                                        subheading="Search and view specific items to view and manage description, image etc"
                                        btnText="Explore"
                                        path=""
                                    />
                                </Col>
                            </Row>
                        </Col>
                    </Col>
                    {/* <Col span={8}>
                        <Col>
                            <Row><Col span={24}>
                                <DraftBox
                                    heading="Draft"
                                    list={["2 new categories needs images", "3 new items need images and description", "Promo images ends in 2 days"]}
                                    btnText="See all draft"
                                    path=""
                                />
                            </Col></Row>
                            <Row><Col span={24}>
                                <DisplayBox
                                    value="2"
                                    heading="Catalogues"
                                    subheading="Define catalogues to show in app,including only specific categories"
                                    btnText="Explore"
                                    path=""
                                />
                            </Col></Row>
                        </Col>
                    </Col> */}
                </Row>
            </div>
            {/* <div className="explore">Explore:</div>
            <div className=" options">
                <ExploreBox title="Categories" path="" />
                <ExploreBox title="Items and modifiers" path="" />
                <ExploreBox title="Catalogues" path="" />
            </div> */}
        </div>)
    }

}

export default CatalogueHome;
