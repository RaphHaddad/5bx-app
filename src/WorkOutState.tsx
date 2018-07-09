class WorkOutState {
    public countDown: number;
    public timeLeft: Date;

    constructor(public chart: string, public level: string) {
        this.chart = chart;
        this.level = level;
        this.countDown = 3;
    }
}

export default WorkOutState
