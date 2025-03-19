// Returns the anagram count using a object map, like:  {act: [ 'cat', 'act' ],dgo: [ 'dog', 'god' ]}
function getAnagramCount(array: string[]): { [key: string]: string[] } {
  let anagramCount: { [key: string]: string[] } = {};
  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    const sortedItem = item.split("").sort().join("");
    (anagramCount[sortedItem] ||= []).push(item);
  }
  return anagramCount;
}

// Get the anagramCount and then filter them to get only the actual anagrams (2+ entries for unique value)
export function anagramFinderV1(array: string[]): string[][] {
  return Object.values(getAnagramCount(array)).filter(
    (anagramList) => anagramList.length > 1
  );
}

// Exactly the same implementation that we have for getAnagramCount
export function anagramFinderV2(
  array: string[]
): ReturnType<typeof getAnagramCount> {
  return getAnagramCount(array);
}
