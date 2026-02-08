# WorkForce Portal

## 📝 Project Description
WorkForce Portal is a robust, scalable, and secure centralized platform designed to streamline workforce management and authentication. It serves as a mission-critical gateway that bridges the gap between employee resource access and administrative oversight.

- **For Employees**: Acts as the primary portal for accessing essential company resources.
- **For Management**: Provides real-time data and analytics regarding personnel availability and workforce status.
- **Automation**: Enhances operational efficiency by automating attendance tracking and status updates across the organization.

## 🛠 Technologies Used
| Layer | Technology |
| :--- | :--- |
| **Backend** | Spring Boot (Java 21) |
| **Database** | MongoDB Atlas |
| **Frontend** | React.js (Vite) |
| **Build Tools** | Maven, npm |

## 🚀 Getting Started

### Prerequisites
- Java 21 (or later)
- Maven 3.9+
- MongoDB Atlas Account

## 🚶 Steps to Run the Backend

> **Recommended:** Use the Maven extension for easier compiling and running.

### Using Maven
```bash
mvn clean compile
mvn spring-boot:run
```
### Troubleshooting
> If the commands do not work in your terminal:
1. Right-click mvnw.cmd
2. Select “Open in Integrated Terminal”
3. Run the commands again

## 🚶 Steps to run Frontend
```bash
cd web
npm run dev
```

## 🔌 API Endpoints
- POST /api/auth/register
- POST /api/auth/login
- POST /api/auth/logout
- GET /api/auth/user/me