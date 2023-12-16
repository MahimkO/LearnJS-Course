import { createAsyncThunk } from "@reduxjs/toolkit";

export const getUsers = createAsyncThunk(
  'user/getUsers',
  async (
    _,
    { rejectWithValue }
  ) => {
    const response = await fetch('http://localhost:3001/api/users/');

    const result = await response.json();

    if (!Object.values(result).length) {
      return rejectWithValue('There is no users');
    }

    return result;
  },
  {
    // перепробовал 10 разных вариантов и всё равно не понимаю,
    // что нужно сделать, чтобы не было ререндеров :(
  }
);
