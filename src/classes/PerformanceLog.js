import { WeightCollection } from 'weight-module-alexander-rolf'
import LiftSession from './LiftSession.js'

/**
 * This class is a log for all of the lifting sessions that user has done,
 * it provides tracking of performance with for example, heaviest, lighest
 * and average weight.
 */
class PerformanceLog {
  #collectionOfSessions
  #weightCollection

  /**
   * This constructor creates a new instance of PerformanceLog.
   */
  constructor () {
    this.#collectionOfSessions = []
    this.#weightCollection = new WeightCollection()
  }

  /**
   * This method returns how many sessions it is in the PerformanceLog.
   *
   * @returns {number} The number of sessions in the PerformanceLog.
   */
  getNumberOfSessions () {
    return this.#collectionOfSessions.length
  }

  /**
   * This method returns the heaviest lift in the PerformanceLog.
   *
   * @returns {string} The heaviest lift in the PerformanceLog.
   */
  getHeaviestLift () {
    this.validateLogNotEmpty()
    return this.#weightCollection.getHeaviestWeight().toString()
  }

  /**
   * This method returns the lightest lift in the PerformanceLog.
   *
   * @returns {string} The lightest lift in the PerformanceLog.
   */
  getLightestLift () {
    this.validateLogNotEmpty()
    return this.#weightCollection.getLightestWeight().toString()
  }

  /**
   * This method returns the average weight for all of the lifts in the unit user has chosen.
   *
   * @param {string} weightUnit The unit chosen for the average weight and is by default in kg.
   * @returns {string} Average weight as a string and it is two decimal places.
   */
  getAverageWeightOfAllLifts (weightUnit = 'kg') {
    this.validateLogNotEmpty()
    const averageWeight = this.#weightCollection.getAverageWeight(weightUnit).toString()
    return parseFloat(averageWeight).toFixed(2) + ' ' + weightUnit
  }

  /**
   * This method adds all lifts from a LiftSession to the collection of weights.
   *
   * @param {LiftSession} liftSession The LiftSession that lifts should be added from.
   */
  addLiftSessionWeightsToCollection (liftSession) {
    const lifts = liftSession.getSessionLifts()
    lifts.forEach(lift => {
      const weight = lift.weight // This should be a Weight object
      this.#weightCollection.addWeightToCollection(weight)
    })
  }

  /**
   * This method adds a LiftSession to the PerformanceLog.
   *
   * @param {LiftSession} liftSession The LiftSession that should be added to the PerformanceLog.
   */
  addLiftSession (liftSession) {
    this.validateSessionInstance(liftSession)
    this.#collectionOfSessions.push(liftSession)
    this.addLiftSessionWeightsToCollection(liftSession)
  }

  /**
   * This method validates that the performance log is not empty.
   */
  validateLogNotEmpty () {
    if (this.#collectionOfSessions.length === 0) {
      throw new Error('The log is empty, you must add at least one session to the log!')
    }
  }

  /**
   * This method validates if the instance of LiftSession is valid.
   *
   * @param {LiftSession} liftSession The LiftSession instance that is being validated.
   */
  validateSessionInstance (liftSession) {
    if (!(liftSession instanceof LiftSession)) {
      throw new Error('You must enter a valid instance of LiftSession!')
    }
  }
}

export default PerformanceLog
