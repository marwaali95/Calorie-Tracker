
import { useState } from 'react'
import Modal from 'react-modal'
import CaloriesRecordEdit from '../components/edit/CaloriesRecordEdit'
import ListingSection from '../components/CalorieRecordsSection/ListingSection'
import styles from '../App.module.css'
function Tracking() {
  const [isModalOpen, setModalOpen] = useState(false)
  const handleOpenModal = () => setModalOpen(true)
  const handleCloseModal = () => setModalOpen(false)
  const modalStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%,-50%)',
      border: 'none',
      padding: '0px',
      borderRadius: "var(--theme-border-radius-smooth)"

    },
    overlay: {
      backgroundColor: 'rgba(0,0,0,0.5)'
    }
  }
  const records = [
    {
      id: 1,
      date: new Date(2023, 9, 9),
      meal: 'Breakfast',
      content: 'Egg',
      calories: 100
    },
    {
      id: 2,
      date: new Date(2023, 9, 9),
      meal: 'Lunch',
      content: 'Steak',
      calories: 250
    },
    {
      id: 3,
      date: new Date(2023, 9, 9),
      meal: 'Dinner',
      content: 'Beans',
      calories: 150
    },
    {
      id: 4,
      date: new Date(2023, 9, 9),
      meal: 'Snacks',
      content: 'Choclate',
      calories: 200
    },
  ]
  const [recordList, setRecordList] = useState(records)
  let [nextId, setNextId] = useState(5)
  const onFormSubmit = (record) => {
    const formattedRecord = { ...record, date: new Date(record.date), id: nextId }
    setNextId(++nextId)
    console.log('formattedRecord', formattedRecord)
    setRecordList([formattedRecord, ...recordList])
    handleCloseModal()
  }
  const onRemoveRecord = (id) => {
    console.log('recordList', recordList)
    const updatedList = recordList.filter(record => record.id !== id);
    console.log('id', id)
    console.log('updatedList', updatedList)

    setRecordList(updatedList)
  }
  return (
    <>

      <h1>Calorie Tracker  </h1>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        style={modalStyles}
      >
        <CaloriesRecordEdit onFormSubmit={onFormSubmit} onCancel={handleCloseModal} />
      </Modal>
      <ListingSection recordList={recordList} onRemove={onRemoveRecord} />
      <button onClick={handleOpenModal} className={styles['track-calories-button']}>Track food</button>
    </>
  )
}

export default Tracking
