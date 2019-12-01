import React, { Component } from 'react';
import graphql from "react-apollo/graphql";
import "./index.css";
import { ApolloProviderProps } from 'react-apollo';
import { } from "../../../../../../containers/Query";
interface EventsProps extends ApolloProviderProps<any> {

}

interface EventsState {

}

class Events extends Component<EventsProps, EventsState> {
    constructor(props: EventsProps) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div>

            </div>
        )
    }
}


export default (Events);