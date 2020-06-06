import React from "react";
import s from "./ProfileInfo.module.css";


export const ProfileStatusWithHooks = ({status, updateStatusThunkCreater}) => {
    const [editMode, setEditMode] = React.useState(false)
    const [myStatus, setMyStatus] = React.useState(status || 'my status')

    const handleChange = ({target: {value}}) => setMyStatus(value)
    const activateEditMode = () => setEditMode( true)
    const deActivateEditMode = () => {
        setEditMode( false)
        updateStatusThunkCreater(myStatus)
    }
    const deActivateEditModeOnEnter = ({key}) => key === 'Enter' && deActivateEditMode()

    React.useEffect(() => {
        setMyStatus(status)
    }, [status])


    return (
        <div>
            {!editMode ?
                (<div>
                        <span
                            className={s.status}
                            onDoubleClick={activateEditMode}
                        >
                            {myStatus}
                        </span>
                </div>)
                :
                (<div>
                    <input
                        autoFocus={true}
                        className={s.status}
                        value={myStatus}
                        onChange={handleChange}
                        onKeyPress={deActivateEditModeOnEnter}
                        onBlur={deActivateEditMode}
                    />
                </div>)
            }
        </div>)
}

