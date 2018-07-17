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
                    <p>{this.state.description}</p>
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

        const descriptions = new Map<string, string>();
        descriptions["c1e1"] = "Feet astride, arms upward. Forward bend to floor touching then stretch upward and backward bend. Do not strain to keep knees straight.";
        descriptions["c1e2"] = "Back lying, feet 6\" apart, arms at sides. Sit up just far enough to see your heels. Keep legs straight, head and shoulders must clear the floor.";
        descriptions["c1e3"] = "Front lying, palms placed under the thighs. Raise head and one leg, repeat using legs alternately. Keep leg straight at the knee, thighs must clear the palms. (Count one each time second leg touches floor.)";
        descriptions["c1e4"] = "Front lying, hands under the shoulders, palms flat on the floor. Straighten arms lifting upper body, keeping the knees on the floor. Bend arms to lower body. Keep body straight from the knees, arms must be fully extended, chest must touch floor to complete one movement.";
        descriptions["c1e5"] = "Stationary run - (count a step each time left foot touches floor. Lift feet approximately 4 inches off floor). Every 75 steps do 10 \"scissor jumps\". Repeat this sequence until required number of steps is completed. Scissor jumps - Stand with right leg and left arm extended forward, and left leg and right arm extended backward. Jump up - change position of arms and legs before landing. Repeat (arms shoulder high).";

        descriptions["c2e1"] = "Feet astride, arms upward. Touch floor and press (bounce) once then stretch upward and backward bend. Do not strain to keep knees straight.";
        descriptions["c2e2"] = "Back lying, feet 6\" apart, arms at sides. Sit up to vertical position, keep feet on floor even if it is necessary to hook them under a chair. Allow knees to bend slightly.";
        descriptions["c2e3"] = "Front lying, palms placed under the thighs. Raise head, shoulders and both legs. Keep legs straight, both thighs must clear the palms.";
        descriptions["c2e4"] = "Front lying, hands under the shoulders, palms flat on the floor. Straighten arms to lift body with only palms and toes on the floor. Back straight. Chest must touch floor for each completed movement after arms have been fully extended.";
        descriptions["c2e5"] = "Stationary run - (count a step each time left foot touches floor. Lift feet approximately 4 inches off floor). Every 75 steps do 10 \"astride jumps\". Repeat this sequence until required number of steps is completed. Astride jumps - feet toghether, arms at side. Jump and land with feet astride and arms raised sideways to slightly above shoulder height. Return with a jump to the starting position for count of one. Keep arms straight.";

        descriptions["c3e1"] = "Feet astride, arms upward. Touch floor 6\" outside left foot, again between feet and press once then 6\" outside right foot, bend backward as far as possible, repeat, reverse direction after half the number of counts. Do not strain to keep knees straight, return to erect position.";
        descriptions["c3e2"] = "Back lying, feet 6\" apart, arms clasped behind head. Sit up to vertical position, keep feet on floor hook feet under a chair, etc., only if necessary.";
        descriptions["c3e3"] = "Front lying, hands interlocked behind the back. Lift head, shoulders, chest and both legs as high as possible. Keep legs straight, and raise chest and both thighs completely off floor.";
        descriptions["c3e4"] = "Front lying, hands under the shoulders, palms flat on the floor. Touch chin to floor in front of hands--Touch forehead to floor behind hands before returning to up position. There are three definite movements, chin, forehead, arms straightened. Do not do in one continuous movement.";
        descriptions["c3e5"] = "Stationary run - (count a step each time left foot touches floor. Lift feet approximately 4 inches off floor). Every 75 steps do 10 \"half knee bends\". Repeat this sequence until required number of steps is completed. Half knee bends--Feet together, hands on hips, knees bent to form an angle of about 110 degrees. Do not bend knees past a right angle. Straighten to upright position, raising heel off floor, return to starting position each time. Keep feet in contact with floor--the back upright and straight at all times.";

        descriptions["c4e1"] = "Feet astride, arms upward. Touch floor outside left foot, between feet, press once then outside right foot, circle bend backwards as far as possible, reverse direction after half the number of counts. Do not strain to keep knees straight. Keep arms above head and make full circle, bending backward past vertical each time.";
        descriptions["c4e2"] = "Back lying, legs straight, feet together, arms straight overhead. Sit up and touch the toes keeping the arms and legs straight. Use chair to hook feet under only if necessary.";
        descriptions["c4e3"] = "Front lying, hands and arms stretched sideways. Lift head, shoulders, arms, chest and both legs as high as possible. Keep legs straight, raise chest and both thighs completely off floor.";
        descriptions["c4e4"] = "Front lying, palms of hands flat on floor, approximately 1 foot from ears directly to side of head, Straighten arms to lift body. Chest must touch floor of each completed movement.";
        descriptions["c4e5"] = "Stationary run - (count a step each time left foot touches floor. Lift feet approximately 4 inches off floor). Every 75 steps do 10 \"semi-squat jumps\". Repeat this sequence until required number of steps is completed. Semi-squat jumps--Drop to a half crouch position with hands on knees and arms straight, keep back as straight as possible, right foot slightly ahead of left. Jump to upright position with body straight and feet leaving floor, Reverse position of feet before landing. Return to half crouch position and repeat.";

        descriptions["c5e1"] = "Feet astride, arms upward, hands clasped, arms straight. Touch floor outside left foot, between feet, press once then outside right foot, circle bend backwards as far as possible, reverse direction after half the number of counts. Do not strain to keep knees straight. Keep arms above head and make full circle, bending backward past vertical each time.";
        descriptions["c5e2"] = "Back lying, legs straight, feet together, hands clasped behind head. Sit up and raise legs in bent position at same time twist to touch right elbow to left knee. This completes one movement. Alternate the direction of twist each time. Keep feet off floor when elbow touches knee.";
        descriptions["c5e3"] = "Front lying, arms extended overhead. Raise arms, head, chest and both legs as high as possible. Keep legs and arms straight, chest and both thighs completely off floor.";
        descriptions["c5e4"] = "Front lying, hands under shoulder, palms flat on floor. Push off floor and clap hands before returning to starting position. keep body straight during the entire movement. Hand clap must be heard.";
        descriptions["c5e5"] = "Stationary run - (count a step each time left foot touches floor. Lift feet approximately 4 inches off floor). Every 75 steps do 10 \"semi-spread eagle jumps\". Repeat this sequence until required number of steps is completed. Semi-spread eagle jumps--Feet together, drop to a half crouch position hands on knees with arms straight. Jump up to feet astride swing arms overhead in mid-air, return directly to starting ppositionon landing. Raise hands above head level, spread feet at least shoulder width apart in astride position before landing with feet together.";

        descriptions["c6e1"] = "Feet astride, arms upward, hands reversed clasped, arms straight. Touch floor outside left foot, between feet, press once then outside right foot, circle bend backwards as far as possible, reverse direction after half the number of counts. Keeps hands reversed clasped at all times.";
        descriptions["c6e2"] = "Back lying, legs straight, feet together, hands straight over the head. Sit up and at the same time lifting both legs to touch the toes in a pike (V) position. Keep feet together, legs and arms straight, all of the upper back and legs clear floor, fingers touch toes each time.";
        descriptions["c6e3"] = "Front lying, arms extended overhead. Raise arms, head, chest and both legs as high as possible then press back once. Keep legs and arms straight--chest and both thighs completely off floor.";
        descriptions["c6e4"] = "Front lying, hands under shoulder, palms flat on floor. Push off floor and slap chest before returning to starting position. keep body straight during the entire movement. chest slap must be heard.";
        descriptions["c6e5"] = "Stationary run - (count a step each time left foot touches floor. Lift feet approximately 4 inches off floor). Every 75 steps do 10 \"jack jumps\". Repeat this sequence until required number of steps is completed. Jack jumps--Feet together, knees bent, sit on heels, finger tips touch floor. Jump up, raise legs waist high, keep legs straight and touch toes in midair. Keep legs straight, raise feet level to \"standing waist height\". Touch toes each time.";

        const level = charts.filter(chart => chart.chartNumber === this.props.chart)[0].levels
                            .filter(x => x.level === this.props.level)[0];

        const key = `c${this.props.chart}e${exercise}`;

        descriptions.get(key);
        return new ExerciseState(level.getReps(exercise), `${key}.gif`, descriptions.get(key));
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
