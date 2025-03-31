<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Enter Your Details</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100">

    <!-- Navigation Bar -->
    <header class="bg-black text-white p-5 flex justify-between items-center">
        <h1 class="text-2xl font-bold ml-4">Resume Builder</h1>
        <nav>
            <ul class="flex space-x-6 mr-6">
                <li><a href="index.html" class="hover:underline">Home</a></li>
                <li><a href="#" class="hover:underline">Features</a></li>
                <li><a href="#" class="hover:underline">Contact</a></li>
            </ul>
        </nav>
    </header>

    <!-- Form Section -->
    <section class="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg mt-10">
        <h2 class="text-3xl font-bold text-center mb-6">Enter Your Details</h2>
        <form id="resumeForm">
            <!-- Personal Information -->
            <div class="mb-4">
                <label class="block text-lg font-semibold">Full Name</label>
                <input type="text" id="name" class="w-full p-3 border border-gray-300 rounded-md" placeholder="Enter your full name" required>
            </div>

            <div class="mb-4">
                <label class="block text-lg font-semibold">Email</label>
                <input type="email" id="email" class="w-full p-3 border border-gray-300 rounded-md" placeholder="Enter your email" required>
            </div>

            <div class="mb-4">
                <label class="block text-lg font-semibold">Phone Number</label>
                <input type="tel" id="phone" class="w-full p-3 border border-gray-300 rounded-md" placeholder="Enter your phone number" required>
            </div>

            <!-- Education -->
            <div class="mb-4">
                <label class="block text-lg font-semibold">Education</label>
                <input type="text" id="education" class="w-full p-3 border border-gray-300 rounded-md" placeholder="Your highest qualification">
            </div>

            <!-- Skills -->
            <div class="mb-4">
                <label class="block text-lg font-semibold">Skills</label>
                <input type="text" id="skills" class="w-full p-3 border border-gray-300 rounded-md" placeholder="E.g., Java, Python, HTML">
            </div>

            <!-- Experience -->
            <div class="mb-4">
                <label class="block text-lg font-semibold">Work Experience</label>
                <textarea id="experience" class="w-full p-3 border border-gray-300 rounded-md" placeholder="Describe your work experience" rows="4"></textarea>
            </div>

            <!-- Submit Button -->
            <div class="text-center">
                <button type="submit" class="bg-blue-500 text-white px-6 py-3 rounded-md text-lg hover:bg-blue-700 transition">Generate Resume</button>
            </div>
        </form>
    </section>

    <!-- Footer -->
    <footer class="bg-black text-white text-center p-5 mt-10">
        <p>© 2025 Resume Builder. All Rights Reserved.</p>
    </footer>

</body>
</html>