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
                    <li className={s.noteItem}>Треба помістити повідомлення про залишок символів у якийсь метод,
                        чи якось інакше, бо якщо це повідомлення міститься в "validate", то форма вважається
                        не валідною.
                    </li>
                </ul>
            </div>
        </section>
    )
};

export default Notes;