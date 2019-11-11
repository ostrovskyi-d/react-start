// Try to use some Libs:
//  Bootstrap
//  Semantic UI React


import React from "react";
import s from './Notes.module.scss'

const Notes = (props) => {
    return (
        <section className={s.notesWrapper}>
            <div>
                <div className={s.notesHeading}>
                    <h1>Notes</h1>
                </div>
                <ul className={s.notesList}>
                    <li className={s.noteItem}>Try to use Bootstrap</li>
                    <li className={s.noteItem}>Try to use Semantic UI React</li>
                </ul>
            </div>
        </section>
    )
};

export default Notes;