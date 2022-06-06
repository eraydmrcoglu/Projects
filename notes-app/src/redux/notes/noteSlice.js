import { createSlice, nanoid } from '@reduxjs/toolkit';
export const noteSlice = createSlice({
  name: 'notes',
  initialState: {
    items: [],
    filteredItems: [],
    filterText: '',
  },
  reducers: {
    addNote: {
      reducer: (state, action) => {
        state.items.push(action.payload);
      },
      prepare: ({ title, body, color }) => {
        return {
          payload: {
            id: nanoid(),
            title: title,
            body: body,
            color: color,
          },
        };
      },
    },
    setFilterText: (state, action) => {
      state.filterText = action.payload;
    },
  },
});
export const selectFilterNote = (state) => {
  if (!state.notes.filterText.trim()) return state.notes.items;

  return state.notes.items.filter((item) =>
    item.title.toLowerCase().includes(state.notes.filterText.toLowerCase())
  );
};
export const { addNote, filterNote, setFilterText } = noteSlice.actions;
export default noteSlice.reducer;