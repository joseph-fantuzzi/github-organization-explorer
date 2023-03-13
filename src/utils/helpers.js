/**filters list by search query from user
 * @returns filtered array
 */
export const filteredSearch = (query, list, isCommit) => {
  const sanitize = query.trim().toLowerCase();
  if (!sanitize) return list;
  if (isCommit) {
    return list.filter((item) => {
      return item.commit.message.toLowerCase().includes(sanitize);
    });
  } else {
    return list.filter((item) => {
      return item.name.toLowerCase().includes(sanitize);
    });
  }
};

/**capitalizes the first letter of a string
 * @returns string
 */
export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

/**formats date with format month.date.year
 * @returns string
 */
export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return `${date.getMonth() + 1}.${date.getDate()}.${date.getFullYear()}`;
};
