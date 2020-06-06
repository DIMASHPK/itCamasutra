import React from "react";
import s from "./ProfileInfo.module.css";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status || 'my status'
    }

    activateEditMode = () => this.setState({editMode: true})

    deActivateEditMode = () => {
        const {updateStatusThunkCreater} = this.props
        const {status} = this.state

        this.setState({editMode: false})
        updateStatusThunkCreater(status)
    }

    handleChange = ({target: {value}}) => this.setState({status: value})

    componentDidUpdate(prevProps) {
        const {status} = this.props

        if (status !== prevProps.status) {
            this.setState({status})
        }
    }

    render() {
        const {editMode, status} = this.state


        return (
            <div>
                {!editMode ?
                    (<div>
                        <span
                            className={s.status}
                            onDoubleClick={this.activateEditMode}
                        >
                            {status}
                        </span>
                    </div>)
                    :
                    (<div>
                        <input
                            autoFocus={true}
                            className={s.status}
                            value={status}
                            onChange={this.handleChange}
                            onBlur={this.deActivateEditMode}
                        />
                    </div>)
                }
            </div>
        )
    }
}


export default ProfileStatus;
