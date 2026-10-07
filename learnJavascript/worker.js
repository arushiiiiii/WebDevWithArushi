onmessage = function(data){
    // console.log(data.data);
    const ans = data.data.reduce((acc, item) => item+acc, 0);
    this.postMessage(ans);
}