class DifficultySelectorState {
    public static localStorage = "difficultySelector";
    public isSubmitted = false;

    constructor(public chart: string, public level: string) {
    }
}

export default DifficultySelectorState
