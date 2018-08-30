document.write(

	'<div id="EtherSender" class="container">' +
	'  <h1> Ether Sender </h1>' +
	'' +
	'  <form id="batchEtherTxForm" name="batchEtherTxForm" action="http://localhost:8080/send/batch/ether" method="post" enctype="multipart/form-data">' +
	'    <div id="BatchTransactionEther">' +
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
	'							<option value="0x03"> Ropsten TestNet</option>' +
	'							<option value="0x01"> MainNet </option>' +
	'					</select>' +
	'' +
	'      <label for="gasPrice">Gas Price</label>' +
	'      <input name="gasPrice" type="range" min="1" max="20" value="5" step="0.1" />' +
	'' +
	'' +
	'      <label for="destinations">Multiple Recipients:</label>' +
	'      <input type="file" name="destinations" placeholder="List of Recipients" required/>' +
	'    </div>' +
	'' +
	'    <button>Submit Transaction</button>' +
	'  </form>' +
	'</div>'

)
