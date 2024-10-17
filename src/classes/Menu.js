import readlineSync from 'readline-sync'
import Lift from './Lift.js'
import LiftSession from './LiftSession.js'
import PerformanceLog from './PerformanceLog.js'

// JSDoc fixa imon.
class Menu {
  #performanceLog

  constructor() {
    this.#performanceLog = new PerformanceLog()
  }

  static startTheApp () {
    const menu = new Menu()
    menu.startMenu()
  }

  startMenu () {
    console.log('Hello, Welcome to "Alexander Strength Lifting Tool"!')
    let quitTheApp = false

    while (!quitTheApp) {
      console.log('\nMain Menu:')
      console.log('1. Add new lifting session')
      console.log('2. View your stats')
      console.log('3. View all lifting sessions')
      console.log('4. Remove a lifting session')
      console.log('5. Quit the app')
      const usersChoice = readlineSync.question('Choose one of the following (1-5): ')

      switch (usersChoice) {
        case '1':
          this.addNewLiftingSession() // Fixa imon
          break
        case '2':
          this.viewPerformanceStats() // Fixa imon
          break
        case '3':
          this.viewAllLiftingSessions() // Fixa imon
          break
        case '4':
          this.removeALiftingSession() // Fixa imon
          break
        case '5':
          console.log('Quitting the app...')
          quitTheApp = true
          break
        default:
          console.log('Not a valid choice, try again.')
      }
    }
  }
}

export default Menu
