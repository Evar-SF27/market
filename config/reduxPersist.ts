import storage from 'redux-persist/lib/storage'

export const config = {
    key: "store",
    storage: storage,
    blacklist: ["extras"],
    version: 1
}