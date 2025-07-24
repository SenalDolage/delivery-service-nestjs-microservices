## Delivery Service NestJS Microservices

This project was done to test a microservices architecture using NestJS, focusing on two core services:

- **Login Service:** Handles user authentication and authorization.
- **Rider Service:** Manages rider profiles, assignments, and interactions.

The project showcases how these services communicate with each other to enable secure and scalable delivery operations.

### Screenshot 

Sample response screenshot:

[![image.png](https://i.postimg.cc/qR6d9WbX/image.png)](https://postimg.cc/KkbVTpyR)

---

### Features

Current features and ToDo:

- **Microservice Architecture:** Decoupled services for authentication and rider management.
- **Inter-service Communication:** Uses NestJS microservice communication patterns (TCP).
- **Extensible:** Easily add new services or extend existing functionality.
- **Dockerized Infrastructure:** Rapid local setup with Docker Compose (MongoDB)
- **Rider Management:** CRUD operations for riders, assignment logic, and profile updates.

---

### Getting Started

#### Prerequisites

- Node.js (v16+ recommended)
- npm or yarn

#### Installation

 Clone the repository:
   ```bash
   git clone https://github.com/SenalDolage/delivery-service-nestjs-microservices.git
   cd delivery-service-nestjs-microservices
   ```

#### Start Infrastructure

```bash
docker-compose up -d
```
- **MongoDB:** Accessible at `mongodb://root:root@localhost:27017/`

#### Running the Services

Open two terminals, one for each service:

**Login Service:**
```bash
cd login-service
npm run start
```

**Rider Service:**
```bash
cd rider-service
npm run start
```

---

### Project Structure

```
delivery-service-nestjs-microservices/
  ├── login-service/
  └── rider-service/
  └── README.md
  └── ...
```

---

### License

[MIT](LICENSE)