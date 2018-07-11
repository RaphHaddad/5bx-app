import * as React from 'react';
import ExerciseProps from './ExerciseProps'
import ExerciseState from './ExerciseState';

class Exercise extends React.Component<ExerciseProps, ExerciseState> {
    constructor(props: ExerciseProps) {
        super(props);
    }

    public render() {
        this.state = this.setRepsAndImage(this.props.exercise);
        return (
            <div>
                <h2>Exercise {this.props.exercise}</h2>
                <p>Chart: {this.props.chart}, Exercise: {this.props.exercise}</p>
                <h3>Please do {this.state.reps} of:</h3>
                <img src={this.state.image} />
            </div>
        )
    }

    private setRepsAndImage(exercise: number): ExerciseState {
        const charts = [new Chart(1, [new Level("D-", [2, 3, 4, 2, 100]), new Level("D", [3, 4, 5, 3, 145]), new Level("D+", [4, 5, 6, 3, 175]),
                                      new Level("C-", [6, 7, 8, 4, 205]), new Level("C", [7, 8, 10, 5, 235]), new Level("C+", [8, 9, 12, 6, 260]),
                                      new Level("B-", [10, 11, 13, 7, 280]), new Level("B", [12, 12, 14, 8, 305]), new Level("B+", [14, 13, 15, 9, 320]),
                                      new Level("A-", [16, 15, 16, 11, 335]), new Level("A", [18, 17, 17, 12, 375]), new Level("A+", [20, 18, 18, 13, 100]),
                                    ]),
                        new Chart(2, [new Level("D-", [14, 10, 13, 9, 335]), new Level("D", [15, 11, 14, 10, 360]), new Level("D+", [16, 12, 15, 11, 380]),
                                      new Level("C-", [18, 13, 17, 12, 395]), new Level("C", [19, 14, 19, 13, 410]), new Level("C+", [20, 15, 21, 14, 425]),
                                      new Level("B-", [22, 16, 23, 15, 440]), new Level("B", [24, 17, 25, 16, 455]), new Level("B+", [26, 18, 27, 17, 455]),
                                      new Level("A-", [28, 20, 29, 18, 470]), new Level("A", [29, 21, 31, 19, 485]), new Level("A+", [30, 23, 33, 20, 500]),
                                    ])];

        const level = charts.filter(chart => chart.chartNumber === this.props.chart)[0].levels
                            .filter(x => x.level === this.props.level)[0];

        return new ExerciseState(level.getReps(exercise), `c${this.props.chart}e${exercise}.gif`);
    }
}

class Chart {
    constructor(public chartNumber: number, public levels: Level[]) {
    }
}

class Level {
    constructor(public level: string, public exerciseReps: number[]) {
        if (exerciseReps.length !== 5) {
            throw new Error("the exercise reps must be exactly five");
        }
    }

    public getReps(exerciseNumber: number) : number {
        if (exerciseNumber > 5 || exerciseNumber < 1) {
            throw new Error("exercise number as to be between 1-5");
        }

        return this.exerciseReps[exerciseNumber - 1];
    }
}

export default Exercise
