function anagramFinderV1(anagramList: string[]): string[][] {
  const anagrams: { [key: string]: string[] } = {};
  // Iterate and match key -> uniqueCharacters sorted and value -> Anagrams with those characters
  for (let i = 0; i < anagramList.length; i++) {
    const substring = anagramList[i].split("").sort().join("");
    const uniqueCharacters = Array.from(new Set(substring)).join("");
    // If key exist, push the substring, otherwise create key with current substring
    if (anagrams[uniqueCharacters]) {
      anagrams[uniqueCharacters].push(anagramList[i]);
    } else {
      anagrams[uniqueCharacters] = [anagramList[i]];
    }
  }

  // Fitler keys that only have one value and match expected output
  const anagramsValues: string[][] = Object.values(anagrams);
  return anagramsValues.filter((list) => list.length !== 1);
}

function anagramFinderV2(anagramList: string[]): { [key: string]: string[] } {
  const anagrams: { [key: string]: string[] } = {};
  // Iterate and match key -> uniqueCharacters sorted and value -> Anagrams with those characters
  for (let i = 0; i < anagramList.length; i++) {
    const substring = anagramList[i].split("").sort().join("");
    const uniqueCharacters = Array.from(new Set(substring)).join("");

    if (anagrams[uniqueCharacters]) {
      anagrams[uniqueCharacters].push(anagramList[i]);
    } else {
      anagrams[uniqueCharacters] = [anagramList[i]];
    }
  }
  return anagrams;
}
