<template>
    <!-- Page wrapper with background gradient and pattern -->
    <div class="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen py-12 px-2 flex items-center justify-center">
        <div class="max-w-4xl w-full mx-auto">
            <!-- Card container with glassmorphism effect -->
            <div class="bg-white/80 backdrop-blur-md shadow-2xl rounded-2xl p-8 border border-gray-200">
                <!-- Title -->
                <h1 class="text-4xl font-extrabold mb-8 text-center text-indigo-800 tracking-tight drop-shadow-lg">Image
                    Cropper</h1>

                <!-- File selector -->
                <div class="mb-8 text-center">
                    <input id="fileInput" type="file" @change="loadImage" accept="image/*" class="hidden" />
                    <label for="fileInput"
                        class="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-7 py-3 rounded-xl cursor-pointer transition font-semibold shadow-md focus:outline-none focus:ring-4 focus:ring-indigo-200">
                        <span class="flex items-center gap-2 justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" />
                            </svg>
                            Select Image
                        </span>
                    </label>
                </div>

                <!-- Cropper and Controls -->
                <div v-if="imageUrl" class="md:grid md:grid-cols-3 gap-8 items-start">
                    <ClientOnly>
                        <!-- Cropper area -->
                        <div
                            class="md:col-span-2 border-2 border-indigo-200 rounded-xl overflow-hidden bg-white shadow-md flex items-center justify-center min-h-[350px]">
                            <Cropper ref="cropperRef" :src="imageUrl" class="w-full h-96 md:h-[400px]">
                                <RectangleStencil v-if="cropperAspectRatio !== null"
                                    :aspect-ratio="cropperAspectRatio" />
                                <RectangleStencil v-else />
                            </Cropper>
                        </div>
                    </ClientOnly>
                    <!-- Controls panel -->
                    <div
                        class="bg-indigo-50 p-6 rounded-xl flex flex-col justify-between shadow-md border border-indigo-100">
                        <div>
                            <label class="block mb-3 font-semibold text-indigo-700">Aspect Ratio</label>
                            <select v-model="cropperAspectRatio"
                                class="w-full border-2 border-indigo-200 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white font-medium text-indigo-800 transition">
                                <option :value="16 / 9">16:9</option>
                                <option :value="4 / 3">4:3</option>
                                <option :value="1">1:1</option>
                                <option :value="2 / 3">2:3</option>
                                <option :value="null">Free</option>
                            </select>
                        </div>
                        <button @click="crop"
                            class="mt-6 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold px-6 py-2 rounded-lg shadow-lg transition focus:outline-none focus:ring-4 focus:ring-indigo-200">
                            <span class="flex items-center gap-2 justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M6 18L18 6M6 6l12 12" />
                                </svg>
                                Crop Image
                            </span>
                        </button>
                    </div>
                </div>

                <!-- Cropped result preview -->
                <div v-if="croppedImageUrl" class="mt-12 text-center">
                    <h2 class="text-2xl font-bold mb-6 text-indigo-800">Cropped Image</h2>
                    <div class="inline-block border-2 border-indigo-200 rounded-2xl overflow-hidden shadow-lg bg-white">
                        <img :src="croppedImageUrl" alt="Cropped image"
                            class="max-w-full max-h-80 object-contain transition duration-300 hover:scale-105" />
                    </div>
                    <div class="mt-6">
                        <a :href="croppedImageUrl" download="cropped-image.jpg"
                            class="inline-block bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-7 py-3 rounded-xl shadow-lg font-semibold transition focus:outline-none focus:ring-4 focus:ring-green-200">
                            <span class="flex items-center gap-2 justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" />
                                </svg>
                                Download
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Cropper, RectangleStencil } from 'vue-advanced-cropper';
import 'vue-advanced-cropper/dist/style.css';

const imageUrl = ref(null);
const croppedImageUrl = ref(null);
const cropperRef = ref(null);
const cropperAspectRatio = ref(1); // Default aspect ratio 1:1

const loadImage = (event) => {
    const file = event.target.files[0];
    if (file) {
        imageUrl.value = URL.createObjectURL(file);
        croppedImageUrl.value = null; // Reset cropped image when new image is loaded
    }
};

const crop = () => {
    if (cropperRef.value) {
        const { coordinates, canvas } = cropperRef.value.getResult();

        // Convert canvas to url
        if (canvas) {
            croppedImageUrl.value = canvas.toDataURL('image/jpeg', 0.9);
        }
    }
};

onMounted(() => {
    // Any initialization code if needed
});
</script>

<style scoped>
/* Custom scrollbar for cropper area */
::-webkit-scrollbar {
    width: 8px;
    background: #e0e7ff;
}

::-webkit-scrollbar-thumb {
    background: #a5b4fc;
    border-radius: 4px;
}

/* Add a subtle fade-in animation for the cropped image */
img[alt="Cropped image"] {
    animation: fadeIn 0.7s ease;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: scale(0.98);
    }

    to {
        opacity: 1;
        transform: scale(1);
    }
}
</style>