import { startLoading, stopLoading } from '../ui/actions';

const loaderMiddlewear = store => next => async (action) => {
    const nextAction = next(action);

    if (nextAction instanceof Promise) {
        const toggleLoading = (state) => {
            state ? store.dispatch(startLoading()) : store.dispatch(stopLoading());
        };
        toggleLoading(true);
        try {
            toggleLoading(false);
            return await nextAction;
        } catch (e) {
            toggleLoading(false);
            throw Error(e);
        }
    }
    return nextAction;
}

export default loaderMiddlewear;
