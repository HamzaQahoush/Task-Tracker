import {useState} from "react";

const AddTask = ({onAdd}) => {
    const [text,setText]= useState('')
    const [day,setDay]= useState('')
    const [reminder,setReminder]= useState(false)

    const addHandler = (e) => {
        e.preventDefault()
         if (!text ) {alert("Please add a Task")
             return
         }
         onAdd({text,day,reminder})
        setText('')
        setDay('')
        setReminder(false)

    }
  return (
      <form className="add-form" onSubmit={addHandler}>
          <div className='form-control'>
          <label> Task</label>
              <input type="text" placeholder="add Task"  value={text} onChange={(e)=>setText(e.target.value)}/>

          </div>
             <div className='form-control'>
          <label> Day and Time</label>
              <input type="text"  value={day} onChange={(e)=>setDay(e.target.value)}
                     placeholder="add Day and Time" />

          </div>
             <div className='form-control form-control-check'>
          <label> set Reminder</label>
              <input type="checkbox" value={reminder} onChange={(e)=>setReminder(e.currentTarget.checked)} placeholder="add Reminder" />

          </div>
          <input type="submit"  value="Save Task" className={'btn btn-block'}  />

      </form>
  )
}
export default AddTask