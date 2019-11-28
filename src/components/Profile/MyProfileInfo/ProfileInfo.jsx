import React from 'react';
import styles from './ProfileInfo.module.scss'
import UserAvatarPlaceholder from "../../Placeholders-etc/UserAvatarPlaceholder/UserAvatarPlaceholder";
import ProfileStatus from "./ProfileStatus";
import {InputFile} from 'semantic-ui-react-input-file'

const ProfileInfo = ( {status, userData, updateStatus} ) => {
    const {fullName, photos: {large}, userId, lookingForAJob} = userData;
    return (
        <section className={styles.profileInfoWrapper}>
            <div className={styles.card}>
                <div className={styles.userNameAvaContainer}>
                    <h2 className={styles.userName}>{fullName}</h2>
                    <div className={styles.avatar}>
                        {
                            large
                                ? <img src={large} alt=""/>
                                : <UserAvatarPlaceholder/>
                        }
                        <InputFile input={{id: 'input-control-id'}}/>

                        <div className={styles.status}>
                            {userId === 4889
                                ? <ProfileStatus statusEditEnabled={true} updateStatus={updateStatus} status={status}/>
                                : <ProfileStatus statusEditEnabled={false} status={status} updateStatus={updateStatus}/>
                            }
                        </div>

                    </div>
                </div>
                <div className={styles.info}>

                    <section className={styles.aboutUserContainer}>

                        <span className={styles.aboutHeading}>ABOUT ME:</span>


                        <div className={styles.details}>

                            <li>Is Looking For A Job:
                                {
                                    lookingForAJob
                                        ? <b> YES</b>
                                        : <b> NO</b>
                                }
                            </li>
                            <li>Birthday: 17.12.1997</li>
                            <li>City: Khmelnitskyi</li>
                            <li>University: KNU</li>
                            <li>Hobbies: Guitar, Programming</li>
                            <li>Lifestyle: Sex and Rock & Roll</li>
                        </div>
                    </section>
                    <section className={styles.galleryContainer}>
                        <span className={styles.galleryHeading}>GALLERY</span>
                        <div className={styles.gallery}>
                            <img src="https://via.placeholder.com/150x150" alt=""/>
                            <img src="https://via.placeholder.com/150x150" alt=""/>
                            <img src="https://via.placeholder.com/150x150" alt=""/>
                            <img src="https://via.placeholder.com/150x150" alt=""/>
                            <img src="https://via.placeholder.com/150x150" alt=""/>
                            <img src="https://via.placeholder.com/150x150" alt=""/>
                        </div>
                    </section>


                </div>
            </div>

        </section>
    )
};


export default ProfileInfo;