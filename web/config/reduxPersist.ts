import storage from 'redux-persist/lib/storage'

export const config = {
    key: "root",
    storage: storage,
    blacklist: ["extras"],
    version: 1
}