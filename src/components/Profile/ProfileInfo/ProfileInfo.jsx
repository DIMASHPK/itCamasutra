import React from "react";
import Preloader from "../../common/Preloader/Prelodaer";
import s from "./ProfileInfo.module.css";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";


const ProfileInfo = ({ srcPhoto, profile, avatar, isFetching, contacts, ...props }) => (
  <>
    {isFetching ? (
      <Preloader />
    ) : (
      <div>
        <div>
          <img src={srcPhoto} alt="wall" />
        </div>
        <div className={s.info}>
          <img className={s.avatar} src={avatar} alt="avatar" />
          <div className={s.dataOfUser}>
            <h3>{profile.fullName}</h3>
            <ProfileStatusWithHooks {...props}/>
            <p>looking for a job: {`${profile.lookingForAJob}`}</p>
            <p>About me: {`${!profile.aboutMe ? "non" : profile.aboutMe}`}</p>
            <div className={"contacts"}>
              {contacts &&
                contacts.map((contact, i) => (
                  <p key={i + 1}>
                    {contact[0]}:{`${contact[1]}`}
                  </p>
                ))}
            </div>
          </div>
        </div>
      </div>
    )}
  </>
);

export default ProfileInfo;
