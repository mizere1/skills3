// Import db from firebase-config.js and necessary Firebase functions
import { db } from './firebase-config.js';
import { ref, set } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-database.js";

/*
This script can be used to populate your Firebase Realtime Database with sample data.
You can run this in a browser console where your Firebase app is initialized.
Make sure firebase-config.js and app.js (which initializes Firebase through config) are loaded as modules.

Example usage in browser console after logging in to your app:
To make functions available globally for console access after module loading:
window.addSampleCourses = addSampleCourses;
window.addSampleAnnouncements = addSampleAnnouncements;

Then call:
addSampleCourses();
addSampleAnnouncements();
*/


async function addSampleCourses() {
    if (!db) {
        console.error("Firebase Realtime Database (db) is not available. Check firebase-config.js and ensure it's loaded.");
        alert("Firebase (db) is not initialized. Cannot add sample data.");
        return;
    }

    const coursesData = {
        "course101": {
            "title": "Introduction to Computer Science and Programming",
            "description": "This course is designed to introduce students to the fundamentals of computer science and programming. It covers basic concepts like variables, control structures, data structures, and algorithms, using Python as the primary language.",
            "instructor": "Prof. John Guttag",
            "department": "Electrical Engineering and Computer Science",
            "level": "Undergraduate",
            "term": "Fall 2023",
            "credits": 12, // Assuming this is the same as creditHours for now
            "code": "CS101", // Added field
            "creditHours": 12, // Added field
            "modules": [
                { "moduleId": "module-0", "title": "Introduction and Python Basics", "content": "Overview of computation, Python programs, variables, expressions, and statements." },
                { "moduleId": "module-1", "title": "Branching and Iteration", "content": "Conditionals, loops, and iteration in Python." },
                { "moduleId": "module-2", "title": "Data Structures", "content": "Strings, lists, tuples, and dictionaries in Python." },
                { "moduleId": "module-3", "title": "Functions and Recursion", "content": "Defining and using functions, recursion, and scope." }
            ],
            "exams": {
                "exam1": {
                    "title": "Midterm Exam",
                    "date": Date.now() + (30 * 24 * 60 * 60 * 1000), // 30 days from now
                    "duration": 90,
                    "weight": 30,
                    "topics": "Modules 1-3"
                },
                "exam2": {
                    "title": "Final Exam",
                    "date": Date.now() + (90 * 24 * 60 * 60 * 1000), // 90 days from now
                    "duration": 180,
                    "weight": 40,
                    "topics": "All modules"
                }
            },
            "assignments": {
                "assign1": {
                    "title": "Problem Set 1",
                    "dueDate": Date.now() + (7 * 24 * 60 * 60 * 1000), // 7 days from now
                    "weight": 10,
                    "description": "Basic Python programming exercises"
                },
                "assign2": {
                    "title": "Problem Set 2",
                    "dueDate": Date.now() + (14 * 24 * 60 * 60 * 1000), // 14 days from now
                    "weight": 10,
                    "description": "Data structures and algorithms"
                }
            }
        },
        "course202": {
            "title": "Algorithms and Data Structures",
            "description": "A comprehensive study of algorithms and data structures, focusing on efficiency and practical applications. Topics include sorting, searching, graph algorithms, and dynamic programming.",
            "instructor": "Prof. Erik Demaine",
            "department": "Electrical Engineering and Computer Science",
            "level": "Undergraduate",
            "term": "Spring 2024",
            "credits": 12, // Assuming this is the same as creditHours for now
            "code": "CS202", // Added field
            "creditHours": 12, // Added field
            "modules": [
                { "moduleId": "module-0", "title": "Analysis of Algorithms", "content": "Asymptotic notation, recurrences, and master theorem." },
                { "moduleId": "module-1", "title": "Sorting and Searching", "content": "Merge sort, quicksort, heapsort, binary search trees." },
                { "moduleId": "module-2", "title": "Graph Algorithms", "content": "BFS, DFS, shortest paths, minimum spanning trees." },
                { "moduleId": "module-3", "title": "Dynamic Programming", "content": "Principles of dynamic programming, common problems." }
            ],
            "exams": {
                "exam1": {
                    "title": "Quiz 1",
                    "date": Date.now() + (25 * 24 * 60 * 60 * 1000),
                    "duration": 60,
                    "weight": 25,
                    "topics": "Modules 1-2"
                },
                "exam2": {
                    "title": "Quiz 2",
                    "date": Date.now() + (70 * 24 * 60 * 60 * 1000),
                    "duration": 60,
                    "weight": 25,
                    "topics": "Modules 3-4"
                }
            },
            "assignments": {
                "assign1": {
                    "title": "Implementation Assignment 1",
                    "dueDate": Date.now() + (20 * 24 * 60 * 60 * 1000),
                    "weight": 25,
                    "description": "Implement sorting algorithms."
                },
                 "assign2": {
                    "title": "Graph Problems",
                    "dueDate": Date.now() + (50 * 24 * 60 * 60 * 1000),
                    "weight": 25,
                    "description": "Solve graph theory problems."
                }
            }
        }
        // Add more MIT-like courses...
    };

    try {
        await set(ref(db, 'courses'), coursesData);
        console.info("Sample courses data populated in Firebase."); // Changed to console.info
    } catch (error) {
        console.error("Error adding sample courses: ", error);
        // No alert for automatic loading
    }
}

