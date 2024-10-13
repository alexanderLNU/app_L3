import { WeightCollection } from 'weight-module-alexander-rolf'
import Lift from './Lift'

/**
 * This class represents a strength lifting session.
 */
class LiftSession {
  #nameOfSession
  #sessionLifts
  #weightCollection

  /**
   * Constructs a new strenght lifting session with the name of the session.
   *
   * @param {string} nameOfSession The name of sessuion.
   */
  constructor (nameOfSession) {
    this.#sessionLifts = []
    this.#weightCollection = new WeightCollection()
    this.#nameOfSession = nameOfSession
  }

  // Add the lfit to the session.
  addLiftToSession (lift) {
    this.validateLiftInstance(lift)
    this.#sessionLifts.push(lift)
    this.addLiftToCollection(lift)
  }

  // Add the lift to the collection.
  addLiftToCollection (lift) {
    this.#weightCollection.addWeightToCollection(lift.getWeight())
  }

  validateLiftInstance (lift) {
    if (!(lift instanceof Lift)) {
      throw new Error('You must enter a valid lift instance!')
    }
  }
}

export default LiftSession
