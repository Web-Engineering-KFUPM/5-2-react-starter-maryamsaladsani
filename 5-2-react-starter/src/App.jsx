import './App.css'
import StudentCard from './components/StudentCard';

function App() {
  return (
    <div className="app">
      <header className="dashboard-header">
        <h1>Student Information Dashboard</h1>
        <p>View and manage student details</p>
      </header>

      <main className="dashboard-main">
        <div className="cards-container">
          {/* TODO: Import and render StudentCard components here */}
            <StudentCard/>
            <StudentCard name="Maryam" id="202263480" dept="ICS" />
            <StudentCard name="Sadeem" id="202251580" dept="ICS" />
        </div>
      </main>
    </div>
  )
}





export default App

