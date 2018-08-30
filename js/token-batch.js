document.write(
	'<div id="TokenSender" class="container">'+
	'  <h1> Token Sender </h1>'+
	''+
	'  <form id="batchTokenTxForm" name="batchTokenTxForm" action="http://localhost:8080/send/batch/token" method="post" enctype="multipart/form-data">'+
	'    <div class="loginMethod">'+
	'      <input name="loginMethod" value="keystore" type="radio" checked/> Keystore <br />'+
	'    </div>'+
	''+
	'    <div class="accountInfo">'+
	'      <label for="password">Password:</label>'+
	'      <input name="password" type="password" placeholder="Enter your Password" value="testtest" required/>'+
	''+
	'      <label for="keystore">Keystore file:</label>'+
	'      <input name="keystore" type="file" placeholder="Keystore file" required />'+
	'    </div>'+
	''+
	'    <label for="contractAddress">Contract Address</label>'+
	'    <input name="contractAddress" type="text" value="0x14466590b32b83be64898fd8b70e1a050da0a9d0" required />'+
	''+
	'    <select name="chainId">'+
	'            <option value="0x03"> Ropsten TestNet</option>'+
	'            <option value="0x01"> MainNet </option>'+
	'        </select>'+
	''+
	'    <label for="gasPrice">Gas Price</label>'+
	'    <input name="gasPrice" type="range" min="1" max="20" value="5" step="0.1" />'+
	''+
	'    <div class="recipientInfo">'+
	'      <label for="destinations">Multiple Recipients:</label>'+
	'      <input type="file" name="destinations" placeholder="List of Recipients" required/>'+
	'    </div>'+
	''+
	'    <button>Send Transaction</button>'+
	'  </form>'+
	'</div>'
)
