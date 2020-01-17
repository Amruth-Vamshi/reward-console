
import * as React from "react";

import { Col, Row, Spin } from 'antd';
import Preview from "./Preview"
import Controls from "./Controls"
import { graphql, ApolloProviderProps, compose } from "react-apollo";
import { UPDATE_FEEDBACK_UI_CONFIG } from "../../../../../containers/Query";

interface FormDesignProps extends ApolloProviderProps<any> {
    questionnaire?: any
}

interface FormDesignState {
    counter: number,
    isLastQuestion: boolean,
    isFirstQuestion: boolean,
    backgroundColor: string,
    accentColor: string,
    transition: string,
    formStructure: string,
    headerText: string,
    exitMessage: string,
    buttonText: string,
    layoutCode: string
}

class FormDesign extends React.Component<FormDesignProps, FormDesignState> {
    constructor(props: FormDesignProps) {
        super(props)
        this.state = {
            counter: 0,
            isLastQuestion: false,
            isFirstQuestion: false,
            backgroundColor: "#891732",
            accentColor: "#891732",
            transition: "",
            formStructure: "",
            headerText: "",
            exitMessage: "",
            buttonText: "Next",
            layoutCode: ""
        }
    }

    goTopreviousQuestion = () => {
        const { counter } = this.state;
        const newCounter = counter - 1;
        if (newCounter < 0) {
            this.setState({ isFirstQuestion: true })
        } else {
            this.setState({ counter: newCounter, isFirstQuestion: false, isLastQuestion: false })
        }

    }

    onTransitionChange = code => {
        this.setState({
            transition: code
        })
    }

    onLayoutChange = code => {
        this.setState({
            layoutCode: code
        })
    }
    onFormStructureChange = (code) => {
        this.setState({
            formStructure: code
        })
    }

    onColorUpdate = (hex) => {
        this.setState({
            backgroundColor: hex
        })
    }

    onAccentColorUpdate = hex => {
        this.setState({
            accentColor: hex
        })
    }

    nextQuestion = () => {
        const { counter } = this.state;
        const { questionnaire } = this.props;
        const totalQuestion = questionnaire.length;
        const newCounter = counter + 1;
        if (newCounter >= totalQuestion) {
            this.setState({ isLastQuestion: true })
        } else {
            this.setState({ counter: newCounter, isLastQuestion: false, isFirstQuestion: false })
        }


    }
    render() {
        const { questionnaire } = this.props;
        const { counter,
            isLastQuestion,
            isFirstQuestion,
            backgroundColor,
            accentColor,
            buttonText,
            exitMessage,
            formStructure,
            headerText,
            layoutCode,
            transition
        } = this.state;
        return (

            questionnaire && questionnaire[counter] ? (
                <Row >
                    <Col span={17}>
                        <Preview
                            accentColor={accentColor}
                            buttonText={buttonText}
                            exitMessage={exitMessage}
                            formStructure={formStructure}
                            headerText={headerText}
                            layoutCode={layoutCode}
                            transition={transition}
                            color={backgroundColor}
                            isFirstQuestion={isFirstQuestion}
                            question={questionnaire[counter]}
                            nextQuestion={this.nextQuestion}
                            goTopreviousQuestion={this.goTopreviousQuestion}
                            isLastQuestion={isLastQuestion} />
                    </Col>
                    <Col span={7} style={{ height: "inherit", overflow: "scroll" }} >
                        <Controls
                            onAccentColorUpdate={this.onAccentColorUpdate}
                            onFormStructureChange={this.onFormStructureChange}
                            onLayoutChange={this.onLayoutChange}
                            onTransitionChange={() => { }}
                            onCOlorUpdate={this.onColorUpdate} />
                    </Col>

                </Row>) : <Spin />


        )
    }
}
export default compose(
    graphql(
        UPDATE_FEEDBACK_UI_CONFIG, {
        name: "updateFeedbackUiConfig"
    }
    ))(FormDesign);
