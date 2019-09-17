import React, { Component } from 'react';
import { MultipleChoice, OpenText, SingleChoice, OpinionScale, Ranking, RatingScale } from "../Fields"
class BasicForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            multipleChoiceValue: [],
            singleChoiceValue: "",
            openTextValue: "",
            opinionScaleValue: "",
            rankingScaleValue: "",
            ratingScaleValue: ""
        }
    }
    onMultipleChoiceChange = (value) => {

    }
    onSigleChoiceChange = (value) => {

    }
    onOpenTextChange = (value) => {

    }
    onOpinionScaleChange = (value) => {

    }
    onRankingScale = (value) => {

    }
    onRatingScale = (value) => {

    }
    render() {
        return (<h1>Form</h1>);
    }
}

export default BasicForm;