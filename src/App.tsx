import TodoList from './containers/TodoList'

import styles from './App.module.css'
import TodoForm from './containers/TodoForm'
import GlobalContextProvider from './context'

function App() {
    return (
        <div className={styles.app}>
            <GlobalContextProvider>
                <TodoForm />
                <TodoList />
            </GlobalContextProvider>
        </div>
    )
}

export default App
