import React, { Component } from "react";
import AutorSizer from "react-virtualized-auto-sizer";
import { VariableSizeList as List } from "react-window";
import { ErrorBoundary, CardBox } from "@walkinsole/walkin-components";
import { Icon, Row, Col, Button } from "antd";

export default class QuestionsList extends Component {
  constructor() {
    super();

  }

  getStyle(oElm, strCssRule) {
    var strValue = "";
    console.log("oElm", document.defaultView.getComputedStyle(oElm))
    if (document.defaultView && document.defaultView.getComputedStyle) {
      strValue = document.defaultView.getComputedStyle(oElm).getPropertyValue(strCssRule);
    }
    else if (oElm.currentStyle) {
      strCssRule = strCssRule.replace(/\-(\w)/g, function (strMatch, p1) {
        return p1.toUpperCase();
      });
      strValue = oElm.currentStyle[strCssRule];
    }
    return strValue;
  }


  getTextHeightWidth = (text, height, width, index) => {
    const canvas = document.createElement("div");
    const creatediv = document.createElement("div");
    creatediv.innerHTML = text;
    creatediv.setAttribute("style", `width:${width}px`)
    creatediv.id = `${index}-randomDiv`
    canvas.style.width = width;
    canvas.style.opacity = -1;
    canvas.append(creatediv)
    document.body.append(canvas);
    const createdDiv = document.getElementById(`${index}-randomDiv`);
    const styles = this.getStyle(createdDiv, "height");
    canvas.remove()
    return Math.floor((styles.replace(/[a-zA-Z]+/, "")));
  }


  getItemSize = (height, width, index) => {
    const { questionnaire } = this.props;
    let itemSize = this.getTextHeightWidth(questionnaire[index].questionText, height, width, index);
    itemSize < 50 ? itemSize = 80 : itemSize = itemSize + 80;
    return itemSize;
  }

  toggleClick = index => {
    const { questionnaire } = this.props;
    this.props.onQuestionSelected(index);
  };

  getRow = (index, style) => {
    const { questionnaire } = this.props;
    return (
      <div style={{ ...style }}>
        <CardBox>
          <div
            onClick={() => {
              this.toggleClick(index);
            }}
            style={{
              cursor: "pointer"
            }}
          >
            {questionnaire[index].questionText}
          </div>
        </CardBox>
      </div>
    );
  };

  render() {
    const { addNewQuestion, questionnaire } = this.props;
    return (
      <ErrorBoundary>
        <AutorSizer>
          {({ height, width }) =>
            questionnaire.length > 0 ? (
              <Row
                style={{
                  height,
                  width
                }}
              >
                {/* <Col span={24}>
                  <Row type="flex" justify="center">
                    <Col>
                      <Button
                        type="dashed"
                        onClick={e => {
                          e.preventDefault();
                          addNewQuestion();
                        }}
                      >
                        <Icon type="plus" /> Add New
                      </Button>
                    </Col>
                  </Row>
                </Col> */}
                <Col span={24}>
                  <Row type="flex">
                    <List
                      estimatedItemSize={120}
                      height={height}
                      itemCount={questionnaire.length}
                      itemSize={this.getItemSize.bind(this, height, width)}
                      ref={this.props.reference}
                      width={width}
                      style={{ paddingBottom: "6rem" }}
                    >
                      {({ index, style }) => {
                        return this.getRow(index, style);
                      }}
                    </List>
                  </Row>
                </Col>
              </Row>
            ) : (
                <Row
                  style={{
                    height,
                    width
                  }}
                >
                  <Col span={24}>
                    <Row type="flex" justify="center">
                      <Col>
                        <Button
                          type="dashed"
                          onClick={e => {
                            e.preventDefault();
                            this.props.addNewQuestion();
                          }}
                        >
                          <Icon type="plus" /> CreateQuestionnaire
                      </Button>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              )
          }
        </AutorSizer>
      </ErrorBoundary>
    );
  }
}
