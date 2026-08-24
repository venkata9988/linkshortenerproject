# Clerk Authentication Instructions

Use Clerk as the only authentication solution in this application. Do not add custom authentication, password handling, session management, or alternative auth libraries.

## Route Behavior

- `/dashboard` is a protected route. Unauthenticated requests must be redirected away from the dashboard.
- Authenticated users who request `/` must be redirected to `/dashboard`.
- Enforce these rules on the server using Clerk auth state and the project's `proxy.ts` routing conventions. Never rely only on client-side checks.

## Sign-In and Sign-Up

Sign-in and sign-up must always open as Clerk modals. Use Clerk's modal-enabled components rather than full-page forms:

```tsx
<SignInButton mode="modal">
  <button>Sign In</button>
</SignInButton>

<SignUpButton mode="modal">
  <button>Sign Up</button>
</SignUpButton>
```

Do not create custom auth forms or use another auth provider. Use Clerk's `auth()` and `currentUser()` APIs on the server, and Clerk hooks only where client-side auth state is needed.

## Data Access

Use the Clerk `userId` for user associations. Every server action or data operation involving user-owned data must verify authentication and ownership on the server. Never trust client-provided user identity or authorization state.
