export const capitalizeFirstLetter = (word: string) => {
  if (!word) return word // Return if the word is empty or null
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
}
