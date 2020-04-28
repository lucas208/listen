import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import sagas from './sagas'
import reducers from './ducks'

const middlewares = []

const sagaMonitor =
    process.env.NODE_ENV === 'development' ? console.tron.createSagaMonitor() : null

const sagaMiddleware = createSagaMiddleware({sagaMonitor})

middlewares.push(sagaMiddleware)

//const createAppropriateStore = 
//    process.env.NODE_ENV === 'development' ? console.tron.createStore : createStore
// Sintaxe descontinuada do reactotron, precisa de configuração adicional para funcionar
// apenas a segunda opção está rodando sem alterações, então chamei direto, funciona mas não
// será visível no reactotron

const store = createStore(reducers, compose(applyMiddleware(...middlewares)))

sagaMiddleware.run(sagas)

export default store