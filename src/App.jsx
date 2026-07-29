import { useState, useMemo } from 'react'
import { Card, Button, Input } from 'antd'

import TaskItem from './TaskItem'

function App() {
  const [taskList, setTaskList] = useState([])
  const [taskName, setTaskName] = useState('')
  const [taskDescription, setTaskDescription] = useState('')


  const handleAddTask = () => {
    
  }

  const handleUpdateTask = (id, name, description) => {
    
  }

  const handleDeleteTask = (id) => {
   
  }


  const renderTaskList = useMemo(() => {
    return taskList.map((task) => (
      <TaskItem
        key={task.id}
        id={task.id}
        name={task.name}
        description={task.description}
        handleUpdateTask={handleUpdateTask}
        handleDeleteTask={handleDeleteTask}
      />
    ))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [taskList])

  return (
    <div style={{ width: '100%', minHeight: '100vh' }}>
      <div style={{ margin: '24px auto', width: '500px' }}>
        <Card title="Thêm công việc" size="small" style={{ textAlign: 'left' }}>
          <label>Tên công việc</label>
          <Input
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
          <label>Mô tả</label>
          <Input
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
          />
          <Button
            type="primary"
            block
            style={{ marginTop: 24 }}
            onClick={() => handleAddTask()}
          >
            Thêm
          </Button>
        </Card>
        {renderTaskList}
      </div>
    </div>
  )
}

export default App
