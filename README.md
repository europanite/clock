# [Clock](https://github.com/europanite/clock "Clock")

!["clock"](./assets/images/web_ui.png)
<!-- !["phone_ui"](./assets/images/phone_ui.png) -->

A simple browser-based clock.

## PlayGround

 [Clock](https://europanite.github.io/clock/)

A simple browser-based clock.

---

## Getting Started

### 1. Prerequisites
- [Docker](https://www.docker.com/) & [Docker Compose](https://docs.docker.com/compose/)

### 2. Build and start all services:

```bash
# set environment variables:
export REACT_NATIVE_PACKAGER_HOSTNAME=${YOUR_HOST}

# Build the image
docker compose build

# Run the container
docker compose up
```

### 3. Test:
```bash
docker compose \
-f docker-compose.test.yml \
up --build --exit-code-from \
frontend_test
```

---

# License
- Apache License 2.0