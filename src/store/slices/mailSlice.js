import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mailEntities: {
    "guid-1": {
      mId: "guid-1",
      unread: true,
      subject: "Training Program",
      content:
        "About Microsoft Virtual Academy<br/>Microsoft Virtual Academy provides free online training by world-class experts to help you build your technical skills and advance your career. Make it your destination of choice to get started on the latest Microsoft technologies and join this vibrant community.",
    },
    "guid-2": {
      mId: "guid-2",
      unread: false,
      subject: "Empower your future",
      content:
        "We foster our pipeline of future leaders with 47 employee networks and 7 global employee resource groups, servicing an active community of thousands across Microsoft",
    },
    "guid-3": {
      mId: "guid-3",
      unread: false,
      subject: "Empower your future",
      content:
        "We foster our pipeline of future leaders with 47 employee networks and 7 global employee resource groups, servicing an active community of thousands across Microsoft",
    },
    "guid-4": {
      mId: "guid-4",
      unread: true,
      subject: "Empower your future",
      content:
        "We foster our pipeline of future leaders with 47 employee networks and 7 global employee resource groups, servicing an active community of thousands across Microsoft",
    },
    "guid-5": {
      mId: "guid-5",
      unread: false,
      subject: "Empower your future",
      content:
        "We foster our pipeline of future leaders with 47 employee networks and 7 global employee resource groups, servicing an active community of thousands across Microsoft",
    },
    "guid-6": {
      mId: "guid-6",
      unread: false,
      subject: "Empower your future",
      content:
        "We foster our pipeline of future leaders with 47 employee networks and 7 global employee resource groups, servicing an active community of thousands across Microsoft",
    },
  },
  inboxMailsIds: {
    "guid-1": "guid-1",
    "guid-2": "guid-2",
    "guid-3": "guid-3",
    "guid-4": "guid-4",
    "guid-5": "guid-5",
    "guid-6": "guid-6",
  },
  spamMailsIds: {
    "guid-1": "guid-1",
    "guid-2": "guid-2",
    "guid-3": "guid-3",
  },
  deletedMailsIds: {},
};

const mailSlice = createSlice({
  name: "mail",
  initialState,
  reducers: {
    markRead(state, action) {
      const { mailId } = action.payload;
      state.mailEntities[mailId].unread = false;
    },
    markAllRead(state, action) {
      const mailsIds = Object.keys(state.mailEntities);
      mailsIds.forEach((mailId) => (state.mailEntities[mailId].unread = false));
    },
    deleteMail(state, action) {
      const { mailId } = action.payload;
      state.deletedMailsIds[mailId] = mailId;
    },
  },
});

export const { markRead, markAllRead, deleteMail } = mailSlice.actions;
export const mailSliceReducer = mailSlice.reducer;
