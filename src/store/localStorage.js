const version = "0.0.1"

export const loadState = () => {
  try {
    if (localStorage.getItem("storageVersion") !== version) {
      localStorage.clear();
      localStorage.setItem("storageVersion", version);
    }

    const serializedState = localStorage.getItem('cabinAdminState');
    if (serializedState) {
      return JSON.parse(serializedState);
    }
    return undefined;
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('cabinAdminState', serializedState);
  } catch (err) {
    console.log('We received an error while saving the store');
  }
};
