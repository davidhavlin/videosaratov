<template>
	<nav>
		<div class="menu-logo" @click="goHome()">
			<img src="@/assets/img/logoVR.webp" alt />
		</div>

		<the-burger @openMenu="dropdown = $event" />
		<transition name="mobile-dropdown">
			<div v-if="dropdown" class="dropdown-menu" ref="mobile">
				<div class="header-bg" :class="{headerAnimation:dropdown}"></div>
				<div class="arrow-back" @click="closeMenu()">
					<div class="arrow">
						<i class="fas fa-arrow-right"></i>
					</div>
				</div>
				<div @click="goHome()" class="nav-logo">
					<div>
						<img src="@/assets/img/logoVR.webp" alt />
					</div>
				</div>

				<div class="mobile-links">
					<div class="link-dropdown">
						<a
							class="vr-link-mobile"
							:class="{hovered: dropDownList}"
							@click="dropDownList = !dropDownList"
						>
							Virtuálna realita
							<span class="icon">
								<i class="fas fa-chevron-down"></i>
							</span>
						</a>

						<transition name="dropdown">
							<div class="dropdown-mobile" v-show="dropDownList">
								<div class="dropdown-mobile-content">
									<router-link
										@click.native="closeMenu()"
										:to="{	name: 'Home'}"
										class="dropdown-link"
										href="#htc-vive"
									>Domov</router-link>
									<router-link
										@click.native="closeMenu()"
										:to="{	name: 'Home', hash: '#htc-vive'}"
										class="dropdown-link"
										href="#htc-vive"
									>Htc Vive</router-link>
									<router-link
										@click.native="closeMenu()"
										:to="{	name: 'Home', hash: '#gallery'}"
										class="dropdown-link"
										href="#gallery"
									>Galeria</router-link>
								</div>
							</div>
						</transition>
					</div>

					<router-link @click.native="closeMenu()" to="/hry">
						<span>
							<i class="fas fa-gamepad"></i>
						</span>
						Hry
					</router-link>

					<router-link @click.native="closeMenu()" to="/cennik">Cenník</router-link>

					<router-link @click.native="closeMenu()" to="/kontakt">Kontakt</router-link>
				</div>

				<div class="mobile-social" :class="{socialAnimation:dropdown}">
					<ul>
						<li>
							<a href="#">
								<i class="fab fa-facebook-square icon"></i>
							</a>
						</li>
						<li>
							<a href="#">
								<i class="fab fa-google-plus-square icon"></i>
							</a>
						</li>
						<li>
							<a href="#">
								<i class="fab fa-twitter-square icon"></i>
							</a>
						</li>
						<li>
							<a href="#">
								<i class="fas fa-envelope-square icon"></i>
							</a>
						</li>
					</ul>
				</div>

				<div class="footer-bg" :class="{footerAnimation:dropdown}"></div>
			</div>
		</transition>
	</nav>
</template>

<script>
import theBurger from '@/components/app/the-burger.vue'

export default {
	props: {
		showBurger: {
			type: Boolean
		}
	},
	components: {
		theBurger
	},
	data() {
		return {
			dropdown: false,
			dropDownList: false
		}
	},
	methods: {
		closeMenu() {
			this.dropdown = false
		},
		goHome() {
			this.closeMenu()
			this.$router.push('/')
		}
	}
}
</script>

<style lang="scss" scoped>
nav {
	display: flex;
	justify-content: space-between;
	width: 100%;
	text-align: center;
	height: 75px;
	background: #250454;
	z-index: 10000;
}
.nav-logo {
	padding: 1.7em 0 6rem 0;

	img {
		width: 130px;
	}
}

.shape {
	margin-top: -7.7rem;

	path {
		fill: #20064c;
	}
}
.shape-bottom {
	position: absolute;
	left: 0;
	bottom: 0;
	path {
		fill: #170537;
	}
}

.link-dropdown {
	width: 100%;
}

