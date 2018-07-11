import * as React from 'react';
import ExerciseProps from './ExerciseProps'
import ExerciseState from './ExerciseState';

class Exercise extends React.Component<ExerciseProps, ExerciseState> {
    private firstLoad: boolean;

    constructor(props: ExerciseProps) {
        super(props);

        this.state = new ExerciseState();

        this.firstLoad = true;
    }

    public render() {

        if (this.firstLoad) {
            this.setRepsAndImage();
            this.firstLoad = false;
        }
        return (
            <div>
                <h2>Exercise {this.props.exercise}</h2>
                <p>Chart: {this.props.chart}, Exercise: {this.props.exercise}</p>
                <h3>Please do {this.state.reps} of:</h3>
                <img src={this.state.image} />
            </div>
        )
    }

    private setRepsAndImage() {
        const charts = [new Chart(1, [new Level("D-", 2, 3, 4, 2, 100), new Level("D", 3, 4, 5, 3, 145), new Level("D+", 4, 5, 6, 3, 175),
                                      new Level("C-", 6, 7, 8, 4, 205), new Level("C", 7, 8, 10, 5, 235), new Level("C+", 8, 9, 12, 6, 260),
                                      new Level("B-", 10, 11, 13, 7, 280), new Level("B", 12, 12, 14, 8, 305), new Level("B+", 14, 13, 15, 9, 320),
                                      new Level("A-", 16, 15, 16, 11, 335), new Level("A", 18, 17, 17, 12, 375), new Level("A+", 20, 18, 18, 13, 100),
                                    ])];

        const level = charts.filter(chart => chart.chartNumber === this.props.chart)[0].levels
                                                  .filter(x => x.level === this.props.level)[0];

        this.setState({reps: level.exercise1Reps});
    }
}

class Chart {
    constructor(public chartNumber: number, public levels: Level[]) {
    }
}

class Level {
    constructor(public level: string, public exercise1Reps: number, public exercise2Reps: number, public exercise3Reps: number, public exercise4Reps: number, public exercise5Reps: number) {
        
    }
}

export default Exercise
