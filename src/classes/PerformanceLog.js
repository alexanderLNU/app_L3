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

  constructor () {
    this.#collectionOfSessions = []
    this.#weightCollection = new WeightCollection()
  }

  getNumberOfSessions () {
    return this.#collectionOfSessions.length
  }

  getHeaviestLift () {
    this.validateLogNotEmpty()
    return this.#weightCollection.getHeaviestWeight().toString()
  }

  getLightestLift () {
    this.validateLogNotEmpty()
    return this.#weightCollection.getLightestWeight().toString()
  }

  getAverageWeightOfAllLifts (weightUnit = 'kg') {
    this.validateLogNotEmpty()
    const averageWeight = this.#weightCollection.getAverageWeight(weightUnit).toString()
    return parseFloat(averageWeight).toFixed(2) + ' ' + weightUnit
  }

  addLiftSessionWeightsToCollection (liftSession) {
    const lifts = liftSession.getSessionLifts()
    lifts.forEach(lift => {
      const weight = lift.weight // This should be a Weight object
      this.#weightCollection.addWeightToCollection(weight)
    })
  }

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
