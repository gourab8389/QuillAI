export  const Templates = [
    {
        name: "Blog Title",
        desc: "An AI tool that generates blog titles based on your blog information",
        category: "Blog",
        icon: "/title.png",
        aiPrompt: "Give me 5 blog topic ideas in bullet points based on the given niche & outline and present the result in Rich text editor format",
        slug: "generate-blog-title",
        form: [
            {
                label: "Enter your blog niche",
                field: 'input',
                name: "niche",
                required: true
            },
            {
                label: "Enter blog outline",
                field: "textarea",
                name: 'outline',
            }
        ]
    },
    {
        name: "YouTube Video Ideas",
        desc: "Generate creative YouTube video ideas",
        category: "Video",
        icon: "/youtube.png",
        aiPrompt: "Provide 5 unique YouTube video ideas based on the given niche",
        slug: "generate-youtube-ideas",
        form: [
            {
                label: "Enter your channel niche",
                field: 'input',
                name: "niche",
                required: true
            }
        ]
    },
    {
        name: "Instagram Caption",
        desc: "Create catchy Instagram captions",
        category: "Social Media",
        icon: "/instagram.png",
        aiPrompt: "Write a catchy Instagram caption based on the provided image description",
        slug: "generate-instagram-caption",
        form: [
            {
                label: "Enter image description",
                field: 'textarea',
                name: "description",
                required: true
            }
        ]
    },
    {
        name: "Scientific Abstract",
        desc: "Generate a scientific abstract from research notes",
        category: "Science",
        icon: "/abstract.png",
        aiPrompt: "Write a scientific abstract based on the provided research notes",
        slug: "generate-scientific-abstract",
        form: [
            {
                label: "Enter research notes",
                field: 'textarea',
                name: "notes",
                required: true
            }
        ]
    },
    {
        name: "Twitter Tweet",
        desc: "Generate engaging tweets",
        category: "Social Media",
        icon: "/twitter.png",
        aiPrompt: "Create an engaging tweet based on the given topic and hashtag suggestions",
        slug: "generate-twitter-tweet",
        form: [
            {
                label: "Enter your topic",
                field: 'input',
                name: "topic",
                required: true
            },
            {
                label: "Enter hashtag suggestions",
                field: 'input',
                name: "hashtags",
            }
        ]
    },
    {
        name: "Facebook Post",
        desc: "Create engaging Facebook posts",
        category: "Social Media",
        icon: "/facebook.png",
        aiPrompt: "Write an engaging Facebook post based on the provided topic and target audience",
        slug: "generate-facebook-post",
        form: [
            {
                label: "Enter your topic",
                field: 'input',
                name: "topic",
                required: true
            },
            {
                label: "Enter target audience",
                field: 'input',
                name: "audience",
            }
        ]
    },
    {
        name: "LinkedIn Article",
        desc: "Generate professional LinkedIn articles",
        category: "Professional",
        icon: "/linkedin.png",
        aiPrompt: "Write a professional LinkedIn article based on the given topic and outline",
        slug: "generate-linkedin-article",
        form: [
            {
                label: "Enter your topic",
                field: 'input',
                name: "topic",
                required: true
            },
            {
                label: "Enter article outline",
                field: 'textarea',
                name: "outline",
            }
        ]
    },
    {
        name: "Product Description",
        desc: "Generate product descriptions for e-commerce",
        category: "E-commerce",
        icon: "/product.png",
        aiPrompt: "Write a compelling product description based on the provided product details",
        slug: "generate-product-description",
        form: [
            {
                label: "Enter product details",
                field: 'textarea',
                name: "details",
                required: true
            }
        ]
    },
    {
        name: "Poem",
        desc: "Generate poems based on themes",
        category: "Creative Writing",
        icon: "/poem.png",
        aiPrompt: "Write a poem based on the provided theme and style",
        slug: "generate-poem",
        form: [
            {
                label: "Enter poem theme",
                field: 'input',
                name: "theme",
                required: true
            },
            {
                label: "Enter preferred style (e.g., sonnet, haiku)",
                field: 'input',
                name: "style",
            }
        ]
    },
    {
        name: "Motivational Quote",
        desc: "Generate motivational quotes",
        category: "Quotes",
        icon: "/quote.png",
        aiPrompt: "Generate a motivational quote based on the given theme",
        slug: "generate-motivational-quote",
        form: [
            {
                label: "Enter quote theme",
                field: 'input',
                name: "theme",
                required: true
            }
        ]
    },
    {
        name: "Research Paper Summary",
        desc: "Summarize research papers",
        category: "Science",
        icon: "/summary.png",
        aiPrompt: "Write a concise summary of the research paper based on the provided text",
        slug: "generate-research-summary",
        form: [
            {
                label: "Enter research paper text",
                field: 'textarea',
                name: "paper",
                required: true
            }
        ]
    },
    {
        name: "Email Newsletter",
        desc: "Generate content for email newsletters",
        category: "Marketing",
        icon: "/newsletter.png",
        aiPrompt: "Write a newsletter based on the provided topic and audience",
        slug: "generate-email-newsletter",
        form: [
            {
                label: "Enter your topic",
                field: 'input',
                name: "topic",
                required: true
            },
            {
                label: "Enter target audience",
                field: 'input',
                name: "audience",
            }
        ]
    },
    {
        name: "Recipe",
        desc: "Generate recipes based on ingredients",
        category: "Cooking",
        icon: "/recipe.png",
        aiPrompt: "Write a recipe based on the provided ingredients and cuisine type",
        slug: "generate-recipe",
        form: [
            {
                label: "Enter ingredients",
                field: 'textarea',
                name: "ingredients",
                required: true
            },
            {
                label: "Enter cuisine type",
                field: 'input',
                name: "cuisine",
            }
        ]
    },
    {
        name: "Resume",
        desc: "Generate professional resumes",
        category: "Professional",
        icon: "/resume.png",
        aiPrompt: "Write a professional resume based on the provided work experience and skills",
        slug: "generate-resume",
        form: [
            {
                label: "Enter work experience",
                field: 'textarea',
                name: "experience",
                required: true
            },
            {
                label: "Enter skills",
                field: 'textarea',
                name: "skills",
                required: true
            }
        ]
    },
    {
        name: "Cover Letter",
        desc: "Generate cover letters for job applications",
        category: "Professional",
        icon: "/coverletter.png",
        aiPrompt: "Write a cover letter based on the provided job description and personal information",
        slug: "generate-cover-letter",
        form: [
            {
                label: "Enter job description",
                field: 'textarea',
                name: "job",
                required: true
            },
            {
                label: "Enter your personal information",
                field: 'textarea',
                name: "personal",
                required: true
            }
        ]
    },
    {
        name: "Lesson Plan",
        desc: "Generate lesson plans for teachers",
        category: "Education",
        icon: "/lessonplan.png",
        aiPrompt: "Write a lesson plan based on the provided subject and grade level",
        slug: "generate-lesson-plan",
        form: [
            {
                label: "Enter subject",
                field: 'input',
                name: "subject",
                required: true
            },
            {
                label: "Enter grade level",
                field: 'input',
                name: "grade",
                required: true
            }
        ]
    },
    {
        name: "Press Release",
        desc: "Generate professional press releases",
        category: "Marketing",
        icon: "/pressrelease.png",
        aiPrompt: "Write a press release based on the provided event details",
        slug: "generate-press-release",
        form: [
            {
                label: "Enter event details",
                field: 'textarea',
                name: "details",
                required: true
            }
        ]
    },
    {
        name: "Quiz",
        desc: "Generate quizzes for educational purposes",
        category: "Education",
        icon: "/quiz.png",
        aiPrompt: "Write a quiz based on the provided topic and difficulty level",
        slug: "generate-quiz",
        form: [
            {
                label: "Enter quiz topic",
                field: 'input',
                name: "topic",
                required: true
            },
            {
                label: "Enter difficulty level",
                field: 'input',
                name: "difficulty",
            }
        ]
    },
    {
        name: "Short Story",
        desc: "Generate short stories based on prompts",
        category: "Creative Writing",
        icon: "/shortstory.png",
        aiPrompt: "Write a short story based on the provided prompt and genre",
        slug: "generate-short-story",
        form: [
            {
                label: "Enter story prompt",
                field: 'textarea',
                name: "prompt",
                required: true
            },
            {
                label: "Enter genre",
                field: 'input',
                name: "genre",
            }
        ]
    }
]
