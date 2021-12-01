import RoutePathsMap from '../constants/RoutePathsMap';
/**
 *  Resolve the routePath with params/query
 *
 * /journey/:journeyId  - params { journeyId: 1 }
 * -> /journey/1
 *
 * @param {string} routePath
 * @param {Object} params
 * @param {Object} query
 */
const createPath = (routePath, params, query) => {
  // TODO Implement later
  return routePath;
};

export const navigateToRoute = (navigate, routePath, params, query) => {
  const path = createPath(routePath, params, query);
  navigate(path);
};

export const navigateToStrategyHubPage = (navigate) => {
  navigateToRoute(navigate, RoutePathsMap.Journey.StrategyHub);
};
export const navigateToJourneyPage = (navigate) => {
  navigateToRoute(navigate, RoutePathsMap.Journey.index);
};
