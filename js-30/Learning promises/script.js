// const p = new Promise(resovle => {
//     console.log("runs the callback immeditarely");
//     setTimeout(resovle)
// });
// console.log('p immmediately after declaration', p)
//  new Promise(resolve => resolve(p)).then(() => {
//   console.log("tick 3");
// });

// p.then(() => {
//   console.log("tick 1");
// }).then(() => {
//   console.log("tick 2");
// });
// const button = document.querySelector('button');
// const square = document.querySelector('.container');
// button.addEventListener('click', handleColorChange);

// function addSetTimeout(totalTime, intervalTime) {
//     setTimeout(() => {
//         console.log('resolving only after 5 seconds');
//         let count = 0;
//         var intervalId = setInterval(() => {
//             console.log('runs setinterval inside set timeout');
//             count++;
//             if(count ===  totalTime/intervalTime) {
//                 clearInterval(intervalId)
//             }
//             square.classList.toggle('addRed');
//         }, intervalTime)
//     }, totalTime)
// }

// let x = 10;
// function handleColorChange() {
//     return new Promise(function(resolve, reject) {
//         console.log('in the excecutoor function');
//         setTimeout(() => {
//             x = 15;
//             console.log('yayyy timing out')
//             resolve('blah');
//         }, 0)
//     })
// console.log('do i get called before the')

// }

// (async () => {
//     let y = await handleColorChange();
//     console.log(y);
//     console.log('will wait for x to  be updated> ?', x);

// })();
// handleColorChange().then(() => {
//     console.log('in then', x);
// })
// console.log(x);




// -------------------------------------------------------------------
// these functions simulate network requests to load data from an API
// -------------------------------------------------------------------
// function getBlogPosts() {
//     const posts = [
//       { id: 1, title: 'Post One', body: 'A blog post!' },
//       { id: 2, title: 'Post Two', body: 'Another blog post!' },
//       { id: 3, title: 'Post Three', body: 'A third blog post!' },
//     ];
  
//     return new Promise((resolve) => {
//       setTimeout(() => resolve(posts), 200);
//     });
//   }
  
//   function getBlogComments(postId) {
//     const comments = [
//       { postId: 1, comment: 'Great post!' },
//       { postId: 2, comment: 'I like it.' },
//       { postId: 1, comment: 'You make interesting points.' },
//       { postId: 3, comment: 'Needs more corgis.' },
//       { postId: 2, comment: 'Nice work!' },
//     ];
  
//     // get comments for the given post
//     const postComments = comments.filter((comment) => comment.postId === postId);
  
//     return new Promise((resolve, reject) => {
//       setTimeout(() => reject(postComments), 300);
//     });
//   }
  
  // -------------------------------------------------------------------
  // this is the code that actually loads data
  // -------------------------------------------------------------------
//   function loadContent() {
//     getBlogPosts().then((posts) => {
//       for (post of posts) {
//         getBlogComments(post.id).then((comments) => {
//           console.log({ ...post, comments });
//         });
//       }
//     });
//   }
  
//   loadContent();


  // async function loadContent() {
  //   let posts = await getBlogPosts();

  //   const promises = posts.map((post) => {
  //       return getBlogComments(post.id);
  //     });
  //     console.log('promises', promises);
  //     const postsWithComments = await Promise.all(promises)
  //     return postsWithComments;
  // }

  // let result = loadContent().then((data) => console.log('data', data)).catch((error) => console.log(error));
  // console.log('resultjhgjhgjhg', result);

  // *************   Promise all implementation

// function myPromiseAll(promisesArray) {
 
//  return new Promise((resolve, reject) => {
//   let result = new Array(promisesArray.length);
//   console.log('dfkjshdkjhdsk')
//   promisesArray.forEach((pr, ind) => {
//     console.log('pr', pr);
//     pr.then((data) => {
//       result[ind] = data;
//       if(!result.includes(undefined)) {
//         resolve(result);
//       }
//     }, (err) => {
//       reject("oh nooo");
//     })
//   });
//  });

// }

// myPromiseAll([ new Promise((resolve) => setTimeout(resolve, 1000, '1')),
//   new Promise((resolve, reject) => setTimeout(resolve, 2000, '2')),]).then((res) => {
//   console.log(res)
// })

// Promise race implementation

function MyPromiseRace(prArr) {

  return new Promise((resolve, reject) => {
    prArr.forEach((ar) => {
      ar.then((data) => {
        resolve(data);
      }).catch((err) => {
        reject(err);
      })
    })

  });

}

MyPromiseRace([new Promise((resolve) => setTimeout(() => resolve('1'), 1000)), new Promise((resolve) => setTimeout(() => resolve('2'), 500))]).then(data => {
  console.log(data)
}).catch((err) => {
  console.log(err);
})