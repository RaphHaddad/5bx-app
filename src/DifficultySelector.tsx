import * as React from 'react';
import { ChangeEvent, FormEvent } from 'react';
import { Redirect } from "react-router-dom";
import DifficultySelectorState from './DifficultySelectorState';

class DifficultySelector extends React.Component<any, DifficultySelectorState> {

    constructor(props: any) {
        super(props);

        
        const previousDifficultyJson = localStorage.getItem("difficultySelector");
        if (previousDifficultyJson) {
            let previousDifficulty = JSON.parse(previousDifficultyJson) as DifficultySelectorState;
            previousDifficulty = new DifficultySelectorState(previousDifficulty.chart, previousDifficulty.level);
            previousDifficulty.isSubmitted = false;
            previousDifficulty.incrementDifficulty();
            this.state = previousDifficulty;
        } else {
            this.state = new DifficultySelectorState("Chart 1", "D-");
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChartChange = this.handleChartChange.bind(this);
        this.handleLevelChange = this.handleLevelChange.bind(this);

    }

    public render() {
        return (
            !this.state.isSubmitted ? (
                    <div>
                    <p>Select Level</p>
                        <form onSubmit={this.handleSubmit}>
                            <label>
                            Chart:
                            </label>
                            <select value={this.state.chart} name="chart" onChange={this.handleChartChange}>
                                <option>Chart 1</option>
                                <option>Chart 2</option>
                                <option>Chart 3</option>
                                <option>Chart 4</option>
                                <option>Chart 5</option>
                                <option>Chart 6</option>
                            </select>
                            <label>
                            Levels:
                            </label>
                            <select value={this.state.level} name="level" onChange={this.handleLevelChange}>
                                <option>D-</option>
                                <option>D</option>
                                <option>D+</option>
                                <option>C-</option>
                                <option>C</option>
                                <option>C+</option>
                                <option>B-</option>
                                <option>B</option>
                                <option>B+</option>
                                <option>A-</option>
                                <option>A</option>
                                <option>A+</option>
                            </select>
                            <input type="submit" value="Submit" />
                        </form>
                    </div>
                ) : (
                    <Redirect to={{
                        pathname: "/WorkOut",
                        state: this.state
                    }} />
                )
        )
    }

    private handleSubmit(event: FormEvent<HTMLFormElement>): void {
        this.setState({isSubmitted: true, "chart": this.state.chart})
        event.preventDefault();
    }

    private handleChartChange(event: ChangeEvent<HTMLSelectElement>): void {
        this.setState({chart: event.target.value})
    }

    private handleLevelChange(event: ChangeEvent<HTMLSelectElement>): void {
        this.setState({level: event.target.value})
    }
}

export default DifficultySelector;
