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

  /**
   * This method returns all the lifts registered in that session.
   *
   * @returns {Array} An array of all the lifts registered in that session.
   */
  getSessionLifts () {
    return this.#sessionLifts.map(lift => lift.getLiftStats())
  }

  /**
   * This method is adding a lift to the session.
   *
   * @param {Lift} lift The lift that should be added to the session.
   */
  addLiftToSession (lift) {
    this.validateLiftInstance(lift)
    this.#sessionLifts.push(lift)
    this.addLiftToCollection(lift)
  }

  /**
   * This method adds the weight of lift to the collection of weights.
   *
   * @param {Lift} lift The lift we extract the weight from to add to collection.
   */
  addLiftToCollection (lift) {
    this.#weightCollection.addWeightToCollection(lift.getWeight())
  }

  /**
   * This method validates if lift is a valid instance of lift (the class).
   *
   * @param {Lift} lift The lfit that is being validated.
   */
  validateLiftInstance (lift) {
    if (!(lift instanceof Lift)) {
      throw new Error('You must enter a valid lift instance!')
    }
  }
}

export default LiftSession
