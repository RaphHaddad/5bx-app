import * as React from 'react';
class LevelSelector extends React.Component {
    public render() {
        return (
        <form onSubmit={this.handleSubmit}>
            <label>
              Chart:
            </label>
                <select name="name">
                    <option>Chart 1</option>
                    <option>Chart 2</option>
                    <option>Chart 3</option>
                    <option>Chart 4</option>
                    <option>Chart 5</option>
                    <option>Chart 6</option>
                </select>
            <input type="submit" value="Submit" />
        </form>
        )
    }

    private handleSubmit(): void {
        /* tslint:disable */
        console.log("hi");
        /* tslint:enable */
    }
}

export default LevelSelector;
