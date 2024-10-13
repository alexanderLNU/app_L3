import { WeightCollection } from 'weight-module-alexander-rolf'
import Lift from './Lift.js'

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
    this.validateNameOfSession(nameOfSession)
    this.#sessionLifts = []
    this.#weightCollection = new WeightCollection()
    this.#nameOfSession = nameOfSession
  }

  /**
   * This method returns the name of the session.
   *
   * @returns {string} The name of the session.
   */
  get nameOfSession () {
    return this.#nameOfSession
  }

  /**
   * This method returns all the lifts registered in that session.
   *
   * @returns {Array} An array of all the lifts registered in that session.
   */
  getSessionLifts () {
    this.validateSessionNotEmpty()
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

  /**
   * This method validates that the session is not empty.
   */
  validateSessionNotEmpty () {
    if (this.#sessionLifts.length === 0) {
      throw new Error('The session has no lifts, you must add at least one lift to the session!')
    }
  }

  /**
   * THis method validated that the sessions name is a string and also that it is not empty.
   *
   * @param {string} nameOfSession The name of the session.
   */
  validateNameOfSession (nameOfSession) {
    if (typeof nameOfSession !== 'string' || nameOfSession.length === 0) {
      throw new Error('You must enter the name of the session, it cannot be empty!')
    }
  }
}

export default LiftSession
