# Shelf Control

Shelf Control is an early-stage full-stack app built with Next.js App Router, TypeScript, Prisma, and PostgreSQL.

At this stage, the project already includes:

- Prisma setup with `User` and `Book` models
- server-side data fetching for users and books
- API routes for listing and creating users and books
- a simple route flow where `/` redirects to `/login`
- a small service layer to keep database access out of the route files
- path aliases for a cleaner import structure

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Prisma 7
- PostgreSQL

## Current Features

### Pages

- `/login`
- `/users`
- `/books`

### API Routes

- `GET /api/users`
- `POST /api/users`
- `GET /api/books`
- `POST /api/books`

### Database Models

#### `User`

- `id`
- `name`
- `email`

#### `Book`

- `id`
- `title`
- `author`
- `userId`

## Project Structure

```text
app/
  api/
    books/route.ts
    users/route.ts
  books/page.tsx
  login/page.tsx
  users/page.tsx
  page.tsx

components/
  books/all-books.tsx
  users/all-users.tsx

services/
  books/
    create-book.ts
    get-books.ts
    list-books.ts
  users/
    create-user.ts
    get-users.ts
    list-users.ts

lib/
  prisma.ts

prisma/
  schema.prisma
  migrations/
```

## Import Aliases

The project uses path aliases defined in `tsconfig.json`:

- `@app/*`
- `@components/*`
- `@services/*`
- `@lib/*`
- `@prisma/*`
- `@generated/*`

## How To Run The App

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

Create a `.env` file in the project root with your database connection string:

```env
DATABASE_URL="your-postgresql-connection-string"
```

### 3. Generate the Prisma client

```bash
npx prisma generate
```

### 4. Run database migrations

If this is your first time running the project, apply the existing migrations:

```bash
npx prisma migrate dev
```

If you only want to sync the local database in an already prepared environment, `npx prisma generate` may be enough.

### 5. Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

The root route currently redirects to `/login`.

## Useful Commands

```bash
npm run dev
npm run lint
npm run build
npx prisma generate
npx prisma migrate dev
```

## Architecture Notes

- `app/` contains routes, pages, and route handlers
- `components/` contains UI-only components
- `services/` contains use-case and data access logic
- `lib/` contains shared infrastructure, such as the Prisma client

This keeps the App Router files small and avoids spreading Prisma queries throughout the UI layer.

## Current Status

This project is still in an initial implementation phase. The basic data flow is in place, but authentication, validation, styling polish, and production hardening are still to be completed.
