import React from "react";

function Example() {
    return (
        <div>

            <nav class="bg-blue-600 text-white p-4 flex justify-between">
                <h1 class="text-xl font-bold">My Website</h1>
                <div class="space-x-4">
                    <a href="#" class="hover:underline">Home</a>
                    <a href="#" class="hover:underline">About</a>
                    <a href="#" class="hover:underline">Contact</a>
                </div>
            </nav>

            <section class="text-center py-20">
                <h2 class="text-4xl font-bold text-gray-800 mb-4">
                    Welcome to My Tailwind Page
                </h2>
                <p class="text-gray-600 mb-6">
                    This is a simple and clean design using Tailwind CSS.
                </p>
                <button class="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                    Get Started
                </button>
            </section>

            <section class="grid md:grid-cols-3 gap-6 px-8 pb-16">

                <div class="bg-white p-6 rounded-lg shadow-md">
                    <h3 class="text-xl font-semibold mb-2">Card One</h3>
                    <p class="text-gray-600">This is a simple Tailwind card example.</p>
                </div>

                <div class="bg-white p-6 rounded-lg shadow-md">
                    <h3 class="text-xl font-semibold mb-2">Card Two</h3>
                    <p class="text-gray-600">Tailwind makes styling very easy.</p>
                </div>

                <div class="bg-white p-6 rounded-lg shadow-md">
                    <h3 class="text-xl font-semibold mb-2">Card Three</h3>
                    <p class="text-gray-600">Responsive and clean design.</p>
                </div>

            </section>

            <footer class="bg-blue-600 text-white text-center p-4">
                © 2026 My Website. All rights reserved.
            </footer>
        </div>
    )
}

export default Example

