<script>
        let name = "";
        let email = "";
        let message = "";

        let showToast = false;
        function handleSubmit() {
                console.log({ name, email, message });
                name = "";
                email = "";
                message = "";

                showToast = true;
                setTimeout(() => showToast = false, 3000); // hide after 3s
        }
</script>

<section id="contact" class="py-20 bg-linear-to-r from-blue-50 via-blue-100 to-blue-50">

    <h2 class="text-4xl md:text-5xl font-bold text-center text-blue-900 mb-12">
        Get In Touch
    </h2>

    <div class="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">

        <div class="bg-white/80 backdrop-blur-md rounded-3xl shadow-xl p-8">

            <h3 class="text-2xl font-semibold text-blue-900 mb-8">
                Contact Information
            </h3>

            <div class="space-y-6">

                <div class="flex items-start gap-4">
                    <img src="/icons/email.svg" alt="Email" class="w-6 h-6 mt-1" />
                    <div>
                        <p class="font-medium text-gray-700">Email</p>
                        <p class="text-blue-900">daeyedoc@gmail.com</p>
                    </div>
                </div>

                <div class="flex items-start gap-4">
                    <img src="/icons/phone.svg" alt="Phone" class="w-6 h-6 mt-1" />
                    <div>
                        <p class="font-medium text-gray-700">Phone</p>
                        <p class="text-blue-900">+977 (01) 458 4574</p>
                    </div>
                </div>

                <div class="flex items-start gap-4">
                    <img src="/icons/location.svg" alt="Location" class="w-6 h-6 mt-1" />
                    <div>
                        <p class="font-medium text-gray-700">Location</p>
                        <p class="text-blue-900">Refractive Surgery Unit, Tilganga Institute of Ophthalmology, Kathmandu, Nepal</p>
                    </div>
                </div>

            </div>
        </div>

        <div class="bg-white/80 backdrop-blur-md rounded-3xl shadow-xl p-8">

            <h3 class="text-2xl font-semibold text-blue-900 mb-8">
                Send a Message
            </h3>

            <form on:submit|preventDefault={handleSubmit} class="space-y-6">

                <div>
                    <label for="name" class="block text-gray-700 mb-2 font-medium">
                        Name
                    </label>
                    <input
                        type="text"
                        bind:value={name}
                        required
                        class="w-full px-4 py-3 rounded-xl border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
                    />
                </div>

                <div>
                    <label for="email" class="block text-gray-700 mb-2 font-medium">
                        Email
                    </label>
                    <input
                        type="email"
                        bind:value={email}
                        required
                        class="w-full px-4 py-3 rounded-xl border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
                    />
                </div>

                <div>
                    <label for="message" class="block text-gray-700 mb-2 font-medium">
                        Message
                    </label>
                    <textarea
                        rows="5"
                        bind:value={message}
                        required
                        class="w-full px-4 py-3 rounded-xl border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300 transition resize-none"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    class="w-full py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition shadow-md">
                    Send Message
                </button>

            </form>

        </div>

    </div>
     {#if showToast}
        <div class="fixed bottom-6 center-6 bg-green-500 text-white px-6 py-3 rounded-xl shadow-lg transition-opacity duration-500">
            Message sent!
        </div>
    {/if}

</section>