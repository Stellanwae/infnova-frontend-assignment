# INFNOVA Academy - Course Platform

A modern course listing and detail platform built with React.

## Features
- Browse all courses with a responsive grid layout
- View detailed information about each course
- Course level indicators with color coding (Beginner, Intermediate, Advanced)
- Clean and modern UI design

## Technologies Used
- React.js
- React Router for navigation
- CSS for styling
- Fetch API for data retrieval

## API Integration
- Course list: `https://infnova-course-api.vercel.app/api/courses`
- Course details: `https://infnova-course-api.vercel.app/api/courses/{id}`

## Getting Started
1. Clone the repository
2. Run `npm install` to install dependencies
3. Run `npm start` to start the development server
4. Open http://localhost:3000 to view it in the browser

## Project Structure
- `/components` - Reusable UI components (Header, Footer, CourseCard)
- `/pages` - Main pages (Home, CourseDetail)
- `/assets` - Images, icons, and SVGs

## What I Learned
- Building a multi-page React application with React Router
- Fetching data from REST APIs
- Managing loading and error states
- Creating responsive layouts with CSS Grid and Flexbox
- Dynamic styling based on course levels