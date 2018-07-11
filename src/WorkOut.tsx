import * as React from 'react';
import { setTimeout } from 'timers';
import DifficultySelectorState from './DifficultySelectorState';
import Exercise from './Exercise';
import WorkOutState from './WorkOutState';

class WorkOut extends React.Component<any, WorkOutState> {
    private level: DifficultySelectorState;

    constructor(props: any) {
        super(props);
        this.level = props.history.location.state as DifficultySelectorState;
        this.state = new WorkOutState(parseInt(this.level.chart.replace("Chart ", ""), 10), this.level.level);
        this.nextExercise = this.nextExercise.bind(this);
        this.decreateCountDown();
    }

    public render() {
        return (
            <div>
                <h1>Chart: {this.state.chart}, Level: {this.state.level}</h1>
                {this.state.startExercise ? (
                    <div>
                        {this.state.currentExercise <= 5 ? (
                            <div>
                                <Exercise chart={this.state.chart} exercise={this.state.currentExercise} level={this.state.level} />
                                <div onClick={this.nextExercise}>Next Exercise</div>
                            </div>
                        ) : (
                            <div>finished!</div>
                        )}
                    </div>
                ) : (
                    <h2>You have 11 minutes start in {this.state.countDown}...</h2>
                )}
            </div>
        )
    }

    private nextExercise() {
        this.setState({ currentExercise: (this.state.currentExercise + 1) })
    }

    private decreateCountDown() {
        if (this.state.countDown > 0) {
            setTimeout(() => {
                this.setState({ countDown: (this.state.countDown - 1) });
                this.decreateCountDown();
            }, 1000);
        } else {
            this.setState({ startExercise: true });
        }
    }
}

export default WorkOut;
