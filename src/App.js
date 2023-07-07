import React, { useState, useEffect } from "react"
import { Form } from "react-router-dom"
import "./App.css"
function App() {
  const [newItem, setNewItem] = useState("")
  const [items, setItems] = useState([])

  function addItem() {
    if (!newItem) {
      alert("Add an item!")
      return
    }
    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem,
      isCompleted: false,
    }

    setItems([...items, item])
    setNewItem("")
  }
  const arr = []
  const handleComplete = (todoId) => {

    /*console.log({ items })
    let completedTodoIndex = items.findIndex(({ id }) => id === todoId)
    let completedTodo = items[completedTodoIndex]
    items[completedTodoIndex].isCompleted = false

    let newItems = items
    newItems[completedTodoIndex] = { ...completedTodo, isCompleted: true }
    setItems(newItems)
    console.log({ newItems })*/

    const currentTodo = items.filter((item) => (item.id === todoId ? (item.isCompleted = true) : item)).sort((a, b) => {
     
      if(!a.isCompleted && b.isCompleted) return -1;
      // if(!a.isCompleted && !b.isCompleted) return 0;
    });

    setItems(currentTodo);
  }
  const handlePush = () => {}

  return (
    <>
      <div id="todo">
        <h1>Todo</h1>
        <form className="input-grp">
          <input id="input" className="input" placeholder="Make a list here" value={newItem} onChange={(e) => setNewItem(e.target.value)} />

          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault()
              addItem()
            }}
          >
            Add
          </button>
        </form>

        <ul>
          {items.map(({ isCompleted, id, value }) => {
            return (
              <li key={id} className={`item ${isCompleted && "dash"}`} onClick={() => handleComplete(id)}>
                {value}
              </li>
            )
          })}
        </ul>
        {/* <ul>
          {items.map(({ isCompleted, id, value }) => {
            return (
              <li key={id} className={`item ${isCompleted && "dash"}`} onClick={() => handlePush(id)}>
                {value}
              </li>
            )
          })}
        </ul> */}
      </div>
    </>
  )
}
export default App
