import PerformanceLog from '../classes/PerformanceLog.js'
import LiftSession from '../classes/LiftSession.js'
import Lift from '../classes/Lift.js'

describe('PerformanceLog', () => {
  let performanceLog
  let liftSession1
  let liftSession2
  let liftSession3
  let lift1
  let lift2
  let lift3
  let lift4
  let lift5
  let lift6

  beforeEach(() => {
    performanceLog = new PerformanceLog()

    lift1 = new Lift('Bench Press', 180, 'kg', 8, 4)
    lift2 = new Lift('Squat', 220, 'kg', 5, 3)
    lift3 = new Lift('Deadlift', 170, 'kg', 6, 4)
    lift4 = new Lift('Bench Press', 190, 'kg', 7, 3)
    lift5 = new Lift('Bench Press', 200, 'kg', 6, 3)
    lift6 = new Lift('Bench Press', 175, 'kg', 10, 4)

    liftSession1 = new LiftSession('Strength Training 1')
    liftSession2 = new LiftSession('Strength Training 2')
    liftSession3 = new LiftSession('Strength Training 3')

    liftSession1.addLiftToSession(lift1)
    liftSession1.addLiftToSession(lift2)
    liftSession2.addLiftToSession(lift3)
    liftSession2.addLiftToSession(lift4)
    liftSession3.addLiftToSession(lift5)
    liftSession3.addLiftToSession(lift6)
  })

  test('LiftSessions should be added to PerformanceLog', () => {
    performanceLog.addLiftSession(liftSession1)
    performanceLog.addLiftSession(liftSession2)
    performanceLog.addLiftSession(liftSession3)

    expect(performanceLog.getNumberOfSessions()).toBe(3)
  })

  test('After adding lift sessions, the heaviest Bench Press should be returned', () => {
    performanceLog.addLiftSession(liftSession1)
    performanceLog.addLiftSession(liftSession2)
    performanceLog.addLiftSession(liftSession3)

    const heaviestBenchPress = performanceLog.getHeaviestLiftForSpecificLift('Bench Press')
    expect(heaviestBenchPress).toBe('200 kg')
  })

  test('After adding lift sessions, the heaviest weight overall should be returned', () => {
    performanceLog.addLiftSession(liftSession1)
    performanceLog.addLiftSession(liftSession2)
    performanceLog.addLiftSession(liftSession3)

    const heaviestLift = performanceLog.getHeaviestLift()
    expect(heaviestLift).toBe('220 kg')
  })

  test('If trying to get heaviest lift for a lift name not in log, throw error', () => {
    performanceLog.addLiftSession(liftSession1)
    performanceLog.addLiftSession(liftSession2)
    performanceLog.addLiftSession(liftSession3)

    expect(() => performanceLog.getHeaviestLiftForSpecificLift('Shoulder Press')).toThrow(
      'There is no lifts of Shoulder Press in the log!'
    )
  })

  test('After adding lift sessions, the lightest weight should be returned', () => {
    performanceLog.addLiftSession(liftSession1)
    performanceLog.addLiftSession(liftSession2)
    performanceLog.addLiftSession(liftSession3)

    const lightestLift = performanceLog.getLightestLift()
    expect(lightestLift).toBe('170 kg')
  })

  test('Average weight of all lifts should be returned', () => {
    performanceLog.addLiftSession(liftSession1)
    performanceLog.addLiftSession(liftSession2)
    performanceLog.addLiftSession(liftSession3)

    const averageWeight = performanceLog.getAverageWeightOfAllLifts('kg')
    expect(averageWeight).toBe('189.17 kg')
  })

  test('If an invalid lift session is trying to be added, throw error', () => {
    expect(() => performanceLog.addLiftSession({})).toThrow(
      'You must enter a valid instance of LiftSession!'
    )
  })

  test('If trying to get lifts from empty PerformanceLog, throw error', () => {
    expect(() => performanceLog.getHeaviestLift()).toThrow(
      'The log is empty, you must add at least one session to the log!'
    )
  })
})
