class WorkOutState {
    public countDown: number;
    public timeLeft: Date;
    public startExercise: boolean;
    public currentExercise: number;

    constructor(public chart: number, public level: string) {
        this.countDown = 3;
        this.startExercise = false;
        this.currentExercise = 1;
    }
}

export default WorkOutState
