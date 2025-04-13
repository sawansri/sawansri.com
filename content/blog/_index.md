<style>
        body {
            font-family: 'Inter', sans-serif;
        }
        /* Style for the main blog post container */
        .blog-post-box {
            display: flex;
            flex-direction: row; /* Horizontal layout */
            align-items: center; /* Vertically center items */
            padding: 20px;
            background-color: white;
            border-radius: 10px;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
            transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out; /* Smooth transition for hover effect */
            width: 100%
        }
        /* Style for the image within the blog post box */
        .blog-post-image {
            width: 200px; /* Fixed width for the image */
            height: 150px; /* Fixed height for the image */
            object-fit: cover; /* Ensure image covers the area, cropping if needed */
            border-radius: 8px;
            margin-right: 20px; /* Space between image and text */
        }
        /* Style for the text content area */
        .blog-post-content {
            flex: 1; /* Allow the content to take up remaining space */
            min-width: 0
        }
        /* Style for the blog post title */
        .blog-post-title {
            font-size: 1.5rem;
            font-weight: 600; /* Use 600 for semi-bold */
            color: #1e293b; /* Slightly darker heading color */
            margin-bottom: 8px;
        }
        /* Style for the blog post description */
        .blog-post-description {
            color: #4b5563; /* Regular body text color */
            line-height: 1.6; /* Improved line height for readability */
            margin-bottom: 12px;
        }
        /* Style for the blog post date */
        .blog-post-date {
            font-size: 0.875rem;
            color: #6b7280; /* Lighter color for meta info */
            font-weight: 500;
        }
        /* Style for the clickable link wrapper */
        .blog-post-link {
            display: block; /* Make the link take up the full block */
            text-decoration: none; /* Remove default underline */
            color: inherit; /* Inherit text color from parent */
            margin-bottom: 20px; /* Space between blog post boxes */
            border-radius: 10px; /* Match the box radius */
            outline: none; /* Remove focus outline if desired */
        }
        /* Hover effect for the link */
        .blog-post-link:hover .blog-post-box {
            transform: translateY(-3px); /* Slightly lift the box on hover */
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); /* Enhance shadow on hover */
        }

        /* Responsive adjustments */
        @media (max-width: 768px) { /* Medium screens and below */
            .blog-post-box {
                flex-direction: column; /* Stack image and content vertically */
                text-align: center; /* Center text */
            }
            .blog-post-image {
                margin-right: 0; /* Remove right margin */
                margin-bottom: 15px; /* Add bottom margin */
                width: 100%; /* Full width */
                height: auto; /* Maintain aspect ratio */
                max-height: 200px; /* Limit height */
            }
        }
    </style>

<body class="bg-gray-100 min-h-screen flex items-center justify-center py-10">
    <div class="container mx-auto px-4">
        <!--<h1 class="text-3xl font-bold text-gray-800 mb-8 text-center">Our Latest Blogs</h1>-->
        <div class="grid grid-cols-1 gap-0"> 
            <a href="#" class="blog-post-link"> 
                <div class="blog-post-box">
                    <img src="static/one.jpg" alt="Blog Post 1" class="blog-post-image" onerror="this.onerror=null; this.src='https://placehold.co/200x150/e2e8f0/475569?text=Image+Error';">
                    <div class="blog-post-content">
                        <h2 class="blog-post-title">My First Blog!</h2>
                        <p class="blog-post-description">Stay tuned for more!</p>
                        <p class="blog-post-date">April 12, 2025</p>
                    </div>
                </div>
            </a>
            <!--<a href="#" class="blog-post-link"> -->
            <!--    <div class="blog-post-box">-->
            <!--        <img src="https://source.unsplash.com/random/200x150/?nature,water" alt="Blog Post 1" class="blog-post-image" onerror="this.onerror=null; this.src='https://placehold.co/200x150/e2e8f0/475569?text=Image+Error';">-->
            <!--        <div class="blog-post-content">-->
            <!--            <h2 class="blog-post-title">The Beauty of Nature</h2>-->
            <!--            <p class="blog-post-description">Explore the breathtaking landscapes and wonders of the natural world. Learn about conservation efforts and how you can make a difference.</p>-->
            <!--            <p class="blog-post-date">By John Smith</p>-->
            <!--        </div>-->
            <!--    </div>-->
            <!--</a>-->
            <!--<a href="#" class="blog-post-link"> <div class="blog-post-box">-->
            <!--        <img src="https://source.unsplash.com/random/200x150/?technology,code" alt="Blog Post 2" class="blog-post-image" onerror="this.onerror=null; this.src='https://placehold.co/200x150/e2e8f0/475569?text=Image+Error';">-->
            <!--        <div class="blog-post-content">-->
            <!--            <h2 class="blog-post-title">Tech Innovations of 2024</h2>-->
            <!--            <p class="blog-post-description">A look at the most exciting technological advancements shaping our future, from AI to space exploration.</p>-->
            <!--            <p class="blog-post-date">By Jane Doe</p>-->
            <!--        </div>-->
            <!--    </div>-->
            <!--</a>-->

