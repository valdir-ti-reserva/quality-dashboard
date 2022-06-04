import { Routes, Route } from "react-router-dom"

import Navigation from "./components/Navigation"

import routes from "./routes"

import { useStyles } from "./style"

const App = () => {
  const classes = useStyles()

  return (
    <div className={classes.appRoot}>
      <Navigation />
      <div className={classes.componentsRoot}>
        <Routes>
          {routes.map((route, index) => {
            return (
              <Route path={route.path} key={index} element={route.component} />
              )
            })}
        </Routes>
      </div>
    </div>
  )
}

export default App