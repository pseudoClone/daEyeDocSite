<script>
        let flipped = null; // Boolean assumes two sides, we want like 3 or 4 sides maybe, Fuck EUCLID
        const surgeries = [
                {name: "SMILE", image:"/LASIK.jpg", description:"A form of laser based refractive eye surgery developed by Carl Zeiss Meditec used to correct myopia, and cure astigmatism"},
                {name: "LASIK", image:"/SMILE.jpg", description:"A type of refractive surgery for the correction of myopia, hypermetropia, and astigmatism"},
                {name: "PRK", image:"PRK.jpg", description:"LASER eye surgery procedures intended to correct a person's vision, reducing dependency on glasses or contact lenses"},
                {name: "PresBYOND", image:"/presbond.jpg", description:"A specialized, minimally invasive, and painless laser eye surgery designed to treat presbyopia (age-related reading vision loss) in people over 40"},
                {name: "Phakic Intraocular Lens (ICL/IPCL)", image:"/ICL.jpg", description:"A reversible, minimally invasive procedure that implants a permanent, artificial lens inside the eye—without removing the natural lens—to correct high myopia (nearsightedness), hyperopia, and astigmatism"},
                {name: "Refractive Lens Exchange (CLE/RLE)", image:"/cle.jpg", description:"An outpatient surgical procedure that replaces the eye's natural, clear lens with an artificial Intraocular Lens (IOL) to correct high refractive errors (nearsightedness, farsightedness, astigmatism) and presbyopia"}
        ];
</script>

<section id="surgeries" class="py-20 bg-linear-to-r from-blue-50 via-blue-100 to-blue-50 flex flex-col items-center">

        <h2 class="text-4xl md:text-5xl font-bold mb-12 text-center text-blue-900">Surgeries</h2>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full px-4 max-w-6xl">
                {#each surgeries as surgery, index}
                
                        <div class="relative h-72 perspective">
                
                                <div class="relative w-full h-full transition-transform duration-500 preserve-3d"
                                                class:rotate-y-180={flipped === index}>
                                
                                        <div class="flip-face absolute w-full h-full backface-hidden bg-white rounded-3xl shadow-xl p-6 flex flex-col justify-between">
                                        <div class="mb-4 overflow-hidden rounded-2xl">
                                                <img src="{surgery.image}" alt="{surgery.name}" class="w-full h-40 object-cover transition-transform duration-500 hover:scale-105">
                                        </div>
                                                <h3 class="text-2xl font-semibold text-blue-900">
                                                        {surgery.name}
                                                </h3>
                                                <div class="flex gap-4 mt-6">
                                                        <button class="px-4 py-2 bg-blue-200/70 rounded-full font-medium hover:bg-blue-300 transition" onclick={()=> flipped=index}>
                                                                Description
                                                        </button>
                                                </div>
                                        </div>
                                        <div class="flip-face flip-back absolute w-full h-full bg-blue-100 rounded-3xl shadow-xl p-6 flex flex-col justify-between">
                                                <p class="text-blue-950 leading-relaxed">
                                                        {surgery.description}
                                                </p>
                                                <button class="mt-4 px-4 py-2 bg-blue-200/70 rounded-full font-medium hover:bg-blue-300 transition" onclick={()=> flipped=null}>
                                                        Back
                                                </button>
                                        </div>
                                </div>

                        </div>
                        
                {/each}
        </div>
</section>


<!-- Thank you ChatGPT -->
<style>
        .perspective {
                perspective: 1000px;
        }
        .preserve-3d {
                transform-style: preserve-3d;
        }
        .backface-hidden {
                backface-visibility: hidden;
        }
        .rotate-y-180 {
                transform: rotateY(180deg);
        }
        .flip-face {
                position: absolute;
                width: 100%;
                height: 100%;
                backface-visibility: hidden;
                -webkit-backface-visibility: hidden; /* important */
                /* Note sure if all browsers support this */
        }
        .flip-back {
                transform: rotateY(180deg);
        }
</style>