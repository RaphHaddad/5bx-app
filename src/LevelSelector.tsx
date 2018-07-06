import * as React from 'react';
import { ChangeEvent, FormEvent } from 'react';
import { Redirect } from "react-router-dom";
import LevelSelectorState from './LevelSelectorState';

class LevelSelector extends React.Component<any, LevelSelectorState> {

    constructor(props: any) {
        super(props);
        this.state = new LevelSelectorState();

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
                                <option>A+</option>
                                <option>A</option>
                                <option>A-</option>
                                <option>B+</option>
                                <option>B</option>
                                <option>B-</option>
                                <option>C+</option>
                                <option>C</option>
                                <option>C-</option>
                                <option>D+</option>
                                <option>D</option>
                                <option>D-</option>
                            </select>
                            <input type="submit" value="Submit" />
                        </form>
                    </div>
                ) : (
                    <Redirect to="/WorkOut"/>
                )
        )
    }

    private handleSubmit(event: FormEvent<HTMLFormElement>): void {
        this.setState({isSubmitted: true})
        event.preventDefault();
    }

    private handleChartChange(event: ChangeEvent<HTMLSelectElement>): void {
        this.setState({chart: event.target.value})
    }

    private handleLevelChange(event: ChangeEvent<HTMLSelectElement>): void {
        this.setState({level: event.target.value})
    }
}

export default LevelSelector;
