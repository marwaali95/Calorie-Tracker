import React from 'react'
import styles from './StyledRecordCell.module.css'
export default function StyledRecordCell(props) {
    return (
        <div className={styles['record-date']}>
            {props.children}
        </div>

    )
}
