import * as React from 'react';
import ExerciseProps from './ExerciseProps'

class Exercise extends React.Component<ExerciseProps, any> {
    constructor(props: ExerciseProps) {
        super(props);

        /* tslint:disable */
        debugger;
        /* tslint:enable */
    }

    public render() {
        return (
            <div>
                <h2>Exercise 1</h2>
                <p>Chart: {this.props.chart}, Level: {this.props.level}, Exercise: {this.props.exercise}</p>
            </div>
        )
    }
}

export default Exercise
