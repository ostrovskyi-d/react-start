import React from 'react';
import styles from './MyProfileInfo.module.scss'
import UserAvatarPlaceholder from "../../Placeholders-etc/UserAvatarPlaceholder/UserAvatarPlaceholder";
import ProfileStatus from "./ProfileStatus";


const ProfileInfo = (props) => {
    console.log(props.userData.userId)
    return (
        <main className={styles.profileInfoWrapper}>
            <section className={styles.card}>
                <div className={styles.userNameAvaContainer}>
                    <h2 className={styles.userName}>{props.userData.fullName}</h2>
                    <div className={styles.avatar}>
                        {
                            props.userData.photos.large
                                ? <img src={props.userData.photos.large} alt=""/>
                                : <UserAvatarPlaceholder/>
                        }

                        <div className={styles.status}>
                            {props.userData.userId === 4889
                                ? <ProfileStatus statusEditEnabled={true} updateStatus={props.updateStatus} status={props.status}/>
                                : <ProfileStatus statusEditEnabled={false} status={props.status} updateStatus={props.updateStatus}/>
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
                                    props.userData.lookingForAJob
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
            </section>

        </main>
    )
}


export default ProfileInfo;