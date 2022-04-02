<script>

async function switchNetwork(){
        try{
        await ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: '0x4' }], // Hexadecimal version of 80001, prefixed with 0x
        });
    }catch(error){
        console.log(error.message);
    }
    }
    
</script>


<div class="notification-top-bar">
    <p>See the <small><a href="#" on:click={switchNetwork}>Switch to mainnet</a></small></p>
  </div>

  <style>
      /* Top Notification bar  */
    .notification-top-bar {
		/* display: none; */
		/* padding: 8px 5px; */
		position: sticky;
		top: 0;
		left: 0;
		height: 40px;
		line-height: 40px;
		width: 100%;
		background: #1ABC9C;
		text-align: center;
		color: #FFFFFF;
		font-family: sans-serif;
		font-weight: lighter;
		font-size: 14px;
		z-index: 99;
}
.notification-top-bar p {
  padding: 0;
  margin: 0;
}
.notification-top-bar p a {
  padding: 5px 10px;
  border-radius: 3px;
  background: #FFF;
  color: #1ABC9C;
  font-weight: bold;
  text-decoration: none;
}
  </style>