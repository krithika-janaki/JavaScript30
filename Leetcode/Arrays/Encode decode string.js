// Encode and Decode Strings
// Design an algorithm to encode a list of strings to a single string. The encoded string is then decoded back to the original list of strings.

// Please implement encode and decode

// Example 1:

// Input: ["neet","code","love","you"]

// Output:["neet","code","love","you"]
// Example 2:

// Input: ["we","say",":","yes"]

// Output: ["we","say",":","yes"]
// Constraints:

// 0 <= strs.length < 100
// 0 <= strs[i].length < 200
// strs[i] contains only UTF-8 characters.
/*pseudocode
encode 
FOR str of strings
l = length
newstr= convert to 6#str
res += newstr
return res

decode
i=0,j=0
let length
FOR str of strings
IF str is not # , i++
END IF
j = i
WHILE j != 0
res = res + str
END WHILE
i = i + 
*/

function encode(str) {
let res;

for(let s of str) {
  res += s.length + "#" + s;
}
return res;
}


function decode(str) {
  let res = []; 
  let i=0;
  let j=0;

  while(i< str.length) {
    j = i;

    while(str[j] !==  "#") { []
      j++;
    }

    let length = str.substring(i,j);
    i = j+1;
    j = i + length;
    res.push(str.substring(i,j))
    i = j
  }

}
