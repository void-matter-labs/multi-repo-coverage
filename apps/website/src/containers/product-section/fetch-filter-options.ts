export const fetchFilterOptions = () => {
  return fetch("https://example.com/filters").then(res => res.json())
}
