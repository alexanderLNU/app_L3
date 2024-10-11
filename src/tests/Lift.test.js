import Lift from '../classes/Lift.js'

describe('Lift Class', () => {
  test('Should create a new instance of Lift, and also be in correct props', () => {
    const lift = new Lift('Bench Press', 100, 'kg', 8, 4)
    const liftStats = lift.getLiftStats()

    expect(liftStats.lift).toBe('Bench Press')
    expect(liftStats.weight).toBe('100 kg')
    expect(liftStats.reps).toBe(8)
    expect(liftStats.sets).toBe(4)
  })
})
