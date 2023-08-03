let seconds = 0;
//msg = [startTime, maxSeconds]
onmessage = (msg) => {
  // update at 5fps
  setTimeout(() => {
    seconds = msg.data[1] - Math.floor((Date.now() - msg.data[0]) / 1000);
    postMessage(seconds);
  }, 200)

}