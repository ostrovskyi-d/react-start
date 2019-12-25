import React from "react";
import s from "./Paginator.module.scss";
import {Container, Select} from "semantic-ui-react";
import { Pagination } from 'semantic-ui-react'



export const Paginator = (props) => {
    const {requiredPage, changePage, totalUsersCount, pageSize, setPageSize} = props;

    let pages = [];

    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    const onSelectChange = (e) => {
        setPageSize(Number(e.target.innerText))
    };

    for (let i = 1; i <= pagesCount; i++) {
        pages[i] = i;
    }

    const pageSizeOptions = [
        {key: 10, value: 10, text: 10},
        {key: 20, value: 20, text: 20},
        {key: 30, value: 30, text: 30},
        {key: 50, value: 50, text: 50},
    ];
    pages = pages.map((p, i) => {
            return (
                <span key={i}
                      onClick={() => changePage(p)}
                      className={requiredPage === p ? s.selectedPage : undefined}>
                    {p}
                </span>
            )
        }
    );

    return (
        <>
            <div className={s.pagesBlock}>
                <span className={s.pagesWrapper}>
                    {pages}
                    </span>
            </div>
            <Container>
                <div className={s.viewSettings}>
                    <p>Total users count: {totalUsersCount}</p>
                    <p>Users per page:</p>
                    <Select onChange={onSelectChange}
                            className={s.choosePageSize}
                            options={pageSizeOptions}
                            defaultValue={pageSize}/>
                </div>
            </Container>
        </>
    )
};

