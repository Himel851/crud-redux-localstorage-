const initialState = [
    { id: 0, name: "Raman Sharma", email: "email@email.com", phone: 1234567890 },
    { id: 1, name: "Test Name", email: "test@test.com", phone: 4567891230 },
];

export const contactReducer = (state = [], action) => {
    switch (action.type) {
      case "ADD_CONTACT":
        state = [...state, action.payload];
        saveStateToLocalStorage(state);
        return state;
      case "DELETE_CONTACT":
        const contactFilter = state.filter((contact) =>
          contact.id === action.payload ? null : contact
        );
        state = contactFilter;
        saveStateToLocalStorage(state);
        return state;
      case "UPDATE_CONTACT":
        const contactUpdate = state.map((contact) =>
          contact.id === action.payload.id
            ? Object.assign({}, contact, action.payload)
            : contact
        );
        state = contactUpdate;
        saveStateToLocalStorage(state);
        return state;
      case "RESET_CONTACT":
        state = [{ name: null, email: null, phone: null }];
        saveStateToLocalStorage(state);
        return state;
      default:
        const storedState = loadStateFromLocalStorage();
        return storedState ? storedState : state;
    }
  };
  
  // Function to save state to local storage
  const saveStateToLocalStorage = (state) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem("state", serializedState);
    } catch (error) {
      console.error("Error saving state to local storage:", error);
    }
  };
  
  // Function to load state from local storage
  const loadStateFromLocalStorage = () => {
    try {
      const serializedState = localStorage.getItem("state");
      if (serializedState === null) {
        return undefined;
      }
      return JSON.parse(serializedState);
    } catch (error) {
      console.error("Error loading state from local storage:", error);
      return undefined;
    }
  };
  
// export const contactReducer = (state = [], action) => {
//     switch (action.type) {
//         case "ADD_CONTACT":
//             state = [...state, action.payload];
//             return state;
//         case "DELETE_CONTACT":
//             const contactFilter = state.filter((contact) =>
//                 contact.id === action.payload ? null : contact
//             );
//             state = contactFilter;
//             return state;
//         case "UPDATE_CONTACT":
//             const contactUpdate = state.filter((contact) =>
//                 contact.id === action.payload.id
//                     ? Object.assign(contact, action.payload)
//                     : contact
//             );
//             state = contactUpdate;
//             return state;
//         case "RESET_CONTACT":
//             state = [{ name: null, email: null, phone: null }];
//             return state;
//         default:
//             return state;
//     }
// };
