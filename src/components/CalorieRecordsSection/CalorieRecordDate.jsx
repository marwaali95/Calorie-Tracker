import React from 'react'
import styles from '../CalorieRecordsSection/CalorieRecordDate.module.css'
import StyledRecordCell from '../common/StyledRecordCell';

export default function CalorieRecordDate(props) {
    const month = props.date.toLocaleString("en-US", { month: 'long' })
    const day = props.date.getDate();
    const year = props.date.getFullYear();
    return (
        <StyledRecordCell>
            <div className={styles['record-date-month']}> {month}</div>
            <div className={styles['record-date-day']}>{day}</div>
            <div className={styles['record-date-year']}>  {year}</div>
        </StyledRecordCell>
    )
}
