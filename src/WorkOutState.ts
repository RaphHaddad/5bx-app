class WorkOutState {
    public chart: string;
    public level: string;
    public timeLeft: Date

    constructor(chart: string, level: string) {
        this.chart = chart;
        this.level = level;
    }
}

export default WorkOutState