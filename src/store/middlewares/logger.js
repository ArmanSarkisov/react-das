const logger = store => next => (action) => {
    const nextAction = next(action);
    // console.log(nextAction instanceof Promise);
    // console.group(action.type)
    // console.info('dispatching', action)

    // console.log('next state', store.getState())
    // console.groupEnd()
    return nextAction
}

export {
    logger,
}