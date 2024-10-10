import { Weight } from 'weight-module-alexander-rolf'

/**
 * This class represents a life and it has the properties lift, weight, reps and sets.
 */
class Lift {
  #lift
  #weight
  #reps
  #sets

  /**
   * This constructor creates a new instance of Lift.
   *
   * @param {string} lift       The name of the Lift.
   * @param {number} weight     How heavy is the Lift.
   * @param {string} weightUnit What weight unit is the Lift in.
   * @param {number} reps       How many reps did the user perform.
   * @param {number} sets       How many sets did the user perform.
   */
  constructor (lift, weight, weightUnit, reps, sets) {
    this.#lift = lift
    this.#weight = new Weight(weight, weightUnit)
    this.#reps = reps
    this.#sets = sets
  }

  /**
   * THis method updates the weight of the lift.
   *
   * @param {number} updatedWeight     The new weight of the lift.
   * @param {string} updatedWeightUnit The new weight unit of the lift.
   */
  updateLiftWeight (updatedWeight, updatedWeightUnit) {
    this.#weight = new Weight(updatedWeight, updatedWeightUnit)
  }

  /**
   * This method updates the reps of the lift.
   *
   * @param {number} updatedReps The new reps of the lift.
   */
  updateLiftReps (updatedReps) {
    this.#reps = updatedReps
  }

  /**
   * This method updates the sets of the lift.
   *
   * @param {number} updatedSets The new sets of the lift.
   */
  updateLiftSets (updatedSets) {
    this.#sets = updatedSets
  }

  /**
   * This method returns the lift stats (CURRENT).
   *
   * @returns {object} The lift stats (lift, weight, reps, sets).
   */
  getLiftStats () {
    return {
      lift: this.#lift,
      weight: this.#weight.toString(),
      reps: this.#reps,
      sets: this.#sets
    }
  }
}

export default Lift
