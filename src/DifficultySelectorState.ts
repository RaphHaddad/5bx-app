class DifficultySelectorState {
    public static localStorage = "difficultySelector";
    public isSubmitted = false;

    constructor(public chart: string, public level: string) {
    }

    public incrementDifficulty(): void {
        const levels = ["D-", "D", "D+", "C-", "C", "C+", "B-", "B", "B+", "A-", "A", "A+"];
        let nextIndex = levels.indexOf(this.level) + 1;
        if (nextIndex > 12) {
            nextIndex = 0;
        }
        this.level = levels[nextIndex];
    }
}

export default DifficultySelectorState
