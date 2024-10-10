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
    this.validateLift(lift)
    this.validateWeight(weight)
    this.validateReps(reps)
    this.validateSets(sets)

    this.#lift = lift
    this.#weight = new Weight(weight, weightUnit)
    this.#reps = reps
    this.#sets = sets
  }

  /**
   * This method validates the lift to make sure it is a string and not empty.
   *
   * @param {string} lift The lift to validate.
   */
  validateLift (lift) {
    if (typeof lift !== 'string' || lift.length === 0) {
      throw new Error('You must enter the lift you performed and not leave it empty!')
    }
  }

  /**
   * This method validates the weight to make sure it is a number and not less than or equal to 0.
   *
   * @param {number} weight The weight to validate.
   */
  validateWeight (weight) {
    if (typeof weight !== 'number' || weight <= 0) {
      throw new Error('You have to enter the weight you lifted!')
    }
  }

  /**
   * This method validates the reps to make sure it is a number and not less than or equal to 0.
   *
   * @param {number} reps The reps to validate.
   */
  validateReps (reps) {
    if (typeof reps !== 'number' || reps <= 0) {
      throw new Error('You have to enter the reps you performed!')
    }
  }

  /**
   * This method validates the sets to make sure it is a number and not less than or equal to 0.
   *
   * @param {number} sets The sets to validate.
   */
  validateSets (sets) {
    if (typeof sets !== 'number' || sets <= 0) {
      throw new Error('You have to enter the sets you performed!')
    }
  }

  /**
   * THis method updates the weight of the lift.
   *
   * @param {number} updatedWeight     The new weight of the lift.
   * @param {string} updatedWeightUnit The new weight unit of the lift.
   */
  updateLiftWeight (updatedWeight, updatedWeightUnit) {
    this.validateWeight(updatedWeight)
    this.#weight = new Weight(updatedWeight, updatedWeightUnit)
  }

  /**
   * This method updates the reps of the lift.
   *
   * @param {number} updatedReps The new reps of the lift.
   */
  updateLiftReps (updatedReps) {
    this.validateReps(updatedReps)
    this.#reps = updatedReps
  }

  /**
   * This method updates the sets of the lift.
   *
   * @param {number} updatedSets The new sets of the lift.
   */
  updateLiftSets (updatedSets) {
    this.validateSets(updatedSets)
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
