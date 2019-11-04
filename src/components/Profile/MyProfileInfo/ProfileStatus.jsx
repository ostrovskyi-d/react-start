import React from "react";

class ProfileStatus extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editMode: false,
            statusValue: '1111',
        }
    }

    onChange = (e) => {
        this.setState({statusValue: e.target.value})
    };
    enableEditMode = () => {
        this.setState({editMode: true})
    };
    disableEditMode = (e) => {
        this.setState({editMode: false})
    };

    render() {
        return <div>

            {this.state.editMode
                ? <div><input autoFocus={true} onBlur={this.disableEditMode} value={this.state.statusValue} onChange={this.onChange} type="text"/></div>
                : <div>
                    <span
                        onClick={this.enableEditMode}

                    >

                        {this.state.statusValue}
                </span>
                </div>
            }

        </div>
    }
};

export default ProfileStatus;