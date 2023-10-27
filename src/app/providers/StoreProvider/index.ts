import {ReduxStoreWithManager, StateSchema, ThunkConfig, ThunkExtraArg} from './config/StateShema'
import {AppDispatch, createReduxStore} from './config/store'
import {StoreProvider} from './ui/StoreProvider'

export {
    StoreProvider,
    createReduxStore,
    StateSchema,
    ReduxStoreWithManager,
    AppDispatch,
    ThunkExtraArg,
    ThunkConfig,
}
