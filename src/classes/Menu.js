import readlineSync from 'readline-sync'
import Lift from './Lift.js'
import LiftSession from './LiftSession.js'
import PerformanceLog from './PerformanceLog.js'

/**
 * This class represents the menu of the app, where the user can
 * add lifting sessions, view stats, view liftign sessions and
 * remove lifting sessions.
 */
class Menu {
  #performanceLog

  /**
   * Constructs menu class and also initializing a PerformanceLog that is empty.
   */
  constructor () {
    this.#performanceLog = new PerformanceLog()
  }

  /**
   * This static method starts the app by creating a new Menu instance and running the startMenu method.
   */
  static startTheApp () {
    const menu = new Menu()
    menu.startMenu()
  }

  /**
   * This method runs the main menu and presents different options to the user.
   * User can choose between adding a lifting sessions, viewing stats, viewing
   * sessions, removing sessions and quitting the app.
   */
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
          this.viewPerformanceStats()
          break
        case '3':
          this.viewAllLiftingSessions()
          break
        case '4':
          this.removeALiftingSession()
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

  /**
   * This method adds a new lifting sessions to PerformanceLog and asks the user to enter
   * details about the lifts in the session.
   */
  addNewLiftingSession () {
    const nameOfSession = readlineSync.question('Enter the name of your lifting session: ')
    const liftingSession = new LiftSession(nameOfSession)
    let addLifts = true

    while (addLifts) {
      const nameOfLift = readlineSync.question('Enter the name of the lift: ')
      const weightLifted = parseFloat(readlineSync.question('Enter the weight lifted: '))
      if (isNaN(weightLifted) || weightLifted <= 0) {
        console.log('You have to enter a valid weight.')
        continue
      }
      const weightUnit = readlineSync.question('Enter the unit of the weight (kg/lb): ')
      const repsDone = parseInt(readlineSync.question('Enter the reps done: '), 10)
      const setsDone = parseInt(readlineSync.question('Enter the sets done: '), 10)

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

  /**
   * This method displays the performance stats in different ways and the user can choose
   * between different options to get the stats. The different stats are heaviest,
   * lightest and average lift out of all added or for a specific lift.
   */
  viewPerformanceStats () {
    try {
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
          const nameOfAverage = readlineSync.question('Enter the name of the lift: ')
          console.log('The average weight of', nameOfAverage, 'is:', this.#performanceLog.getAverageWeightForSpecificLift(nameOfAverage))
          break
        }
        default:
          console.log('Not a valid choice, try again.')
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  /**
   * This method displays all of the lifting sessions that has been added to the PerformanceLog.
   */
  viewAllLiftingSessions () {
    try {
      this.validateSessionIsPresent()
      console.log('\nAll of your lifting sessions:')
      const allSessions = this.#performanceLog.getNameOfAllSessions()

      allSessions.forEach((session, index) => {
        console.log(`${index + 1}. ${session}`)
      })
    } catch (error) {
      console.log(error.message)
    }
  }

  /**
   * This method removes a lifting session.
   * First the method validates that there are sessions in the PerformanceLog.
   * The method asks the user to select what sessions should be removed
   * from a list with all of the lifting sessions.
   *
   * @returns {void} It just handles the user interaction and upodates PerformanceLog.
   */
  removeALiftingSession () {
    try {
      this.validateSessionIsPresent()

      console.log('\nWhich session would you like to remove?')
      const allSessions = this.#performanceLog.getNameOfAllSessions()

      allSessions.forEach((session, index) => {
        console.log(`${index + 1}. ${session}`)
      })
      const sessionIndex = parseInt(readlineSync.question('Enter the number of the session you want to remove: '), 10) - 1

      if (!this.validateSessionIndex(sessionIndex, allSessions.length)) {
        console.log('Invalid session number, please try again.')
        return
      }

      this.#performanceLog.removeASessionByIndex(sessionIndex)
      console.log('The session has been successfully removed.')
    } catch (error) {
      console.log(error.message)
    }
  }

  /**
   * This method validates that there are sessions in the PerformanceLog, and if it is not then throw an error.
   */
  validateSessionIsPresent () {
    if (this.#performanceLog.getNumberOfSessions() === 0) {
      throw new Error('You have no lifting sessions, you must add at least one!')
    }
  }

  /**
   * This method validates if the index of the session is valid.
   *
   * @param {number} index          The index that is being validated.
   * @param {number} totalSessions  The total number sessiosn that are availible.
   * @returns {boolean}             True if the index is valid, otherwise false.
   */
  validateSessionIndex (index, totalSessions) {
    return !isNaN(index) && index >= 0 && index < totalSessions
  }
}

export default Menu
