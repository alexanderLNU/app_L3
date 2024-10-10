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

  updateLiftWeight (updatedWeight, updatedWeightUnit) {
    this.#weight = new Weight(updatedWeight, updatedWeightUnit)
  }

  updateLiftReps (updatedReps) {
    this.#reps = updatedReps
  }

  updateLiftSets (updatedSets) {
    this.#sets = updatedSets
  }

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
