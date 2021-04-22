<template>
   <div class="main">
      <header>
         <a href="/" class="florencetext semi router-link-exact-active router-link-active"><span class="florence" alt="Florence" title="Florence"></span> Mills</a>
         <div class="social semi">
            <a href="https://discord.com/users/354343248698802187" target="_blank">
            dc<span class="dot-blurple">.</span>
            </a>
            <a href="https://github.com/elevenvac" target="_blank">
            gh<span class="dot-slex">.</span>
            </a>
            <a href="https://open.spotify.com/user/yo55g26ffwx83q0smizx52yuf" target="_blank">
            sp<span class="dot-green">.</span>
            </a>
         </div>
      </header>
      <section class="home">
         <h1 class="mt-normal">Hi, I'm Eleven<span class="dot-green">.</span></h1>
         <p class="mt-normal">
            I'm a Student & Full-stack developer. I'm a Currently doing projects under name of <a class="hyperlink" href="https://github.com/risedevelopment" target="_blank">Rise Development</a>. If you are curious about the music I listen to while working, you can check out my <a class="hyperlink" href="https://open.spotify.com/user/yo55g26ffwx83q0smizx52yuf" target="_blank">Spotify</a> playlists. I also share all my open source projects on <a class="hyperlink" href="https://github.com/elevenvac" target="_blank">Github</a>, including this website.
         </p>
         <a href="mailto:elevenvac@gmail.com" target="_blank" class="semi hyperlink mt-normal">hi@thiseleven.com</a>
      </section>
      <v-footer class="text-center items-center">
         <center>
            {{ new Date().getFullYear() }} © <a href="//eleven.js.org" target="_blank">Eleven</a> — Made with &#x2764; using <a class="hyperlink" href="//vuejs.org" target="_blank">Vue</a>.
         </center>
      </v-footer>
   </div>
</template>

<style>
	@import url(https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap);
	html {
		line-height: 1.15;
		-webkit-text-size-adjust: 100%
	}
	body {
		margin: 0
	}
	::-webkit-file-upload-button {
		-webkit-appearance: button;
		font: inherit
	}
	*,
	:after,
	:before {
		box-sizing: inherit
	}
	html {
		box-sizing: border-box;
		text-rendering: optimizeLegibility
	}
	body {
		overflow-x: hidden;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale
	}
	body {
		font-family: Inter, Helvetica, Arial, sans-serif
	}
	main {
		display: block
	}
	h1 {
		font-size: 2em;
		margin: .67em 0
	}
	a {
		background-color: transparent
	}
	b,
	strong {
		font-weight: bolder
	}
	img {
		border-style: none;
		-webkit-user-select: none;
        -ms-user-select: none;
        user-select: none;
	}
	button,
	input {
		font-family: inherit;
		font-size: 100%;
		line-height: 1.15;
		margin: 0;
		overflow: visible
	}
	button {
		text-transform: none
	}
	[type=button],
	[type=reset],
	[type=submit],
	button {
		-webkit-appearance: button
	}
	[type=button]::-moz-focus-inner,
	[type=reset]::-moz-focus-inner,
	[type=submit]::-moz-focus-inner,
	button::-moz-focus-inner {
		border-style: none;
		padding: 0
	}
	[type=button]:-moz-focusring,
	[type=reset]:-moz-focusring,
	[type=submit]:-moz-focusring,
	button:-moz-focusring {
		outline: 1px dotted ButtonText
	}
	legend {
		color: inherit;
		display: table;
		max-width: 100%;
		white-space: normal
	}
	[type=checkbox],
	[type=radio],
	legend {
		box-sizing: border-box;
		padding: 0
	}
	[type=number]::-webkit-inner-spin-button,
	[type=number]::-webkit-outer-spin-button {
		height: auto
	}
	[type=search] {
		-webkit-appearance: textfield;
		outline-offset: -2px
	}
	[type=search]::-webkit-search-decoration {
		-webkit-appearance: none
	}
	[hidden],
	template {
		display: none
	}
	a {
		text-decoration: none
	}
	img {
		vertical-align: middle
	}
	h1,
	h2,
	menu,
	p,
	ul {
		margin: 0
	}
	button {
		border: 0
	}
	button,
	menu,
	ul {
		padding: 0
	}
	ul {
		list-style: none
	}
	body .dark,
	body .light {
		transition: .3s
	}
	body {
		background: #7e7ebc;
		color: white
	}
	body .main {
		padding: 60px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		min-height: 100vh
	}
	@media (max-width:620px) {
		body .main {
			padding: 30px;
			min-height: calc(var(--vh, 1vh)*100)
		}
	}
	body .mt-normal {
		margin-top: 24px
	}
	body a {
		color: inherit;
		cursor: pointer;
		display: inline-block
	}
	body h1 {
		font-weight: 700;
		font-size: 42px;
		line-height: 54px
	}
	@media (max-width:620px) {
		body h1 {
			font-size: 26px;
			line-height: 32px
		}
	}
	body .semi,
	body p {
		font-size: 24px;
		line-height: 36px
	}
	body .emote {
		font-size: 24px;
		line-height: 36px
	}
	@media (max-width:620px) {
		body .semi,
		body p {
			font-size: 18px;
			line-height: 24px
		}
		body .emote {
			font-size: 18px;
			line-height: 24px
		}

	}
	body p {
		font-weight: 400
	}
	body .semi {
		font-weight: 600
	}
	body footer,
	body header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		height: 36px
	}
	body header .social a {
		margin-right: 10px
	}
	body header .social a:last-child {
		margin-right: 0
	}
	body footer #theme-button {
		transition: transform 1s ease
	}
	body .home {
		max-width: 620px
	}
	body .home .hyperlink {
		background-image: linear-gradient(120deg, #b5b5e7, #b5b5e7);
		background-repeat: no-repeat;
		background-size: 100% .2em;
		background-position: 0 88%;
		transition: background-size .25s ease-in
	}
	body .home .hyperlink:hover {
		background-size: 100% 88%
	}
	.florencetext {
	color: #ffffff;
    }
	.florence {
	background-color: #b5b5e7;
	border-radius: 999%;
	width: 8px;
	height: 8px;
	margin-bottom: 4px;
	display: inline-block;
    }
	.dot-blurple {
	color: #7289DA;
    }
	.dot-slex {
	color: #24292e;
    }
	.dot-green {
	color: #1ed760;
    }
</style>
