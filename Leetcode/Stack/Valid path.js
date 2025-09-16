// // Simplify Path
// // You are given an absolute path for a Unix-style file system, which always begins with a slash '/'. Your task is to transform this absolute path into its simplified canonical path.

// // The rules of a Unix-style file system are as follows:

// // A single period '.' represents the current directory.
// // A double period '..' represents the previous/parent directory.
// // Multiple consecutive slashes such as '//' and '///' are treated as a single slash '/'.
// // Any sequence of periods that does not match the rules above should be treated as a valid directory or file name. For example, '...' and '....' are valid directory or file names.
// // The simplified canonical path should follow these rules:

// // The path must start with a single slash '/'.
// // Directories within the path must be separated by exactly one slash '/'.
// // The path must not end with a slash '/', unless it is the root directory.
// // The path must not have any single or double periods ('.' and '..') used to denote current or parent directories.
// // Return the simplified canonical path.

// // Example 1:

// // Input: path = "/neetcode/practice//...///../courses"

// // Output: "/neetcode/practice/courses"
// // Example 2:

// // Input: path = "/..//"

// // Output: "/"
// // Example 3:

// // Input: path = "/..//_home/a/b/..///"

// // Output: "/_home/a"
// // Constraints:

// // 1 <= path.length <= 3000
// // path consists of English letters, digits, period '.', slash '/' or '_'.
// // path is a valid absolute Unix path.

//----------------------------------First attempt ----------------------------------------
//  simplifyPath(path) {
//         const stack = [];
//     let fileName = "";
//     let pointCount = 0;

//     function modifyStack(stack, fileName, pointCount) {
//         if(fileName.length > 0 && pointCount > 0 && fileName.length > pointCount) {
//           stack.push(fileName);
//         } else if(fileName.length > 0) {
//           stack.push(fileName);
//         } else if(pointCount === 2 && stack.length > 0) {
//         stack.pop();
//       } else if(pointCount > 2) {
//         stack.push("...");
//       }
//       console.log(stack)
//     }

//     for(let i=0; i < path.length; i++) {
//       const char = path[i];
//     console.log({char})
//       if(char !== "/") {
//         fileName = fileName + char;
//       } 
//       if(char === ".") {
//         pointCount += 1;
//       }
//       if(char === "/" && path[i-1] !== char) {
//         modifyStack(stack, fileName, pointCount);
//         fileName = "";
//         pointCount = 0;
//       }

//       if(i === path.length - 1) {
//         modifyStack(stack, fileName, pointCount)
//       }

//       // if(pointCount === 2 && stack.length > 0) {
//       //   stack.pop();
//       //    pointCount = 0;
//       // } else if(pointCount > 2) {
//       //   stack.push("...");
//       //    pointCount = 0;
//       // }
//     }

//     return "/" + stack.join("/");
//     }

// -----idea was correct but made the code too complicated------

function simplifyPath(path) {
    let stack = [];
  let curr = ""
  for(let char of path + "/") {
    if(char === "/") {
       if(curr === "..") {
      if(stack.length) stack.pop();
    } else if(curr !== "" && curr !== ".") {
      stack.push(curr);
    }
    curr = "";
    } else {
      curr += char;
    }
  }
   return "/" + stack.join("/");
    }
