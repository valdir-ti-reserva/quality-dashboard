import logo from './logo.svg'

const App = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      width: '100vw',
      fontFamily: 'sans-serif',
    }}>
      <img src={logo} alt="Logo" />
      <h1 style={{
        color: '#6EC177',
        margin: 0
      }}>
        Wah Gwan, Soon Come</h1>
      <p>What's up, Coming Soon</p>
    </div>
  )
}

export default App