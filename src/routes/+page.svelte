<script>
	import Indicator from '../components/indicator/indicator.svelte';
	let { data } = $props();
</script>

<svelte:head>
	<title>Character Screen</title>
</svelte:head>
<section class="@container/body grow p-4">
	<div
		class="mx-auto grid-rows-[auto] space-y-6 p-4 @lg:grid @lg:grid-cols-12 @lg:space-x-4 @xl:max-w-[75vw]"
	>
		<div
			class="card @container/card col-span-3 bg-zinc-800 bg-radial-[at_50%_10%] from-black from-15% to-slate-700 text-zinc-100 scheme-dark transition-[scale] hover:scale-110"
		>
			<header class="flex flex-col items-baseline gap-4 @max-md:flex-row">
				<h2>Dark <small>Speed</small></h2>
			</header>
			<div class="card-body py-2">
				<p>
					The Dark Essence is an <strong>uncommon non-confluence</strong> essence that is known to produce
					a variety of abilities including perception, movement, familiars, and attacks.
				</p>
			</div>
			<footer class="flex flex-col justify-end">
				<Indicator
					count={5}
					labels={[
						'Midnight Eyes',
						'Path of Shadows',
						'Hand of the Reaper',
						'Shadow of the Hegemon'
					]}
				/>
			</footer>
		</div>
		<div
			class="card @container/card col-span-3 bg-red-800 bg-radial-[at_50%_0%] from-red-800 from-15% to-red-950 to-95% text-zinc-100 scheme-dark"
		>
			<header class="flex flex-col items-baseline gap-4 @max-md:flex-row">
				<h2>Blood <small>Power</small></h2>
			</header>
			<div class="card-body">
				<p>
					The Blood essence is an <strong>uncommon non-confluence</strong> essence that is known to produce
					a variety of abilities including familiar summoning and life-draining attacks.
				</p>
			</div>
			<footer class="flex flex-col justify-end">
				<Indicator count={5} active={1} />
			</footer>
		</div>
		<div
			class="card via-amber300 @container/card col-span-3 bg-amber-900 bg-radial-[at_50%_-50%] from-amber-800 from-10% to-black to-80% text-zinc-100 scheme-dark"
		>
			<header class="flex flex-col items-baseline gap-4 @max-md:flex-row">
				<h2>Sin<small>Recovery</small></h2>
			</header>
			<div class="card-body">
				The Sin essence is a <strong>Legendary non-confluence</strong> essence that is known to produce
				a variety of abilities including curses, cleansing, holy and unholy attacks
			</div>
			<footer class="flex flex-col justify-end">
				<Indicator count={5} />
			</footer>
		</div>

		<div
			class="card @container/card col-span-3 bg-emerald-950 bg-radial-[at_50%_10%] from-emerald-950 from-15% to-slate-900 text-zinc-100 scheme-dark"
		>
			<header class="flex flex-col items-baseline gap-4 @max-md:flex-row">
				<h2>Doom<small>Spirit</small></h2>
			</header>
			<div class="card-body">
				<p>
					The Doom essence is a <strong>confluence essence</strong> that produces a focused affliction
					specialist.
				</p>
			</div>
			<footer class="mt-4 flex flex-col justify-end">
				<Indicator count={5} />
			</footer>
		</div>

		<div class="bg-surface-token col-span-10 rounded border p-4">
			<h2 class="mb-2 border-b pb-2">Midnight Eyes <small>Dark</small></h2>

			<p class="text-lg italic">Special ability (perception)</p>
			<p class="text-lg italic">Base Cost: None</p>
			<p class="text-lg italic">Cooldown: None</p>

			<p class="effect text-iron-token">Effect (Iron): See through darkness</p>
			<p class="effect text-bronze-token">Effect (Bronze): Sense magic</p>
			<p class="effect text-silver-token">Effect(Silver): Enhanced aura senses</p>
			<p class="effect text-gold-token">Effect(gold): boobies</p>
		</div>

		<div class="col-span-2 flex flex-col items-start justify-start gap-2 p-2">
			<button class="border-l-2 pl-2 font-semibold underline">Midnight Eyes</button>
			<button>Cloak of Night</button>
			<button>Path of Shadows</button>
			<button>Hand of the Reaper</button>
			<button class="text-left text-balance">Shadow of the Hegemon</button>
		</div>
	</div>
</section>
