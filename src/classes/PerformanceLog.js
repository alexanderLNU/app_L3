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
}

export default PerformanceLog