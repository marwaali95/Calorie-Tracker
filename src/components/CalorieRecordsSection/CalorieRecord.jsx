import styles from './CalorieRecordStyle.module.css'
import CalorieRecordDate from './CalorieRecordDate'
import StyledRecordCell from '../common/StyledRecordCell'

export default function CalorieRecord(props) {
    const onRemove = () => props.onRemove(props.id)

    return (
        <ul className={styles.record}>
            <li>
                <CalorieRecordDate date={props.date} />
            </li>
            <li>
                {props.meal}
            </li>
            <li>
                {props.content}
            </li>
            <li className={styles['record-calories']} >
                <StyledRecordCell >
                    {props.calories}
                </StyledRecordCell>
            </li>
            <li className={styles.remove} onClick={onRemove}>
                Remove
            </li>


        </ul>
    )
}
