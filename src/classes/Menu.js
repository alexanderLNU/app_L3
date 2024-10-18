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
          this.addNewLiftingSession()
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

  addNewLiftingSession () {
    const nameOfSession = readlineSync.question('Enter the name of your lifting session: ')
    const liftingSession = new LiftSession(nameOfSession)
    let addLifts = true

    while (addLifts) {
      const nameOfLift = readlineSync.question('Enter the name of the lift: ')
      const weightLifted = readlineSync.question('Enter the weight lifted: ')
      const weightUnit = readlineSync.question('Enter the unit of the weight (kg/lbs): ')
      const repsDone = readlineSync.question('Enter the reps done: ')
      const setsDone = readlineSync.question('Enter the sets done: ')

      const theLift = new Lift(nameOfLift, weightLifted, weightUnit, repsDone, setsDone)
      liftingSession.addLiftToSession(theLift)

      const additionalLift = readlineSync.question('Do you want to add another lift to the session? (y/n): ')
      if (additionalLift.toLowerCase() !== 'y') {
        addLifts = false
      }
    }

    this.#performanceLog.addLiftSession(liftingSession)
    console.log('You have successfully added the lifting session!')
  }

  viewPerformanceStats () {
    this.validateSessionIsPresent()
    console.log('\nYour performance stats:')
    console.log('1. The heaviest lift out of all lifts')
    console.log('2. The lightest lift out of all lifts')
    console.log('3. The average weight out of all lifts')
    console.log('4. The heaviest lift of a specific lift')
    console.log('5. The lightest lift of a specific lift')
    console.log('6. The average weight of a specific lift')
    const usersChoice = readlineSync.question('Choose one of the following (1-6): ')

    switch (usersChoice) {
      case '1':
        console.log('The heaviest lift out of all lifts is:', this.#performanceLog.getHeaviestLift())
        break
      case '2':
        console.log('The lightest lift out of all lifts is:', this.#performanceLog.getLightestLift())
        break
      case '3':
        console.log('The average weight out of all lifts is:', this.#performanceLog.getAverageWeightOfAllLifts())
        break
      case '4': {
        const nameOfHeaviest = readlineSync.question('Enter the name of the lift: ')
        console.log('The heaviest lift of', nameOfHeaviest, 'is:', this.#performanceLog.getHeaviestLiftForSpecificLift(nameOfHeaviest))
        break
      }
      case '5': {
        const nameOfLightest = readlineSync.question('Enter the name of the lift: ')
        console.log('The lightest lift of', nameOfLightest, 'is:', this.#performanceLog.getLightestLiftForSpecificLift(nameOfLightest))
        break
      }
      case '6': {
        const nameOfAverage = readlineSync.question('Enter the name of the lift: ');
        console.log('The average weight of', nameOfAverage, 'is:', this.#performanceLog.getAverageWeightForSpecificLift(nameOfAverage))
        break
      }
      default:
        console.log('Not a valid choice, try again.')
    }
  }
  // viewalllift
  // removeone

  validateSessionIsPresent () {
    if (this.#performanceLog.getNumberOfSessions() === 0) {
      throw new Error('You have no lifting sessions, you must add at least one!')
    }
  }
}

export default Menu
