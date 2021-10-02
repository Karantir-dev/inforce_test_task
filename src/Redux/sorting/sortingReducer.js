import { createReducer } from '@reduxjs/toolkit'
import sortingAction from './sortingAction'

const sortingParameter = createReducer('name', {
  [sortingAction]: (_, { payload }) => payload,
})

export default sortingParameter
