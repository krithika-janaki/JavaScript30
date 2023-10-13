function timer(inputSeconds) {
    const now = new Date().getTime();
    const then = now + inputSeconds * 60;
    console.log({now, then})

    setInterval(() => {
        const timeDisplay = then - Date.now().getSec

    })

}