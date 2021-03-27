import { useState, useEffect, useRef } from 'react'
import { useAppDispatch, useAppSelector } from '../../lib/hooks'
import { setShortcutItem, toggleForm } from '../../lib/newtabSlice'

import styles from '../../styles/ShortcutsForm.module.css'

const ShortcutsPopup: React.FC = () => {
  const formIsShow = useAppSelector(state => state.formIsShow)
  const shortcuts = useAppSelector(state => state.shortcuts)
  const dispatch = useAppDispatch()
  const [name, setName] = useState('')
  const [url, setURL] = useState('')
  const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>

  useEffect(() => {
    if (!formIsShow) return
    inputRef.current.focus()
  })

  const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  const onURLChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setURL(e.target.value)
  }

  const onCancelClick = () => dispatch(toggleForm())

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const newItem = [{
      name: name,
      url: url
    }]

    let shortcuts_ = shortcuts.concat(newItem)

    dispatch(setShortcutItem(shortcuts_))
    dispatch(toggleForm())
    setName('')
    setURL('')
  }

  if (!formIsShow) return <></>

  return (
    <div className={styles.shortcutsPopup}>
      <h2 className={styles.formH2}>Add a shortcut</h2>
      <form
        className={styles.shortcutsForm}
        autoComplete="off"
        onSubmit={onSubmit}
      >
        <div className={styles.formName}>
          <label htmlFor="form-name">Name:</label>
          <br />
          <input
            className={styles.formTextbox}
            id="form-name"
            type="text"
            name="name"
            ref={inputRef}
            defaultValue={name}
            required={true}
            onChange={onNameChange}
          />
        </div>
        <div className={styles.formURL}>
          <label htmlFor="form-url">URL:</label>
          <br />
          <input
            className={styles.formTextbox}
            id="form-url"
            type="text"
            name="url"
            defaultValue={url}
            required={true}
            onChange={onURLChange}
          />
        </div>
        <div className={styles.formButtons}>
          <input
            className="btn-cancel"
            type="button"
            value="Cancel"
            onClick={onCancelClick}
          />
          <input
            className="btn-ok"
            type="submit"
            value="Add"
          />
        </div>
      </form>
    </div>
  )
}

export default ShortcutsPopup
