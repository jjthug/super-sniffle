<!-- svelte-ignore a11y-missing-attribute -->
<script>
	import { scrollTo, scrollRef, scrollTop } from 'svelte-scrolling'
	import Roadmap from './Roadmap.svelte';
	import Dapp from './Dapp.svelte';
	import Navbar from './Navbar.svelte';
	import TextBox from './TextBox.svelte';
	import Footer from './Footer.svelte';
	import Process from './Process.svelte';
	import { onMount } from 'svelte';

	let notificationActive = false;
	let requireChainId = '0x2a';

	let uservar = [];

	// async function getUser() {
	// 	try{
	// 	const returnValue = await fetch("/user");
	// 	const response = await returnValue.json();
	// 	uservar = response.name;
	// 	} catch(error){
	// 		console.log(error);
	// 	}

	// }

	async function getUser() {
		try{
		const returnValue = await fetch('/merkleproof?address=0x60C1F061B4fd365389dEFa3596FfFC8749D83b3B');
		const response = await returnValue.json();
		console.log("heeeyy");
		uservar = response.data;
		console.log("response data =", response.data);
		} catch(error){
			console.log(error);
		}

	}

	// onMount(async()=>{
	// 	await getUser();
	// })

	function setNotificationStatus(event){
		notificationActive = event.detail.status;
	}

	async function switchNetwork(){
        try{
        await ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: requireChainId }], // Hexadecimal version of 80001, prefixed with 0x
        });
    }catch(error){
        console.log(error.message);
    }
    }
</script>

<!-- <Stickybar/> -->
	{#if notificationActive}
	<div class="notification-top-bar">
		<p>You are on the wrong network <small><a href="#" on:click={switchNetwork}>Switch to mainnet network</a></small></p>
	</div>
	{/if}
<html>
	<!-- <a use:scrollTo={'roadmap'}>go to footer</a> -->
	<div class="container">
		<Navbar/>
		<TextBox/>
		<Dapp on:message={setNotificationStatus}/>
		<Process/>
		<div class="empty" use:scrollRef={'roadmap'}></div>
		<Roadmap/>
		<div class="empty" use:scrollRef={'footer'}></div>
		<Footer />
	<!-- <p>aipo</p>
	<p>aipo</p> -->
	</div>
</html>

<style>

	#footer{

	}

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

	html{
		background-color: rgb(19, 18, 18);
		scroll-behavior: smooth;
	}

	#padding{
		/* margin-top: 20vh; */
		padding: 8px;
		margin: 0 150px;
		padding-top: 15vh;
	}

	p{
		color:white;
	}

	@media screen and (max-width: 864px){
		#padding{
		margin-top: 20vh;
		padding: 8px;
		margin: 0 0;
		padding-top: 15vh;
	}

	.notification-top-bar {
		font-size: 10px;
		line-height: 30px;
		height: 30px;
		/* max-height: 20px; */
	}

	.notification-top-bar p a {
  		padding: 5px 10px;
	}
	
	}
</style>