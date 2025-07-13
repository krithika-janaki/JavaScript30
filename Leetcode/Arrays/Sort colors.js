  function sortColors(nums) {
        const count = new Int32Array(3);
        for (let num of nums) {
            count[num]++;
        }

        let index = 0;
        for (let i = 0; i < 3; i++) {
            while (count[i]-- > 0) {
                nums[index++] = i;
            }
        }
    }

    // saw solution but could come up with o(1 space approach but did not know quick sort. it is complicated. please go through it again
