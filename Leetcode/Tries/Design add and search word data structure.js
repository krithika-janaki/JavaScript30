// Design Add and Search Word Data Structure
// Design a data structure that supports adding new words and searching for existing words.

// Implement the WordDictionary class:

// void addWord(word) Adds word to the data structure.
// bool search(word) Returns true if there is any string in the data structure that matches word or false otherwise. word may contain dots '.' where dots can be matched with any letter.
// Example 1:

// Input:
// ["WordDictionary", "addWord", "day", "addWord", "bay", "addWord", "may", "search", "say", "search", "day", "search", ".ay", "search", "b.."]

// Output:
// [null, null, null, null, false, true, true, true]

// Explanation:
// WordDictionary wordDictionary = new WordDictionary();
// wordDictionary.addWord("day");
// wordDictionary.addWord("bay");
// wordDictionary.addWord("may");
// wordDictionary.search("say"); // return false
// wordDictionary.search("day"); // return true
// wordDictionary.search(".ay"); // return true
// wordDictionary.search("b.."); // return true
// Constraints:

// 1 <= word.length <= 20
// word in addWord consists of lowercase English letters.
// word in search consist of '.' or lowercase English letters.
// There will be at most 2 dots in word for search queries.
// At most 10,000 calls will be made to addWord and search.

class TrieNode {
    constructor() {
        this.children = {};
        this.endOfWord = false;
    }
}
class WordDictionary {
    constructor() {
        this.root = new TrieNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let curr = this.root;

        for(let char of word) {
            if(!curr.children[char]) {
                curr.children[char] = new TrieNode();
            }
            curr = curr.children[char];
        }
        curr.endOfWord = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {

       function dfs(ind, node) {
        let curr = node;

        for(let i=ind; i < word.length;i++) {
            const c = word[i];

            if(c === ".") {
                for(const child of curr.children) {
                    if(child && dfs(i+1, child)) {
                        return true;
                    }
                }
                return false;
            } else {
                if(!curr.children[word[i]]) {
                    return false
                }
                curr = curr.children[word[i]]
            }
        }

        return curr.endOfWord;
       }
    return dfs(0, this.root)
    }
}
