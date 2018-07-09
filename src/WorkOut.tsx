import * as React from 'react';
import DifficultySelectorState from './DifficultySelectorState';
import WorkOutState from './WorkOutState';

class WorkOut extends React.Component<any, WorkOutState> {
    private level: DifficultySelectorState;

    constructor(props: any) {
        super(props);
        this.level = props.history.location.state as DifficultySelectorState;
        this.state = new WorkOutState(this.level.chart, this.level.level);
    }

    public render() {
        return (
            <h1>You have 11 minutes start now...</h1>
        )
    }
}

export default WorkOut;
