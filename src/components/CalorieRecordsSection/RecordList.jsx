import React from 'react'
import CalorieRecord from './CalorieRecord'
import styles from '../CalorieRecordsSection/RecordList.module.css'

export default function RecordList(props) {

    return (
        props.records?.length ? <ul className={styles['record-list']}>
            {props.records.map((record) =>
                <li key={record.id}
                >
                    <CalorieRecord
                        id={record.id}
                        date={record.date}
                        meal={record.meal}
                        content={record.content}
                        calories={record.calories}
                        onRemove={props.onRemove}
                    />
                </li>)}
        </ul> : <div className={styles.placeHolder}>
            There is no records
        </div>
    )
}
