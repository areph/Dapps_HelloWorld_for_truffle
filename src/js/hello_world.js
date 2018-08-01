let contracts = {};

window.onload = () => {
  const initContract = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        web3.version.getNetwork((err, result) => {
          const network_id = result.toString();
          $.getJSON('HelloWorld.json', (data) => {
            contracts.HelloWorld = web3.eth.contract(data.abi).at(data.networks[network_id].address);
            resolve();
          });
        });
      }, 10);
    });
  }

  initContract().then(() => {
    contracts.HelloWorld.get((error, result) => {
      document.getElementById("contract_result").textContent = result;
    });

    contracts.HelloWorld.Set((error, data) => {
      console.log("event callback.");
      document.getElementById("contract_result").textContent = data.args.newWord;
    });

    document.getElementById("button_set").onclick = () => {
      let time = Math.floor(new Date().getTime() / 1000);
      console.log(time);
      contracts.HelloWorld.set("" + time, (error, txid) => {
        console.log(txid);
      });
    };
  });
};
