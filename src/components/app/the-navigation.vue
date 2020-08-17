<template>
	<div class="the-navigation">
		<nav class="nav" ref="navigation">
			<!-- LAVA CAST NAVIGACIE / LOGO -->
			<div @click="goHome()" class="nav-logo" ref="nieco">
				<div>
					<img src="@/assets/img/logoVR.png" alt />
				</div>
				<p class="nav-title">
					Video Saratov
					<br />
					<span class="nav-sub-title">nová dimenzia zábavy!</span>
				</p>
			</div>
			<!-- ***** -->
			<!-- <div class="background-circle"></div> -->

			<!-- PRAVA CAST NAVIGACIE / LINKY -->
			<div>
				<a class="vr-link" :class="{hovered: dropDown}" @click="dropDown = !dropDown">
					<span class="icon">
						<i class="fas fa-chevron-down"></i>
					</span>
					Virtuálna realita
				</a>

				<transition name="dropdown">
					<div class="dropdown" v-show="dropDown" @click="dropDown = false" ref="dropdown">
						<div class="dropdown-content">
							<router-link :to="{	name: 'Home'}" class="dropdown-link" href="#htc-vive">Domov</router-link>
							<router-link
								:to="{	name: 'Home', hash: '#htc-vive'}"
								class="dropdown-link"
								href="#htc-vive"
							>Htc Vive</router-link>
							<router-link
								:to="{	name: 'Home', hash: '#gallery'}"
								class="dropdown-link"
								href="#gallery"
							>Galeria</router-link>
						</div>
					</div>
				</transition>

				<router-link to="/hry">
					<span class="icon">
						<i class="fas fa-chevron-down"></i>
					</span>
					<span>
						<i class="fas fa-gamepad"></i>
					</span>
					Hry
				</router-link>

				<router-link to="/cennik">
					<span class="icon">
						<i class="fas fa-chevron-down"></i>
					</span>
					Cenník
				</router-link>

				<router-link to="/kontakt">
					<span class="icon">
						<i class="fas fa-chevron-down"></i>
					</span>
					Kontakt
				</router-link>
			</div>
			<!-- **** -->
		</nav>
	</div>
</template>

<script>
export default {
	data() {
		return {
			dropDown: false
		}
	},
	methods: {
		goHome() {
			this.$router.push('/')
		},
		close(e) {
			if (e.target.classList.contains('vr-link')) {
				return
			} else {
				this.dropDown = false
			}
		}
	},
	created() {
		window.addEventListener('click', this.close)
	},
	beforeDestroy() {
		window.removeEventListener('click', this.close)
	}
}
</script>

<style lang="scss">
@import '~@/assets/scss/colors';

.dropdown-enter-active,
.dropdown-leave-active {
	transition: all 0.25s ease;
}

.dropdown-enter,
.dropdown-leave-to {
	opacity: 0;
	transform: translateY(-50px);
}
.dropdown-enter-to,
.dropdown-leave {
	opacity: 1;
	transform: translateY(0px);
}

.dropdown {
	position: absolute;
	width: 150px;
	top: 104px;
	z-index: 100;

	.dropdown-content {
		position: relative;
		width: 100%;
		height: 100%;
	}

	.dropdown-link {
		color: #fff;
		padding: 0.8em;
		border-bottom: 1px solid #390e93;

		&:last-child {
			border: none;
		}

		&:hover,
		&:active {
			border-radius: 10px;
			color: #fff;
			background: #4711b7;
			opacity: 1;
		}
	}
}

.dropdown-content {
	display: flex;
	flex-direction: column;
	background: #3f0fa1;
	border-radius: 10px;
	border: 1px solid #570de9;
	box-shadow: 1px 1px 14px #0000001c;
}
.dropdown-content:after,
.dropdown-content:before {
	bottom: 100%;
	left: 50%;
	border: solid transparent;
	content: ' ';
	height: 0;
	width: 0;
	position: absolute;
	pointer-events: none;
}

.dropdown-content:after {
	border-color: rgba(136, 183, 213, 0);
	border-bottom-color: #3f0fa1;
	border-width: 10px;
	margin-left: -10px;
}
.dropdown-content:before {
	border-color: rgba(194, 225, 245, 0);
	border-bottom-color: #570de9;
	border-width: 11px;
	margin-left: -11px;
}

.the-navigation {
	width: 100%;
	z-index: 20;
	margin: 2em 0;
}

.nav {
	position: relative;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1.9em 0;
	margin: 2em auto;
	max-width: 1000px;

	a {
		cursor: pointer;
		position: relative;
		display: inline-block;
		font-weight: 500;
		font-size: 1em;
		padding: 1em;
		text-decoration: none;
		color: #01a0f7;
		text-shadow: 0px 1px 8px #165ffb3d;
		transition: all 0.2s ease-in-out;
		opacity: 0.8;

		.icon {
			position: absolute;
			top: -5px;
			left: 0;
			right: 0;
			margin: auto;
			opacity: 0;
		}

		&.router-link-exact-active:not(.dropdown-link) {
			color: #ffffff;
			text-shadow: 1px 1px 1px #00dcfb, -1px -1px 1px #ff0038;
			opacity: 1;
			border-radius: 1em;

			.icon {
				color: #0b87dc;
				opacity: 1;
				animation: icon 1.5s infinite ease-in-out;
				transition: all 0.2 ease-in-out;
			}

			@keyframes icon {
				0% {
					opacity: 0.3;
					transform: translateY(-5px);
				}
				50% {
					opacity: 1;
					transform: translateY(5px);
				}
				100% {
					opacity: 0.3;
					transform: translateY(-5px);
				}
			}
		}

		&:hover:not(.dropdown-link) {
			opacity: 1;
			transform: translateY(-2px);
		}
	}
}
.vr-link:after {
	content: '';
	position: absolute;
	left: 50%;
	transform: translateX(-50%);
	bottom: 12px;
	width: 56px;
	height: 1px;
	background: #0b87dc;
	transition: all 1s ease;
}
nav a.hovered {
	color: #fff;
	opacity: 1;
}
.hovered.vr-link:after {
	width: 120px;
}

.navigation-fixed {
	position: fixed;
	background: #0f071a;
	top: -5em;
	left: 0;
	padding: 0;
	padding-top: 2em;
	width: 100%;
	transform: translateY(-60px);

	.nav-title {
		font-size: 1.3em;
		font-weight: 600;
		line-height: 1;
		margin: 0.3em 0;
		margin-left: 0.6em;
	}

	.nav-sub-title {
		display: none;
	}
}

.nav-logo {
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	padding-left: 1em;

	.nav-title {
		font-size: 1.3em;
		font-weight: 600;
		line-height: 1;
		margin-left: 0.6em;
		// text-shadow: 0px 0px 4px #039ff52b, -1px 0px 2px #24144dcf;
		color: #0b87dc;
	}

	.nav-sub-title {
		font-size: 0.7em;
		font-weight: 200;
		color: #ffffff;
	}

	img {
		width: 50px;
	}
}
.nav-shape {
	position: absolute;
	top: 0;
	left: 0;
	z-index: -99;
	path {
		fill: rgba(255, 0, 56, 1);
	}
}
</style>
