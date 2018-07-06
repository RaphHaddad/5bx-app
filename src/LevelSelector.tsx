import * as React from 'react';
class LevelSelector extends React.Component {

    public render() {
        return (
        <form>
            <label>
              Name:
              <input type="text" name="name" />
            </label>
            <input type="submit" value="Submit" />
        </form>
        )
    }
}

export default LevelSelector;
