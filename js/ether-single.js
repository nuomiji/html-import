document.write(
	'<div id="EtherSender" class="container">' +
	'  <h1> Ether Sender </h1>' +
	'' +
	'  <form id="singleEtherTxForm" name="singleEtherTxForm" action="http://localhost:8080/send/single/ether" method="post" enctype="multipart/form-data">' +
	'    <div id="SingleTransactionEther">' +
	'' +
	'      <div class="UserInfo">' +
	'        <div class="loginMethod">' +
	'          <input name="loginMethod" value="keystore" type="radio" checked/> Keystore <br />' +
	'        </div>' +
	'' +
	'        <div class="accountInfo">' +
	'          <label for="password">Password:</label>' +
	'          <input name="password" type="password" placeholder="Enter your Password" value="testtest" required/>' +
	'' +
	'          <label for="keystore">Keystore file:</label>' +
	'          <input name="keystore" type="file" placeholder="Keystore file" required />' +
	'        </div>' +
	'      </div>' +
	'' +
	'      <select name="chainId">' +
	'            <option value="0x03"> Ropsten TestNet</option>' +
	'            <option value="0x01"> MainNet </option>' +
	'        </select>' +
	'' +
	'      <label for="gasPrice">Gas Price</label>' +
	'      <input name="gasPrice" id="gasPriceSliderIdEther" type="range" min="1" max="20" value="5" step="0.1" oninput="gasPriceTagIdEther.value = gasPriceSliderIdEther.value" />' +
	'      <output id="gasPriceTagIdEther">5</output>' +
	'' +
	'      <label for="name">Recipient Name</label>' +
	'      <input name="name" type="text" placeholder="Enter Recipient name" value="yi" />' +
	'      <label for="toAddress" class="control-label">To Address:</label>' +
	'      <input name="toAddress" type="text" placeholder="Enter your receipient" value="0xffcdc69320928d609f656a335a1598592f039592" />' +
	'      <label for="amount" class="control-label">Transfer Amount:</label>' +
	'      <input name="amount" type="text" placeholder="Enter amount" value="10000" />' +
	'    </div>' +
	'' +
	'    <button>Send Transaction</button>' +
	'' +
	'  </form>' +
	'</div>'
)
