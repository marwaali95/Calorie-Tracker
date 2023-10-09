import React, { useState } from 'react'
import RecordList from './RecordList';
import styles from './ListingSection.module.css'

export default function ListingSection(props) {
    const { recordList } = props;
    const [currentDate, setCurrentDate] = useState(new Date());
    const changeDateHandler = (event) => {
        setCurrentDate(new Date(event.target.value))
        dateFilter();
    }
    const dateFilter = (record) =>
        record?.date.getDate() === currentDate.getDate() &&
        record?.date.getMonth() === currentDate.getMonth() &&
        record?.date.getFullYear() === currentDate.getFullYear()

    return (
        <>
            <label className={styles['listing-picker-label']} htmlFor='listingDate' >Select date</label>
            <input className={styles['listing-picker-input']}
                type='date'
                id='listingDate'
                value={currentDate.toISOString().split('T')[0]}
                onChange={changeDateHandler} />


            <RecordList records={recordList.filter(dateFilter)} onRemove={props.onRemove} />


        </>
    )
}
