import * as React from 'react';
import { setTimeout } from 'timers';
import DifficultySelectorState from './DifficultySelectorState';
import WorkOutState from './WorkOutState';

class WorkOut extends React.Component<any, WorkOutState> {
    private level: DifficultySelectorState;

    constructor(props: any) {
        super(props);
        this.level = props.history.location.state as DifficultySelectorState;
        this.state = new WorkOutState(this.level.chart, this.level.level);

        this.decreateCountDown();
    }

    public render() {
        return (
            <div>
                <h1>You have 11 minutes start in {this.state.countDown}...</h1>
                <h2>Chart: {this.state.chart}, Level: {this.state.level}</h2>
            </div>
        )
    }

    private decreateCountDown() {
        if (this.state.countDown > 0) {
            setTimeout(() => {
                this.setState({ countDown: (this.state.countDown - 1) });
                this.decreateCountDown();
            }, 1000);
        }
    }
}

export default WorkOut;
