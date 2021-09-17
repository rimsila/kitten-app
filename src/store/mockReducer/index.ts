import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { RootState } from 'store/store';
import { request } from 'utils/request';
import { IMockReducer } from './type';

/** usage
 * https://redux-toolkit.js.org/usage/usage-with-typescript
 */

export interface CounterState {
  value: number;
  userStatus: 'idle' | 'loading' | 'failed';
  user: Partial<IMockReducer>;
}

const initialState: CounterState = {
  value: 0,
  userStatus: 'idle',
  user: { data: [] },
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
const getUserAsync = createAsyncThunk('mock/user', async (payload?: IMockReducer['meta']) => {
  const response: AxiosResponse<IMockReducer> = await request.get('/users', {
    params: payload,
  });
  return response?.data;
});

export const counterSlice = createSlice({
  name: 'mockStore',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<CounterState['value']>) => {
      state.value += action.payload;
    },
    clearUser: state => {
      state.user = initialState.user;
    },
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: builder => {
    builder
      .addCase(getUserAsync.pending, state => {
        state.userStatus = 'loading';
      })
      .addCase(getUserAsync.fulfilled, (state, action) => {
        state.userStatus = 'idle';
        state.user = action.payload;
      })
      .addCase(getUserAsync.rejected, state => {
        state.userStatus = 'failed';
      });
  },
});

/**
 * export fn dispatch
 */
export { getUserAsync };
export const { decrement, increment, incrementByAmount, clearUser } = counterSlice.actions;

export const selectMock = (state: RootState) => state.mockStore;

export default counterSlice.reducer;
