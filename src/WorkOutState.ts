import * as moment from 'moment';

class WorkOutState {
    public countDown: number;
    public timeLeft: moment.Moment;
    public startExercise: boolean;
    public currentExercise: number;

    constructor(public chart: number, public level: string, public timeUp = false) {
        this.countDown = 3;
        this.startExercise = false;
        this.currentExercise = 1;
    }
}

export default WorkOutState
