<script>
export const prerender = true;
export const trailingSlash = 'always';
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Home from '$lib/sections/Home.svelte';
	import Contact from '$lib/sections/Contact.svelte';
	import Eligibility from '$lib/sections/Eligibility.svelte';
	import Reviews from '$lib/sections/Reviews.svelte';
	import Compare from '$lib/sections/Compare.svelte';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<nav class = "fixed top-4 left-1/2 transform -translate-x-1/2 z-50 
	bg-white/30 backdrop-blur-md rounded-full shadow-lg 
	whitespace-nowrap px-6 py-6 w-[90%] max-w-375 flex space-x-6">

	<div class="shrink-0 font-bold font-stretch-50% text-lg">
		<a href="#home" class="hover:text-blue-600 transition">Dr. Kaushal Pokharel</a>
	</div>

	<div class="grow flex justify-end space-x-6 ml-6 font-bold">
		<a href="#home" class="hover:text-blue-600 transition">Home</a>
		<a href="#know-more" class="hover:text-blue-600 transition">About</a>
		<a href="#surgeries" class="hover:text-blue-600 transition">Surgeries</a>
		<a href="#compare" class="hover:text-blue-600 transition">Compare</a>
		<a href="#eligibility" class="hover:text-blue-600 transition">Eligibility</a>
		<a href="#reviews" class="hover:text-blue-600 transition">Reviews</a>
		<a href="#contact" class="hover:text-blue-600 transition">Contact</a>
	</div>
</nav>

{@render children()}