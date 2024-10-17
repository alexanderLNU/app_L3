import readlineSync from 'readline-sync'
import Lift from './Lift.js'
import LiftSession from './LiftSession.js'
import PerformanceLog from './PerformanceLog.js'

class Menu {
  #performanceLog

  constructor() {
    this.#performanceLog = new PerformanceLog()
  }
}

export default Menu
