export function fetchLaunches() {
  return dispatch => {
    dispatch(fetchLaunchesBegin());
    return fetch('https://api.spacexdata.com/v2/launches')
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchLaunchesSuccess(json));
        return json;
      })
      .catch(error => dispatch(fetchLaunchesFailure(error)));
  };
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export const FETCH_LAUNCHES_BEGIN = 'FETCH_LAUNCHES_BEGIN';
export const FETCH_LAUNCHES_SUCCESS = 'FETCH_LAUNCHES_SUCCESS';
export const FETCH_LAUNCHES_FAILURE = 'FETCH_LAUNCHES_FAILURE';
export const CHANGE_LAUNCH = 'CHANGE_LAUNCH';
export const CHANGE_FILTER = 'CHANGE_FILTER';

export const fetchLaunchesBegin = () => ({
  type: FETCH_LAUNCHES_BEGIN,
});

export const fetchLaunchesSuccess = launchesEntries => ({
  type: FETCH_LAUNCHES_SUCCESS,
  payload: { launchesEntries },
});

export const fetchLaunchesFailure = error => ({
  type: FETCH_LAUNCHES_FAILURE,
  payload: { error },
});

export const changeLaunch = data => ({
  type: CHANGE_LAUNCH,
  payload: { data },
});

export const changeFilter = filter => ({
  type: CHANGE_FILTER,
  payload: { filter },
});
