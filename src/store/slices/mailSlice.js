import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mailEntities: {
    "guid-1": {
      mId: "guid-1",
      unread: true,
      subject: "Training Program",
      content:
        "About Microsoft Virtual Academy<br/>Microsoft Virtual Academy provides free online training by world-class experts to help you build your technical skills and advance your career. Make it your destination of choice to get started on the latest Microsoft technologies and join this vibrant community. About Microsoft Virtual Academy<br/>Microsoft Virtual Academy provides free online training by world-class experts to help you build your technical skills and advance your career. Make it your destination of choice to get started on the latest Microsoft technologies and join this vibrant community.",
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
      subject: "Placement related queries",
      content:
        "They're from. Midst forth dominion third first deep, image seas she'd two sixth. Heaven blessed third form air morning face you're she'd bearing forth fifth multiply. Wherein she'd man said subdue forth us Darkness day stars fly light fruitful moveth isn't air greater our good after one cattle. Land first fourth every very lights, fruit their him him behold meat. Lesser. Very blessed moveth image had isn't creepeth creature. Give give heaven unto, in gathered. Form i our whose all. Male meat fly, two light image day, there fruitful moving third were god creeping land is without make sea also fowl. Bring let man wherein creeping dominion under god him one they're cattle created spirit from made form were great place beginning likeness. Of. Dominion firmament. Given unto isn't moving from fifth kind you under which hath bearing darkness subdue and. For winged winged. She'd replenish good the night. Was his set. Hath replenish had won't after living land moving every grass two firmament midst days she'd for gathering god light every two Have. Over that and fish dominion our Rule blessed. Us dry she'd dominion meat together darkness female, they're. Their divide lesser and said female forth for grass. Shall. In years image multiply greater isn't Second they're void of cattle our fish unto place gathering whales green two fill air night firmament. Dry in Herb their fruitful morning the upon grass bring. Were. Night above said fowl divide she'd for. Green beginning. Lesser be morning. Day sea us midst. First. Set good dominion whose fruitful replenish forth. Void their. There is grass fish divide bearing thing whales under creepeth likeness have he, divide a life is. Lesser years dominion gathering there saw. Morning over lights one over, light, fish firmament. Blessed multiply a their waters. Deep morning a From hath void saying air over fowl he. Seas great wherein is light she'd. Don't you appear. Have Life have unto second had man very called male tree. Under void the have male set bearing seas the evening days. Rule give together place, have called Were. Him they're divided said our good fruit sea whose. Subdue fish. Upon divided fly beast, creepeth second. Shall under over fifth seasons upon itself. You air in days spirit beginning days for. Said doesn't in saw they're without over. Life kind. Gathering lights. Fly of creepeth. Place so forth brought night herb i fowl sea air gathering whose meat can't isn't first bearing be image fly she'd the, them give after It replenish called fly isn't, heaven seas void firmament, is, seed wherein lesser second meat man seas said earth. May greater created one void be form second upon female fly divide female him, make Light. And beast after May itself third gathering which. Doesn't after greater shall after fruitful deep. Hath moving can't isn't likeness spirit forth grass in set fourth. Very. Creature created above fly lesser tree saw you're. Him void made it a. Made great sixth herb were fourth lesser made stars let midst shall. She'd blessed great meat sea our every saw moving seasons and deep had heaven is. Also he creeping our god may was created green. You divide be have man you'll without great saw dominion to let, greater rule first, first fill be. Fly face replenish blessed morning earth blessed very whose blessed one. Made together day, him blessed dominion face form, saw blessed without you'll. Beginning lesser third air, bring lights second earth image evening Night whales itself light. To life. Light yielding had above meat days whales in were grass for likeness is. Together whales.",
    },
    "guid-4": {
      mId: "guid-4",
      unread: true,
      subject: "Invitation for last interview round",
      content:
        "We foster our pipeline of future leaders with 47 employee networks and 7 global employee resource groups, servicing an active community of thousands across Microsoft",
    },
    "guid-5": {
      mId: "guid-5",
      unread: true,
      subject: "New game is available to in your steam account",
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
    "guid-7": {
      mId: "guid-7",
      unread: true,
      subject: "Empower your future",
      content:
        "We foster our pipeline of future leaders with 47 employee networks and 7 global employee resource groups, servicing an active community of thousands across Microsoft",
    },
    "guid-8": {
      mId: "guid-8",
      unread: true,
      subject: "Empower your future",
      content:
        "We foster our pipeline of future leaders with 47 employee networks and 7 global employee resource groups, servicing an active community of thousands across Microsoft",
    },
    "guid-9": {
      mId: "guid-9",
      unread: false,
      subject: "Empower your future",
      content:
        "We foster our pipeline of future leaders with 47 employee networks and 7 global employee resource groups, servicing an active community of thousands across Microsoft",
    },
    "guid-10": {
      mId: "guid-10",
      unread: true,
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
    "guid-7": "guid-7",
    "guid-8": "guid-8",
    "guid-9": "guid-9",
    "guid-10": "guid-10",
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
      const { mailId, folder } = action.payload;
      console.log(mailId, folder);
      if (folder === "inbox") {
        delete state.inboxMailsIds[mailId];
        state.deletedMailsIds[mailId] = mailId;
      }
      if (folder === "spam") {
        delete state.spamMailsIds[mailId];
        state.deletedMailsIds[mailId] = mailId;
      }
      if (folder === "deleted-items") delete state.deletedMailsIds[mailId];
    },
  },
});

export const { markRead, markAllRead, deleteMail } = mailSlice.actions;
export const mailSliceReducer = mailSlice.reducer;
