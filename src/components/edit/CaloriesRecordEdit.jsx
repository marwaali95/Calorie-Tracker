import React, { useState } from 'react'
import styles from './CalorieRecordEdit.module.css'
export default function CaloriesRecordEdit(props) {
    const DEFAULTVALUE = {
        date: new Date().toISOString().split('T')[0],
        meal: 'Breakfast',
        content: '',
        calories: 0
    }
    const [mealRecord, setMealRecord] = useState(DEFAULTVALUE)
    const onDateChangeHandler = (event) => {
        setMealRecord({
            ...mealRecord, date: event.target.value
        })
    }
    const onMealChangeHandler = (event) => {
        setMealRecord({
            ...mealRecord, meal: event.target.value
        })
    }
    const onContentChangeHandler = (event) => {
        setMealRecord({
            ...mealRecord, content: event.target.value
        })
    }
    const onCaloriesChangeHandler = (event) => {
        setMealRecord({
            ...mealRecord, calories: event.target.value
        })
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        props.onFormSubmit(mealRecord)
        setMealRecord(DEFAULTVALUE)
    }
    let caloriesInputStyle = {}
    if (mealRecord.calories < 0) {
        caloriesInputStyle = { border: '1px solid red', background: 'white', color: 'red' }
    }
    const handleCancel = () => {
        setMealRecord(DEFAULTVALUE)
        props.onCancel()
    }
    return (
        <form className={styles.form} onSubmit={onSubmitHandler}>
            <label htmlFor='date'>Date:</label>
            <input type='date' id='date' onChange={onDateChangeHandler} value={mealRecord.date} />
            <label htmlFor='meal'>Meal:</label>
            <select id='meal' onChange={onMealChangeHandler} value={mealRecord.meal} >
                <option value='Breakfast'>Breakfast</option>
                <option value='Lunch'>Lunch</option>
                <option value='Dinner'>Dinner</option>
                <option value='Snacks'>Snacks</option>
            </select>

            <label htmlFor='content' >Content</label>
            <input type='text' id='content' onChange={onContentChangeHandler} value={mealRecord.content}>
            </input>
            <label htmlFor='calories'>Calories</label>
            <input type='number' id='calories'
                onChange={onCaloriesChangeHandler}
                value={mealRecord.calories}
                className={`${styles['calorie-record']} ${mealRecord.calories < 0 ? styles.error : ''}`}
            />
            <div className={styles.footer}>
                <button>Add Record</button>
                <button type='button' onClick={handleCancel}>Cancel</button>
            </div>

        </form>
    )
}

