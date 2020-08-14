<template>
	<nav>
		<div class="menu-logo">
			<img src="@/assets/img/logoVR.png" alt />
		</div>
		<!-- <div class="menu-burger" @click="dropdown = true">
			<i class="fas fa-bars"></i>
		</div>-->

		<the-burger @openMenu="dropdown = $event" />

		<transition name="mobile-dropdown">
			<div v-if="dropdown" class="dropdown-menu" ref="mobile">
				<div class="arrow-back" @click="closeMenu()">
					<div class="arrow">
						<i class="fas fa-arrow-right"></i>
					</div>
				</div>
				<div @click="goHome()" class="nav-logo">
					<div>
						<img src="@/assets/img/logoVR.png" alt />
					</div>
				</div>
				<svg class="shape" viewBox="0 0 1440 320">
					<path fill="#20064c" fill-opacity="1" d="M0,256L1440,32L1440,320L0,320Z" />
				</svg>
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
				<svg class="shape-bottom" viewBox="0 0 1440 320">
					<path fill="#0099ff" fill-opacity="1" d="M0,32L1440,288L1440,320L0,320Z" />
				</svg>
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
			this.$router.push('/')
		}
	}
}
</script>

<style lang="scss" scoped>
nav {
	display: flex;
	justify-content: space-between;
	/* background: #170732; */
	width: 100%;
	text-align: center;
	height: 75px;
	z-index: 10000;
}
.nav-logo {
	padding: 1.7em 0 6rem 0;
	background: #170537;

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
.hovered.vr-link-mobile {
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
		color: #0b87dc;
		padding: 1rem;
		padding-left: 2rem;
		text-decoration: none;
		transition: all 0.4s ease;
	}
	a:hover {
		color: #0b87dc;
		background: #27065d;
	}

	a:active,
	a:focus {
		background: #4511b2;
		outline: none;
		color: #fff;
	}

	.dropdown-mobile {
		font-size: 0.7em;
		background: #1c0445;
		// padding-left: 2rem;

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
</style>