async function addSampleAnnouncements() {
    if (!db) {
        console.error("Firebase Realtime Database (db) is not available for sample announcements. Check firebase-config.js.");
        // No alert for automatic loading
        return;
    }

    const announcementsData = {
        "announcement1": {
            "courseId": "course101",
            "message": "Welcome to Introduction to Computer Science and Programming! The first lecture will be on Monday at 10 AM.",
            "timestamp": Date.now() - (3 * 24 * 60 * 60 * 1000) // 3 days ago
        },
        "announcement2": {
            "courseId": "course202",
            "message": "Office hours for Algorithms and Data Structures will be held every Wednesday from 2 PM to 3 PM.",
            "timestamp": Date.now() - (2 * 24 * 60 * 60 * 1000) // 2 days ago
        },
        "announcement3": {
            "courseId": "course101",
            "message": "Problem Set 1 for Intro to CS is due next Friday. Please submit via the portal.",
            "timestamp": Date.now() - (1 * 24 * 60 * 60 * 1000) // 1 day ago
        }
    };

    try {
        await set(ref(db, 'announcements'), announcementsData);
        console.info("Sample announcements data populated in Firebase."); // Changed to console.info
    } catch (error) {
        console.error("Error adding sample announcements: ", error);
        // No alert for automatic loading
    }
}

// Export functions for app.js to import
export { addSampleCourses, addSampleAnnouncements, addSampleAcademicTerms };


// Function to add sample academic terms
async function addSampleAcademicTerms() {
    if (!db) {
        console.error("Firebase Realtime Database (db) is not available for sample academic terms. Check firebase-config.js.");
        return;
    }

    const sampleTermsData = {
        "termFall23": {
            name: "Fall 2023",
            year: 2023,
            type: "Fall",
            startDate: "2023-08-21",
            endDate: "2023-12-15",
            createdBy: "system_init",
            createdAt: Date.now() - (100 * 24 * 60 * 60 * 1000) // Approx 100 days ago
        },
        "termSpring24": {
            name: "Spring 2024",
            year: 2024,
            type: "Spring",
            startDate: "2024-01-15",
            endDate: "2024-05-10",
            createdBy: "system_init",
            createdAt: Date.now() - (10 * 24 * 60 * 60 * 1000) // Approx 10 days ago
        },
        "termSummer24": {
            name: "Summer 2024",
            year: 2024,
            type: "Summer",
            startDate: "2024-06-03",
            endDate: "2024-08-02",
            createdBy: "system_init",
            createdAt: Date.now()
        }
    };

    try {
        await set(ref(db, 'academicTerms'), sampleTermsData);
        console.info("Sample academic terms data populated in Firebase.");
    } catch (error) {
        console.error("Error adding sample academic terms: ", error);
    }
}


// Kept for optional manual invocation via console if this script is loaded in HTML:
// To use this, you might open your website in the browser,
// open the developer console, and type (after ensuring this script is loaded as a module):
// import('./sample-data.js').then(module => { module.addSampleCourses(); module.addSampleAnnouncements(); });
// Or, if temporarily including this script directly in HTML for console use and not as module for app.js:
// window.addSampleCourses = addSampleCourses;
// window.addSampleAnnouncements = addSampleAnnouncements;
