# Vulnerable Node.js / Express Benchmark Target

An intentionally vulnerable Node.js & Express REST API designed for evaluating automated security detection, invariant verification, and patch remediation agents.

## Features
- **Node.js & Express** with embedded SQLite (`sql.js`) storage
- 18 real routes with 12 intentional security vulnerabilities across 6 OWASP classes:
  - Insecure Direct Object Reference (IDOR)
  - Path Traversal
  - SQL / Command Injection
  - Missing Authentication & Authorization
  - Hardcoded Secrets
  - Permissive CORS
- Zero external database dependencies (self-contained, runs offline inside `--network none` Docker sandboxes)
- Built-in Jest & Supertest test suite (`npm test`)

## Quickstart
```bash
npm install
npm test
npm start
```
