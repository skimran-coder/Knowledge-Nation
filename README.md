# Knowledge Nation v.2

**Knowledge Nation v.2** is a full-stack EdTech web application developed for a coaching institute. The platform serves as a comprehensive educational portal, offering video streaming services, course management, and a range of features to enhance the learning experience for students. The application is currently deployed in production and serves as a digital extension of the institute’s educational offerings.

## Key Features

- **Video Streaming**: Stream course videos directly from the platform with a YouTube integration.
- **Course Management**: Dynamic courses with CRUD functionality, allowing the admin to manage course content efficiently.
- **Responsive Design**: Optimized for both desktop and mobile devices, ensuring a seamless user experience across all screen sizes.
- **Engaging UI**: An animated gradient background and a modern design aesthetic to make learning more engaging.
- **Firebase Integration**: Real-time database management and data storage using Firestore.

## Tech Stack

- **Frontend**: React.js, Redux, Tailwind CSS
- **Backend**: Firestore (Firebase)
- **Deployment**: [Your Deployment Platform]
- **API Integration**: YouTube Data API for fetching and displaying video content

## Project Structure

- **Components**:
  - `Hero`, `About`, `Courses`, `Contact`: Core sections of the website, each dynamically loading content.
  - `CourseVideoPlayer`: Displays the selected video and lists other available videos in the course.
  - `CoursesCard`, `VideosList`: Modular components used across the application to display course and video information.

- **State Management**: 
  - Managed via Redux for consistent and predictable state management across the application.
  - Course data is fetched and stored in the Redux store for quick access and reusability.

## Deployment

The application is deployed in production, providing a live environment for the coaching institute's students to access their courses and content. 

### Note

This application relies on environment variables for Firebase configuration, making it impossible to run locally without proper credentials. As this is a proprietary project for a specific coaching institute, cloning and running the project locally is not supported.

## Future Enhancements

- **Authentication & Security**: Implementing secure access to courses and personalized content through authentication mechanisms.
- **Payment Integration**: Implementing payment gateways for course enrollments.
- **Advanced Analytics**: Integration with analytics tools to track user engagement and performance.
