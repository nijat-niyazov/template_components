export const addNewItemOptions = newItem => {
  return {
    optimisticData: currentData => {
      /*
       * It receives currentData and it will be displayed untill we populate our cache
       */
      return [...currentData, newItem].sort((a, b) => b.id - a.id);
    },
    rollbackOnError: true,
    /*
     * If mutation failed we want to set cache to its previous state (it will happen instead of populateCache)
     */
    populateCache: (stranger, currentData) => {
      /*
       * If mutation succed we will display our data like we return in this function (it will happen instead of rollbackOnError)
       */
      return [...currentData, stranger].sort((a, b) => b.id - a.id);
    },
    revalidate: false,
    /*
     * We don't want to revalidate if error happened
     */
    // throwOnError,
  };
};
