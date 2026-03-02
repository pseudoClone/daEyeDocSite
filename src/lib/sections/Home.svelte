<script>
        const socials = [
                {name: 'Github', href: "https://github.com/daeyedoc", icon:"/icons/github.svg"},
                {name: 'LinkedIn', href: "https://linkedin.com", icon:"/icons/linkedin.svg"},
                {name: "Email", href: "mailto:daeyedoc@gmail.com", icon:"/icons/email.svg"}
        ];
        let showMore = false;

        const stats = [
                {icon:"/icons/totalsurgeries.svg", number:"6000+", label:"Total Surgeries"},
                {icon:"/icons/totalcataract.svg", number:"4000+", label:"Cataract Surgeries"},
                {icon:"/icons/laser.svg", number:"1500+", label:"Refractive LASER Surgeries"},
                {icon:"/icons/advancedcataract.svg", number:"500+", label:"Advanced Cataract Surgeries"},
        ];
</script>

<section id = "home" class = "flex flex-col items-center justify-center text-center py-40 
        bg-linear-to-r from-blue-100 via-blue-50 to-blue-100">

        <div class="w-40 h-40 rounded-full overflow-hidden border border-gray-200 mb-6">
                <img src="/doctor.jpg" alt="Doctor" class="w-full h-full object-cover" />
        </div>

        <div class="bg-white/30 backdrop-blur-md rounded-3xl shadow-xl px-12 py-10 max-w-4xl text-center">
                <h1 class="text-2xl md:text-4xl font-bold mb-4">
                        Refractive and Cataract Surgeon
                </h1>
        

        <p class="text-lg sm:text-xl md:text-2xl text-gray-700 font-semibold leading-relaxed mb-8">
                Helping patients achieve visual freedom through advanced LASER and lens-based surgery in Nepal
        </p>

        <div class="flex space-x-4 justify-center">
                {#each socials as social}
                        <a href="{social.href}" target="_blank" rel="noopener noreferrer"
                        class="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 shadow
                        hover:bg-blue-100 transition">
                        <img src={social.icon} alt={social.name} class="w-6 h-6"/>
                </a>
                {/each}
        </div>

        <div class="flex justify-center space-x-4 mt-6">
                <a href="#surgeries" class="px-6 py-2 bg-blue-100/60 backdrop-blur-md text-gray-800 rounded-full 
                font-semibold shadow hover:bg-white/90 transition">Surgeries</a>
                <a href="#contact" class="px-6 py-2 bg-green-100/60 backdrop-blur-md text-gray-800 rounded-full 
                font-semibold shadow hover:bg-white/90 transition">Get In Touch</a>
                <a href="https://maps.app.goo.gl/Y3PRwxVqx5NhWt2aA" class="px-6 py-2 bg-purple-100/60 backdrop-blur-md text-gray-800 rounded-full 
                font-semibold shadow hover:bg-white/90 transition">Book Consultation</a>
        </div>
        </div>
</section>

<section id="know-more" class="flex flex-col items-center justify-center text-center py-20
                bg-linear-to-r from-blue-100 via-blue-50 to-blue-100">

                <h2 class="text-4xl md:text-5xl font-bold mb-8 text-center bg-linear-to-r from-blue-700 to-teal-700 bg-clip-text text-transparent leading-relaxed">Know More</h2>

                <div class="bg-blue-100/80 backdrop-blur-md rounded-3xl shadow-xl px-10 py-8 max-w-4xl text-justify text-gray-800">

                        <p class="text-blue-950 font-medium text-lg md:text-xl leading-relaxed">Dr. Kaushal Pokhrel is a <span class="text-teal-700 font-semibold">Cataract and Refractive Surgeon</span> at Tilganga Institute of Ophthalmology (TIO), Nepal, with focused training in advanced laser vision correction and modern cataract surgery from TIO and London Vision Clinic, UK.
                        </p>

                        {#if showMore}

                                <p class="text-blue-950 text-lg md:text-xl leading-relaxed text-justify mx-auto mt-4">
                                        He is committed to precision, safety, and personalized care, combining evidence-based practice with advanced technology to help patients achieve clearer, more independent vision. Beyond his clinics, he is the Treasurer of Nepal Ophthalmic Society (NOS), the Founding President of Young Ophthalmologists (YO) of Nepal, the Vice President of Vision Circle of the Lions Club of Kathmandu, an Ophthalmic Educator, and a Researcher.
                                </p>

                        {/if}

                        <div class="flex justify-center mt-6">
                        <button 
                        class="px-6 py-2 bg-blue-200/60 backdrop-blur-md rounded-full font-semibold shadow hover:bg-blue-300/70 transition" on:click={() => showMore = !showMore}>
                                {showMore ? "Less" : "More"}
                        </button>
                        </div>
                </div>
</section>

<section id="stats" class="py-20 bg-linear-to-l from-blue-100 via-blue-50 to-blue-100 flex flex-col items-center">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl w-full px-4">
                {#each stats as stat}
                        <div class="flex flex-col item-center bg-white/30 backdrop:blur-md rounded-2xl shadow-lg px-6 py-8 text-center hover:scale-105 transform-transform">
                                <img src="{stat.icon}" alt="{stat.label}" class="w-12 h-12 mb-4">
                                <span class="text-2xl md:text-3xl font-bold text-blue-900 mb-2">{stat.number}</span>
                                <span class="text-md md:text-lg font-medium text-gray-800">{stat.label}</span>
                        </div>
                {/each}
        </div>
</section>