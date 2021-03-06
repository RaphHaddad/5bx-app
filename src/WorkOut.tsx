import * as moment from 'moment';
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
        this.isFinished = this.isFinished.bind(this);
        this.decreateCountDown();
    }

    public render() {
        return (
            <div>
                <h1>Chart: {this.state.chart}, Level: {this.state.level}</h1>
                {this.state.startExercise ? (
                    <div>
                        {!this.isFinished() ? (
                            <div>
                                <h2>You have {this.state.timeLeft.format("mm:ss")} minutes left...</h2>
                                <Exercise chart={this.state.chart} exercise={this.state.currentExercise} level={this.state.level} />
                                <button className="btn btn-default" onClick={this.nextExercise}>Next Exercise</button>
                            </div>
                        ) : (
                            <h2>finished!</h2>
                        )}
                    </div>
                ) : (
                    <div>
                        {this.state.timeUp ? (
                            <h2>Time is up</h2>
                        ): (
                            <h2>You have 11 minutes start in {this.state.countDown}...</h2>
                        )}
                    </div>
                )}
            </div>
        )
    }

    private isFinished(): boolean {
        return this.state.currentExercise >= 6;
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
            this.setState({ startExercise: true, timeLeft: moment("1100", "mmss") });
            this.countDown();
        }
    }

    private countDown() {
        const timeUp = moment("0000", "mmss");
        if (this.state.timeLeft.isAfter(timeUp)) {
            setTimeout(() => {
                this.setState({ startExercise: true, timeLeft: this.state.timeLeft.subtract(1, "s") });
                if (!this.isFinished()) {
                    this.countDown();
                } else {
                    localStorage.setItem(DifficultySelectorState.localStorage, JSON.stringify(this.level));
                }
            }, 1000);
        } else {
            this.setState({ startExercise: false, timeUp: true });
        }
    }
}

export default WorkOut;
