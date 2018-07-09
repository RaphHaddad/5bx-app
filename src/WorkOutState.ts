class WorkOutState {
    public countDown: number;
    public timeLeft: Date;
    public startExercise: boolean;
    public currentExercise: number;

    constructor(public chart: string, public level: string) {
        this.chart = chart;
        this.level = level;
        this.countDown = 3;
        this.startExercise = false;
        this.currentExercise = 1;
    }
}

export default WorkOutState
