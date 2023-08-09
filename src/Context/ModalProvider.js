import { createContext, useReducer } from "react";

export const ModalCtx = createContext({
  modalDataInfo: {},
  onOpenModal: () => {},
  onCloseModal: () => {},
});

const initModalState = {
  modalState: false,
  activeStatusID: "",
  tweetComments: [],
  theTweetData: {},
};

const modalReducer = (_, action) => {
  switch (action.type) {
    case "OPEN-MODAL":
      return action.values;
    case "CLOSE-MODAL":
      return initModalState;
    default:
      return initModalState;
  }
};

const ModalProvider = (props) => {
  const [initialReducer, dispatchReducer] = useReducer(
    modalReducer,
    initModalState
  );

  const onOpenModal = (openData) => {
    // set modal state = true
    // get the status id of clicked tweet
    // get comments of clicked tweet
    dispatchReducer({ type: "OPEN-MODAL", values: openData });
  };

  const onCloseModal = () => {
    // set modal state = false
    // clear the status id of clicked tweet
    // clear comments of clicked tweet
    dispatchReducer({ type: "CLOSE-MODAL" });
  };

  const modalStatus = {
    modalDataInfo: initialReducer,
    onOpenModal,
    onCloseModal,
  };
  return (
    <ModalCtx.Provider value={modalStatus}>{props.children}</ModalCtx.Provider>
  );
};

export default ModalProvider;
