import Lift from '../classes/Lift.js'

describe('Lift Class tests', () => {
  test('Should create a new instance of Lift, and also be in correct props', () => {
    const lift = new Lift('Bench Press', 100, 'kg', 8, 4)
    const liftStats = lift.getLiftStats()

    expect(liftStats.lift).toBe('Bench Press')
    expect(liftStats.weight.weight).toBe(100)
    expect(liftStats.weight.weightUnit).toBe('kg')
    expect(liftStats.reps).toBe(8)
    expect(liftStats.sets).toBe(4)
  })

  test('Should update the Lifts weight correctly', () => {
    const lift = new Lift('Shoulder Raises', 7, 'kg', 8, 4)
    lift.updateLiftWeight(8, 'kg')
    const liftStats = lift.getLiftStats()

    expect(liftStats.weight.weight).toBe(8)
    expect(liftStats.weight.weightUnit).toBe('kg')
  })

  test('Should update the Lifts reps and sets correctly', () => {
    const lift = new Lift('Leg Curl', 20, 'kg', 8, 4)
    lift.updateLiftReps(14)
    lift.updateLiftSets(3)
    const liftStats = lift.getLiftStats()

    expect(liftStats.reps).toBe(14)
    expect(liftStats.sets).toBe(3)
  })

  test('Weight should return formatted as string using toString()', () => {
    const lift = new Lift('Bench Press', 100, 'kg', 8, 4)
    const liftStats = lift.getLiftStats()

    expect(liftStats.weight.toString()).toBe('100 kg')
  })
})
