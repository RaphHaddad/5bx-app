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
                <h3>Exercise {this.props.exercise}</h3>
                <p>Chart: {this.props.chart}, Exercise: {this.props.exercise}</p>
                <h4>Please do {this.state.reps} of:</h4>
                <div className="image-wrapper">
                    <img src={this.state.image} />
                </div>
            </div>
        )
    }

    private setRepsAndImage(exercise: number): ExerciseState {
        const charts = [new Chart(1, [new Level("D-", [2, 3, 4, 2, 100]), new Level("D", [3, 4, 5, 3, 145]), new Level("D+", [4, 5, 6, 3, 175]),
                                      new Level("C-", [6, 7, 8, 4, 205]), new Level("C", [7, 8, 10, 5, 235]), new Level("C+", [8, 9, 12, 6, 260]),
                                      new Level("B-", [10, 11, 13, 7, 280]), new Level("B", [12, 12, 14, 8, 305]), new Level("B+", [14, 13, 15, 9, 320]),
                                      new Level("A-", [16, 15, 16, 11, 335]), new Level("A", [18, 17, 17, 12, 375]), new Level("A+", [20, 18, 18, 13, 100])
                                    ]),
                        new Chart(2, [new Level("D-", [14, 10, 13, 9, 335]), new Level("D", [15, 11, 14, 10, 360]), new Level("D+", [16, 12, 15, 11, 380]),
                                      new Level("C-", [18, 13, 17, 12, 395]), new Level("C", [19, 14, 19, 13, 410]), new Level("C+", [20, 15, 21, 14, 425]),
                                      new Level("B-", [22, 16, 23, 15, 440]), new Level("B", [24, 17, 25, 16, 455]), new Level("B+", [26, 18, 27, 17, 455]),
                                      new Level("A-", [28, 20, 29, 18, 470]), new Level("A", [29, 21, 31, 19, 485]), new Level("A+", [30, 23, 33, 20, 500])
                                    ]),
                        new Chart(3, [new Level("D-", [24, 20, 29, 15, 400]), new Level("D", [24, 21, 30, 15, 415]), new Level("D+", [24, 22, 31, 15, 430]),
                                      new Level("C-", [26, 23, 33, 16, 450]), new Level("C", [26, 24, 34, 17, 465]), new Level("C+", [26, 25, 35, 17, 480]),
                                      new Level("B-", [28, 26, 37, 18, 490]), new Level("B", [28, 27, 39, 19, 500]), new Level("B+", [28, 28, 41, 20, 510]),
                                      new Level("A-", [30, 30, 43, 21, 525]), new Level("A", [30, 31, 45, 22, 540]), new Level("A+", [30, 32, 47, 24, 550])
                                    ]),
                        new Chart(3, [new Level("D-", [24, 20, 29, 15, 400]), new Level("D", [24, 21, 30, 15, 415]), new Level("D+", [24, 22, 31, 15, 430]),
                                      new Level("C-", [26, 23, 33, 16, 450]), new Level("C", [26, 24, 34, 17, 465]), new Level("C+", [26, 25, 35, 17, 480]),
                                      new Level("B-", [28, 26, 37, 18, 490]), new Level("B", [28, 27, 39, 19, 500]), new Level("B+", [28, 28, 41, 20, 510]),
                                      new Level("A-", [30, 30, 43, 21, 525]), new Level("A", [30, 31, 45, 22, 540]), new Level("A+", [30, 32, 47, 24, 550])
                                    ]),
                        new Chart(3, [new Level("D-", [24, 18, 29, 15, 400]), new Level("D", [24, 21, 30, 15, 415]), new Level("D+", [24, 22, 31, 15, 430]),
                                      new Level("C-", [26, 23, 33, 16, 450]), new Level("C", [26, 24, 34, 17, 465]), new Level("C+", [26, 25, 35, 17, 480]),
                                      new Level("B-", [28, 26, 37, 18, 490]), new Level("B", [28, 27, 39, 19, 500]), new Level("B+", [28, 28, 41, 20, 510]),
                                      new Level("A-", [30, 30, 43, 21, 525]), new Level("A", [30, 31, 45, 22, 540]), new Level("A+", [30, 32, 47, 24, 550])
                                    ]),
                        new Chart(4, [new Level("D-", [24, 18, 40, 17, 300]), new Level("D", [24, 18, 40, 19, 315]), new Level("D+", [24, 18, 41, 21, 320]),
                                      new Level("C-", [26, 19, 43, 24, 335]), new Level("C", [26, 19, 43, 26, 345]), new Level("C+", [26, 19, 44, 28, 355]),
                                      new Level("B-", [28, 21, 46, 30, 365]), new Level("B", [28, 21, 46, 32, 375]), new Level("B+", [28, 21, 47, 34, 380]),
                                      new Level("A-", [30, 22, 49, 37, 390]), new Level("A", [30, 22, 49, 40, 395]), new Level("A+", [30, 22, 50, 42, 400])
                                  ]),
                        new Chart(5, [new Level("D-", [24, 26, 39, 30, 375]), new Level("D", [24, 27, 40, 31, 385]), new Level("D+", [24, 28, 41, 32, 400]),
                                      new Level("C-", [26, 30, 42, 34, 410]), new Level("C", [26, 31, 43, 35, 420]), new Level("C+", [26, 32, 44, 36, 435]),
                                      new Level("B-", [28, 34, 45, 38, 445]), new Level("B", [28, 35, 46, 39, 455]), new Level("B+", [28, 36, 47, 40, 465]),
                                      new Level("A-", [30, 38, 48, 42, 475]), new Level("A", [30, 39, 49, 43, 485]), new Level("A+", [30, 40, 50, 44, 500])
                                  ]),
                        new Chart(6, [new Level("D-", [24, 35, 29, 26, 475]), new Level("D", [24, 36, 30, 27, 460]), new Level("D+", [24, 37, 31, 28, 475]),
                                      new Level("C-", [26, 39, 32, 30, 485]), new Level("C", [26, 40, 33, 31, 495]), new Level("C+", [26, 41, 34, 32, 505]),
                                      new Level("B-", [28, 43, 35, 34, 515]), new Level("B", [28, 44, 36, 35, 525]), new Level("B+", [28, 45, 37, 36, 530]),
                                      new Level("A-", [30, 47, 38, 38, 555]), new Level("A", [30, 48, 39, 39, 580]), new Level("A+", [30, 50, 40, 50, 600])
                              ])
                        ];

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
