import { createAction } from '@reduxjs/toolkit'

export const updateCategoryLoading = createAction<{
  cateLoading: boolean
}>('app/updateCategoryLoading')
