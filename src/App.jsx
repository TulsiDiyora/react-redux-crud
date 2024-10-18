import { Provider } from 'react-redux'
import store from './store'
import './App.css'
import { Route, Routes } from 'react-router'
import ReduxForm from './Components/ReduxForm/ReduxForm'
import View from './Components/View/View'
import EditData from './Components/EditData/EditData'

function App() {

  return (
    <>
      <Provider store={store}>
      <Routes>
          <Route path="/" element={<ReduxForm />} />
          <Route path="/view" element={<View />} />
          <Route path="/editdata" element={<EditData />} />
       </Routes>
      </Provider>
    </>
  )
}

export default App
