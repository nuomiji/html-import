document.write(
	'<div id="TokenSender" class="container">' +
	'  <h1> Token Sender </h1>' +
	'' +
	'  <form id="singleTokenTxForm" name="singleTokenTxForm" action="http://localhost:8080/send/single/token" method="post" enctype="multipart/form-data">' +
	'    <div class="loginMethod">' +
	'      <input name="loginMethod" value="keystore" type="radio" checked/> Keystore <br />' +
	'    </div>' +
	'' +
	'    <div class="accountInfo">' +
	'      <label for="password">Password:</label>' +
	'      <input name="password" type="password" placeholder="Enter your Password" value="testtest" required/>' +
	'' +
	'      <label for="keystore">Keystore file:</label>' +
	'      <input name="keystore" type="file" placeholder="Keystore file" required />' +
	'    </div>' +
	'' +
	'    <label for="contractAddress">Contract Address</label>' +
	'    <input name="contractAddress" type="text" value="0x14466590b32b83be64898fd8b70e1a050da0a9d0" required />' +
	'' +
	'    <select name="chainId">' +
	'        <option value="0x03"> Ropsten TestNet</option>' +
	'        <option value="0x01"> MainNet </option>' +
	'    </select>' +
	'' +
	'    <label for="gasPrice">Gas Price</label>' +
	'    <input name="gasPrice" type="range" min="1" max="20" value="5" step="0.1" />' +
	'    <output name="gasPriceLabel" form="singleTokenTxForm" for="gasPrice"></output>' +
	'' +
	'    <div class="recipientInfo">' +
	'      <label for="name">Recipient Name</label>' +
	'      <input type="text" name="name" placeholder="Enter Recipient name" value="yi" />' +
	'      <label for="toAddress" class="control-label">To Address:</label>' +
	'      <input type="text" name="toAddress" placeholder="Enter your receipient" value="0xffcdc69320928d609f656a335a1598592f039592" />' +
	'      <label for="amount" class="control-label">Transfer Amount:</label>' +
	'      <input type="text" name="amount" placeholder="Enter amount" value="10000" />' +
	'    </div>' +
	'' +
	'    <button>Send Transaction</button>' +
	'' +
	'  </form>' +
	'</div>'
)
