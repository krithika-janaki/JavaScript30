// Find the Town Judge
// Solved 
// In a town, there are n people labeled from 1 to n. There is a rumor that one of these people is secretly the town judge.

// If the town judge exists, then:

// The town judge trusts nobody.
// Everybody (except for the town judge) trusts the town judge.
// There is exactly one person that satisfies properties 1 and 2.
// You are given an array trust where trust[i] = [ai, bi] representing that the person labeled ai trusts the person labeled bi.

// Return the label of the town judge if the town judge exists and can be identified, or return -1 otherwise.

// Example 1:

// Input: n = 4, trust = [[1,3],[4,3],[2,3]]

// Output: 3
// Example 2:

// Input: n = 3, trust = [[1,3],[2,3],[3,1],[3,2]]

// Output: -1
// Constraints:

// 1 <= n <= 1000
// 0 <= trust.length <= 10,000
// trust[i].length == 2
// All the pairs of trust are unique.
// trust[i][0] != trust[i][1]
// 1 <= trust[i][0], trust[i][1] <= n

function findJudge(n, trust) {
        let delta = new Array(n+1).fill(0);

        for(let i=0; i < trust.length; i++) {
            let ele = trust[i];
            delta[ele[0]]--;
            delta[ele[1]]++;
        }

        console.log(delta)
        for(let j=1; j <= n; j++) {
            if(delta[j] === n-1){
                return j;
            }
        }
        return -1;
    }

    /// REVISE INDEGREE AND OUTDEGREE
