import LiftSession from '../classes/LiftSession.js'
import Lift from '../classes/Lift.js'

// Make the variables global to be used in all tests.
describe('LiftSession tests', () => {
  let liftSession
  let lift1
  let lift2

  // Runs before every test to have data.
  beforeEach(() => {
    liftSession = new LiftSession('PPL - Push')
    lift1 = new Lift('Bench Press', 90, 'kg', 8, 4)
    lift2 = new Lift('Pecken', 50, 'kg', 12, 4)
  })

  test('Name of the session should be returned', () => {
    expect(liftSession.nameOfSession).toBe('PPL - Push')
  })

  test('Lifts should be added to the session correctly', () => {
    liftSession.addLiftToSession(lift1)
    liftSession.addLiftToSession(lift2)

    const lifts = liftSession.getSessionLifts()

    expect(lifts.length).toBe(2)
    expect(lifts[0].lift).toBe('Bench Press')
    expect(lifts[0].weight).toBe('90 kg')
    expect(lifts[0].reps).toBe(8)
    expect(lifts[0].sets).toBe(4)

    expect(lifts[1].lift).toBe('Pecken')
    expect(lifts[1].weight).toBe('50 kg')
    expect(lifts[1].reps).toBe(12)
    expect(lifts[1].sets).toBe(4)
  })

  test('The name of the session should be validated to not be empty', () => {
    expect(() => new LiftSession('')).toThrow(
      'You must enter the name of the session, it cannot be empty!'
    )
  })

  test('If a session has no lifts it must be added first', () => {
    expect(() => liftSession.getSessionLifts()).toThrow(
      'The session has no lifts, you must add at least one lift to the session!'
    )
  })

  test('Instance of Lift should be validated', () => {
    expect(() => liftSession.addLiftToSession({})).toThrow(
      'You must enter a valid lift instance!'
    )
  })
})
