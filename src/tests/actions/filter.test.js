// Filter test cases
import { setStartDate, setEndDate, setTextFilter, sortByAmount, sortByDate } from '../../actions/filters'
import moment from 'moment'
test('should generate set start date object', () => {
  const action = setStartDate(moment(0))
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  })
})
test('should generate set end date object', () => {
  const action = setEndDate(moment(0))
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  })
})

test('should generate set text filter', () => {
  const text = 'Something in'
  const action = setTextFilter(text)
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text
  })
})

test('should generate set empty text filter', () => {
  const action = setTextFilter()
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  })
})
test('should generate sortByDate', ()=>{
  expect(sortByDate()).toEqual({type: 'SORT_BY_DATE'})
})
test('should generate sortByAmount', ()=>{
  expect(sortByAmount()).toEqual({type: 'SORT_BY_AMOUNT'})
})
