import React from 'react';
import styles from './ProfileInfo.module.scss'
import UserAvatarPlaceholder from "../../Placeholders-etc/UserAvatarPlaceholder/UserAvatarPlaceholder";
import ProfileStatus from "./ProfileStatus";
import {InputFile} from 'semantic-ui-react-input-file'
import {Button, Icon, List} from "semantic-ui-react";
import {Link} from "react-router-dom";
import SocialButton from './SocialButton';

const ProfileInfo = React.memo(props => {

    const {
        loggedInID,
        status,
        updateStatus,
        userData: {
            contacts,
            fullName,
            photos: {large},
            userId,
            lookingForAJob,
            aboutMe,
            lookingForAJobDescription
        }
    } = props;

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
                        {
                            userId === loggedInID
                                ? <InputFile input={{id: 'input-control-id'}}/>
                                : undefined

                        }
                        <div className={styles.status}>
                            {userId === loggedInID
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

                            <ul className={styles.details_list}>
                                <li className={styles.details_list_item}>
                                    <span className={styles.details_list_item_title}>Is looking job:</span>
                                    {
                                        lookingForAJob
                                            ? <strong>Yes</strong>
                                            : <strong>No</strong>
                                    }
                                </li>
                                <li className={styles.details_list_item}>
                                    <span className={styles.details_list_item_title}>Description:</span>
                                    {
                                        lookingForAJobDescription
                                            ? <strong>{lookingForAJobDescription}</strong>
                                            : <strong>not filled</strong>
                                    }
                                </li>
                                <li className={styles.details_list_item}>
                                    <span className={styles.details_list_item_title}>About me:</span>
                                    {
                                        aboutMe
                                            ? <strong>{aboutMe}</strong>
                                            : <strong>not filled</strong>
                                    }
                                </li>
                                <li className={styles.details_list_item}>
                                    <span className={styles.details_list_item_title}>Contacts:</span>
                                    <div className={styles.contact_buttons}>
                                        <SocialButton contacts={contacts} icon={"facebook"} link={contacts["facebook"]}/>
                                        {/*<SocialButton {...contacts} icon={"vk"} link={contacts["vk"]}/>*/}
                                        {/*<SocialButton {...contacts} icon={"instagram"} link={contacts["instagram"]}/>*/}
                                        {/*<SocialButton  {...contacts}icon={"twitter"} link={contacts["twitter"]}/>*/}
                                        {/*<SocialButton {...contacts} icon={"github"} link={contacts["github"]}/>*/}
                                    </div>
                                </li>
                            </ul>
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
});


export default ProfileInfo;