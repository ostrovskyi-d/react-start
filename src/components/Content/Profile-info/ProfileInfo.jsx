import React from 'react';
import styles from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
    return (
        <div>
                <h2>Ostrovskyi Denys</h2>
                
                <section className={styles.card}>
                    <div className={styles.avatar}>
                        <img src="https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/300/full/angular2.png" alt=""/>
                    </div>
                    
                    <div className={styles.info}>        
                        <span>ABOUT</span>
                        <div className={styles.details}>
                            <li>Birthday: 17.12.1997</li>
                            <li>City: Khmelnitskyi</li>
                            <li>University: KNU</li>
                            <li>Hobbies: Guitar, Programming</li>
                            <li>Lifestyle: Sex and Rock & Roll</li>
                        </div>
                        
                        
                    </div>
                </section>
                  
        </div>
    )
}


export default ProfileInfo;