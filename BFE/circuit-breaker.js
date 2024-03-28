function circuitBreaker(cb, time) {
    let failCount = 0;
    let isClosed = false;
    let timeOfLastFailed = 0;
    return function(...args) {
        if(isClosed) {
            if(Date.now - timeOfLastFailed > time) {
                isClosed = false;
            }
        }
        try {
            cb(...args);
            failCount = 0;
            return;
        }
        catch(e) {
            failCount++;
            timeOfLastFailed = Date.now();
            if(failCount >= 3) {
                isClosed = true;
            }

        }

    }
}

const newFunc = circuitBreaker(cb, time)