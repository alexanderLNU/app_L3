import PerformanceLog from '../classes/PerformanceLog.js'
import LiftSession from '../classes/LiftSession.js'
import Lift from '../classes/Lift.js'

describe('PerformanceLog', () => {
  let performanceLog
  let liftSession1
  let liftSession2
  let lift1
  let lift2
  let lift3

  beforeEach(() => {
    performanceLog = new PerformanceLog()

    lift1 = new Lift('Bench Press', 180, 'kg', 8, 4)
    lift2 = new Lift('Squat', 220, 'kg', 5, 3)
    lift3 = new Lift('Deadlift', 170, 'kg', 6, 4)

    liftSession1 = new LiftSession('Strength Training 1')
    liftSession2 = new LiftSession('Strength Training 2')

    liftSession1.addLiftToSession(lift1)
    liftSession1.addLiftToSession(lift2)

    liftSession2.addLiftToSession(lift3)
  })

  test('LiftSessions should be added to performacnmelog', () => {
    performanceLog.addLiftSession(liftSession1)
    performanceLog.addLiftSession(liftSession2)

    expect(performanceLog.getNumberOfSessions()).toBe(2)
  })

  test('After adding liftsessions the heaviest weight should be returned', () => {
    performanceLog.addLiftSession(liftSession1)
    performanceLog.addLiftSession(liftSession2)

    const heaviestLift = performanceLog.getHeaviestLift()
    expect(heaviestLift).toBe('220 kg')
  })

  test('After adding liftsessions the lightest weight should be returned', () => {
    performanceLog.addLiftSession(liftSession1)
    performanceLog.addLiftSession(liftSession2)

    const lightestLift = performanceLog.getLightestLift()
    expect(lightestLift).toBe('170 kg')
  })

  test('Average weight of all lifts should be returned', () => {
    performanceLog.addLiftSession(liftSession1)
    performanceLog.addLiftSession(liftSession2)

    const averageWeight = performanceLog.getAverageWeightOfAllLifts('kg')
    expect(averageWeight).toBe('190.00 kg')
  })

  test('If a invalid liftsession is tryign to be added, throw error', () => {
    expect(() => performanceLog.addLiftSession({})).toThrow(
      'You must enter a valid instance of LiftSession!'
    )
  })

  test('If trying to get lifts from empty performancelog, throw error', () => {
    expect(() => performanceLog.getHeaviestLift()).toThrow(
      'The log is empty, you must add at least one session to the log!'
    )
  })
})
