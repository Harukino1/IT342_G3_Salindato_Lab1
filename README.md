# WorkForce Portal

## 📝 Project Description
WorkForce Portal is a robust, scalable, and secure centralized platform designed to streamline workforce management and authentication. It serves as a mission-critical gateway that bridges the gap between employee resource access and administrative oversight.

- **For Employees**: Acts as the primary portal for accessing essential company resources.
- **For Management**: Provides real-time data and analytics regarding personnel availability and workforce status.
- **Automation**: Enhances operational efficiency by automating attendance tracking and status updates across the organization.

## 🛠 Technologies Used
- Backend: Spring Boot(Java)
- Database: MongoDB Atlas
- Frontend: React.js, Vite
- Build Tools: Maven, npm

## 🚀 Getting Started

### Prerequisites
- Java 21 (or later)
- Maven 3.9+
- MongoDB Atlas Account

### Steps to run Backend
**(Use the Maven extension for easier compile and run)**
- mvn clean compile
- mvn spring-boot:run
**(If terminal doesn't work, right-click on the "mvnw.cmd" and click the "Open in Integrated Terminal" then use the commands again)**

### Steps to run Frontend
- cd web
- npm run dev

## 🔌 API Endpoints
- POST /api/auth/register