.vr-link-mobile {
	width: 100%;
	cursor: pointer;

	a {
		width: 100%;
	}
	.icon {
		font-size: 0.7em;
	}
}
.mobile-links a.hovered.vr-link-mobile {
	color: #d7016e;
}
.menu-burger {
	width: 80px;
	display: block;
	font-size: 2em;
	color: #5b0bff;
	padding: 1rem;
	cursor: pointer;
	transition: transform 0.5s ease;

	&:hover {
		transform: scale(0.9);
	}
}

.menu-logo {
	z-index: 10;
	position: absolute;
	width: 97px;
	top: 0;
	left: 0;
	height: auto;
	padding: 0.4rem;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;

	img {
		width: 100%;
	}
}

.dropdown-menu {
	// padding: 1em;
	position: fixed;
	right: 0;
	width: 100%;
	height: 100%;
	background: #20064c;
	z-index: 1000;
}

.mobile-links {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	color: #fff;
	font-size: 1.5em;

	a {
		text-align: left;
		width: 100%;
		display: block;
		color: #fff;
		padding: 1rem;
		padding-left: 2rem;
		text-decoration: none;
		transition: all 0.4s ease;
		z-index: 10;
	}

	a:active,
	a:focus {
		outline: none;
	}

	.dropdown-mobile {
		font-size: 0.7em;
		background: #1c0445;

		a {
			padding: 0.5rem;
			padding-left: 4rem;
			color: #0b87dc;
		}
		a:hover {
			color: #fff;
			background: #4310ac;
		}
	}
}

.arrow-back {
	position: absolute;
	top: 0;
	left: 0;
	font-size: 2.5em;
	color: #0b87dc;
	cursor: pointer;
	transition: transform 0.5s ease;
	margin: 1rem;

	.arrow {
		width: 50px;
		height: 50px;
		border-radius: 50%;
		background: #20064c;
	}

	&:hover {
		transform: translateX(10px);
	}
}

.mobile-dropdown-enter-active,
.mobile-dropdown-leave-active {
	transition: all 0.5s ease;
}

.mobile-dropdown-enter,
.mobile-dropdown-leave-to {
	opacity: 0;
	transform: translateX(100px);
}
.mobile-dropdown-enter-to,
.mobile-dropdown-leave {
	opacity: 1;
	transform: translateX(0px);
}

.mobile-social {
	position: absolute;
	opacity: 0;
	bottom: 0;
	z-index: 1;
	width: 100%;
	font-size: 3em;

	ul {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0;
	}

	li {
		list-style-type: none;
		margin-right: 2rem;
		transition: transform 0.3s ease;

		&:last-child {
			margin-right: 0;
		}

		a {
			color: #d70170;
		}

		&:hover {
			transform: translateY(-10px);
		}
	}
}
.header-bg,
.footer-bg {
	position: absolute;
	height: 0;
	width: 100%;
	background: #170537;
	z-index: -2;
}
.header-bg {
	top: -30rem;
}
.footer-bg {
	bottom: -30rem;
}

.headerAnimation {
	animation: header 1s forwards ease;
	animation-delay: 0.3s;
	backface-visibility: hidden;
}
.footerAnimation {
	animation: footer 1s forwards ease;
	animation-delay: 0.3s;
	backface-visibility: hidden;
}

.socialAnimation {
	animation: social 1s forwards ease;
	animation-delay: 0.5s;
}
@keyframes social {
	from {
		opacity: 0;
		transform: scale(0) translateY(700px);
	}
	to {
		opacity: 1;
		transform: scale(1) translateY(0);
	}
}

@keyframes header {
	to {
		top: 0;
		height: 51%;
	}
}

@keyframes footer {
	to {
		bottom: 0;
		height: 51%;
	}
}

@media (max-height: 600px) {
	.nav-logo {
		padding: 1.7em 0 2rem 0;
		img {
			width: 100px;
		}
	}

	.header-bg,
	.footer-bg {
		display: none;
	}

	.mobile-social {
		font-size: 2.4em;

		ul {
			margin: 1rem;
		}
	}
}
</style>