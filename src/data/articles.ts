// Sample blog data
export const articles = [
  {
    id: "javascript-typescript-comparison",
    title: "JavaScript vs TypeScript: A Comprehensive Comparison",
    excerpt:
      "Understanding the key differences, benefits, and use cases of JavaScript and TypeScript in modern web development.",
    coverImage:
      "https://images.ctfassets.net/6e7jqm4y92l8/5nzwwMXuigK9Bj1Z9zH5ZR/2ee18f6d393a3e814b23f30fb1c7deb3/210407_MB_blog_cover_TSvsJS.jpg",
    content: `
# JavaScript vs TypeScript: A Comprehensive Comparison

*Understanding the key differences, benefits, and use cases of JavaScript and TypeScript in modern web development.*

## Introduction

JavaScript and TypeScript are two of the most popular programming languages in web development today. While JavaScript has been the backbone of web development for decades, TypeScript has emerged as a powerful alternative that builds upon JavaScript's foundation.

## What is JavaScript?

JavaScript is a dynamic, interpreted programming language that runs in web browsers. It's known for its flexibility and ease of use, making it accessible to beginners while powerful enough for complex applications.

### Key Features:
- Dynamic typing
- Prototype-based object orientation
- First-class functions
- Event-driven programming
- Asynchronous programming with Promises and async/await

## What is TypeScript?

TypeScript is a superset of JavaScript that adds static typing and other features. It compiles down to plain JavaScript but provides additional tools and features for large-scale application development.

# Key Features of TypeScript

- **Static typing**
- **Interfaces and type definitions**
- **Advanced object-oriented features**
- **Better IDE support**
- **Enhanced code maintainability**

## Key Differences

1. **Type System**
   - JavaScript: Dynamic typing
   - TypeScript: Static typing with type inference

2. **Error Detection**
   - JavaScript: Runtime error detection
   - TypeScript: Compile-time error detection

3. **Tooling Support**
   - JavaScript: Basic IDE support
   - TypeScript: Advanced IDE features like autocompletion and refactoring

4. **Learning Curve**
   - JavaScript: Easier to start with
   - TypeScript: Steeper learning curve but more powerful

## When to Use Each

### Use JavaScript When:
- Building small to medium-sized applications
- Working with existing JavaScript codebases
- Quick prototyping is needed
- Team is more familiar with JavaScript

### Use TypeScript When:
- Building large-scale applications
- Working in a team environment
- Need better code maintainability
- Want to catch errors early in development

## Migration Path

Migrating from JavaScript to TypeScript can be done gradually:
1. Start by adding TypeScript to your project
2. Rename .js files to .ts
3. Add type annotations incrementally
4. Enable strict mode gradually

## Conclusion

Both JavaScript and TypeScript have their place in modern web development. The choice between them depends on your project's needs, team expertise, and long-term goals. TypeScript offers more robust features for large-scale applications, while JavaScript remains a solid choice for smaller projects and quick development.

Remember: TypeScript is not a replacement for JavaScript but rather an enhancement that can make your development process more efficient and your code more maintainable.
    `,
    author: {
      name: "Mihir Goswami",
      avatar: "./image/Mihir.png",
      initials: "MG",
      bio: "Web developer passionate about JavaScript, TypeScript, and modern web technologies.",
    },
    date: "Mar 20, 2024",
    readTime: "8 min read",
    tags: ["JavaScript", "TypeScript", "Web Development", "Programming"],
  },

  {
    id: "rest-vs-graphql",
    title: "REST API vs. GraphQL: Which One Should You Use?",
    excerpt:
      "A comprehensive comparison of REST and GraphQL architectures to help you make the right choice for your next project.",
    coverImage:
      "https://blog.postman.com/wp-content/uploads/2023/12/GraphQL-vs-REST-1.jpg",
    content: `
# REST API vs. GraphQL: Which One Should You Use?

*A detailed comparison to help you choose the right API architecture for your projects*

When building modern applications, choosing the right API architecture is crucial for performance, maintainability, and developer experience. This guide compares REST and GraphQL to help you make an informed decision.

## Understanding the Basics

### REST: The Traditional Approach

REST (Representational State Transfer) has been the standard for API development for nearly two decades. It's an architectural style that:

- Uses standard HTTP methods (GET, POST, PUT, DELETE)
- Returns fixed data structures
- Follows a resource-based approach
- Leverages HTTP status codes for error handling

\`\`\`javascript
// Example REST API call
fetch('https://api.example.com/users/123')
  .then(response => response.json())
  .then(data => console.log(data));
\`\`\`

### GraphQL: The Flexible Alternative

Developed by Facebook in 2015, GraphQL provides:

- A single endpoint for all operations
- Client-specified queries that return exactly what's needed
- Strong typing system
- Introspective capabilities

\`\`\`javascript
// Example GraphQL query
fetch('https://api.example.com/graphql', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    query: \`
      query {
        user(id: "123") {
          name
          email
          posts {
            title
          }
        }
      }
    \`
  })
})
.then(res => res.json())
.then(data => console.log(data));
\`\`\`

## Key Differences

### 1. Data Fetching

**REST**:
- Multiple endpoints for different resources
- Fixed data structures
- Often requires multiple requests to gather related data

**GraphQL**:
- Single endpoint
- Flexible queries returning exactly what's needed
- Reduced number of requests

### 2. Performance Considerations

**REST Advantages**:
- Better caching mechanisms
- More predictable server load
- Simpler rate limiting

**GraphQL Advantages**:
- Prevents over-fetching and under-fetching
- Reduced network overhead for complex data
- Better performance on slow connections

### 3. Implementation Complexity

**REST**:
- Easier to set up initially
- Well-established patterns and tooling
- Lower learning curve

**GraphQL**:
- Steeper learning curve
- Requires more initial setup
- More complex error handling

## When to Choose REST

REST is often the better choice when:

- You have limited, well-defined resource types
- Caching is critical for performance
- You want to leverage existing tools and patterns
- Your API consumers have simple, predictable needs

## When to Choose GraphQL

GraphQL shines when:

- You have complex, interconnected data
- Different clients need different data structures
- You want to iterate rapidly on frontend features
- Network performance is critical

## Hybrid Approaches

In real-world applications, you're not limited to choosing just one. Consider:

- Using GraphQL for complex data needs while keeping REST for simple resources
- Implementing GraphQL as a layer on top of existing REST APIs
- Starting with REST and migrating to GraphQL as needs evolve

## Conclusion

Both REST and GraphQL have their merits, and the "right" choice depends on your specific requirements. Consider your team's expertise, application complexity, and future scalability needs when making your decision.

Remember: the best API architecture is the one that solves your specific problems while minimizing complexity.
    `,
    author: {
      name: "Mihir Goswami",
      avatar: "./image/Mihir.png",
      initials: "MG",
      bio: "Senior Backend Developer with 8+ years of API design experience.",
    },
    date: "Oct 12, 2024",
    readTime: "8 min read",
    tags: ["API", "REST", "GraphQL", "Backend", "Web Development"],
  },

  {
    id: "authentication-authorization-guide",
    title: "Getting Started with Authentication and Authorization",
    excerpt:
      "Learn the fundamentals of securing user access to your applications with proper authentication and authorization techniques.",
    coverImage:
  "https://us-west-2.graphassets.com/AuGrs0mztRH6ldTYKJkSAz/resize=width:2402,height:1431/Lsa2537QZ2N7RCgY1nZQ",
    content: `
# Getting Started with Authentication and Authorization

*A comprehensive guide to implementing secure user access in your applications*

Authentication and authorization form the cornerstone of application security. This guide will walk you through the fundamental concepts and implementation strategies to secure your applications properly.

## Understanding the Basics

### Authentication vs. Authorization

These terms are often confused but serve distinct purposes:

- **Authentication**: Verifies who a user is (identity)
- **Authorization**: Determines what a user can do (permissions)

Think of authentication as checking your ID at the door, while authorization is checking if you're on the VIP list for certain areas inside.

## Authentication Methods

### 1. Password-Based Authentication

The most common approach, though not always the most secure:

\`\`\`javascript
// Basic password authentication in Express
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  
  // Find user in database
  const user = await User.findOne({ username });
  if (!user) return res.status(401).json({ error: 'Invalid credentials' });
  
  // Check password
  const passwordValid = await bcrypt.compare(password, user.passwordHash);
  if (!passwordValid) return res.status(401).json({ error: 'Invalid credentials' });
  
  // Generate token
  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
  
  res.json({ token });
});
\`\`\`

#### Best Practices:
- Always salt and hash passwords (using bcrypt or Argon2)
- Implement rate limiting to prevent brute force attacks
- Enforce strong password policies

### 2. Multi-Factor Authentication (MFA)

Adds an additional layer of security beyond passwords:

- Something you know (password)
- Something you have (phone, security key)
- Something you are (biometrics)

\`\`\`javascript
// Example of implementing TOTP (Time-based One-Time Password)
const speakeasy = require('speakeasy');

// Generate a secret for the user
const secret = speakeasy.generateSecret({ length: 20 });

// Verify a token provided by the user
const verified = speakeasy.totp.verify({
  secret: secret.base32,
  encoding: 'base32',
  token: '123456' // Token from user's authenticator app
});
\`\`\`

### 3. OAuth and Social Login

Leverages existing accounts to simplify authentication:

\`\`\`javascript
// Example using Passport.js with Google OAuth
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://yourdomain.com/auth/google/callback"
  },
  (accessToken, refreshToken, profile, done) => {
    // Find or create user with the Google profile info
    User.findOrCreate({ googleId: profile.id }, (err, user) => {
      return done(err, user);
    });
  }
));
\`\`\`

## Authorization Strategies

### 1. Role-Based Access Control (RBAC)

Assigns permissions based on user roles:

\`\`\`javascript
// Middleware for checking role-based access
const requireRole = (role) => {
  return (req, res, next) => {
    if (!req.user) return res.status(401).json({ error: 'Unauthorized' });
    if (req.user.role !== role) return res.status(403).json({ error: 'Forbidden' });
    next();
  };
};

// Usage
app.get('/admin/users', requireRole('admin'), (req, res) => {
  // Only admins can access this endpoint
});
\`\`\`

### 2. Attribute-Based Access Control (ABAC)

More granular than RBAC, considering various attributes:

\`\`\`javascript
// ABAC example with a policy-based approach
const canAccessResource = (user, resource, action) => {
  // Department-based access
  if (resource.department === user.department) {
    // Managers can perform any action
    if (user.role === 'manager') return true;
    
    // Regular employees can only view
    if (user.role === 'employee' && action === 'view') return true;
  }
  
  // Resource owners can do anything with their resources
  if (resource.ownerId === user.id) return true;
  
  return false;
};
\`\`\`

## Token-Based Authentication

### JWT (JSON Web Tokens)

A popular approach for stateless authentication:

\`\`\`javascript
// Creating a JWT
const token = jwt.sign(
  { userId: user._id, role: user.role },
  process.env.JWT_SECRET,
  { expiresIn: '1h' }
);

// Verifying a JWT
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'No token provided' });
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ error: 'Invalid token' });
  }
};
\`\`\`

### Security Considerations:
- Keep tokens short-lived
- Use HTTPS for all authenticated requests
- Store tokens securely on the client side
- Implement token refresh mechanisms

## Implementing Authentication in Common Frameworks

### Express.js (Node.js)

\`\`\`javascript
const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const app = express();

// Middleware to authenticate requests
const authenticate = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Unauthorized' });
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ error: 'Invalid token' });
  }
};

// Protected route
app.get('/profile', authenticate, (req, res) => {
  res.json({ user: req.user });
});
\`\`\`

## Conclusion

Implementing robust authentication and authorization is essential for application security. Start with the basics, follow industry best practices, and continuously update your security measures as threats evolve.

Remember that security is a journey, not a destination. Regular audits and updates to your authentication and authorization systems are crucial to maintaining a secure application.
    `,
    author: {
      name: "Mihir Goswami",
      avatar: "./image/Mihir.png",
      initials: "MG",
      bio: "Security Engineer specializing in authentication systems and identity management.",
    },
    date: "Oct 15, 2024",
    readTime: "10 min read",
    tags: [
      "Security",
      "Authentication",
      "Authorization",
      "Web Development",
      "Backend",
    ],
  },

  {
    id: "web-app-security-guide",
    title: "How to Secure Your Web App: A Backend Developer's Guide",
    excerpt:
      "Learn essential security practices to protect your web applications from common vulnerabilities and attacks.",
    coverImage:
      "https://thedigitaleducation.org/wp-content/uploads/2023/11/what-is-web-security-and-why-Its-important-1-768x427.jpg",
    content: `
# How to Secure Your Web App: A Backend Developer's Guide

*Essential security practices to protect your applications from common vulnerabilities*

Web application security is a critical aspect of development that's often overlooked until it's too late. This guide outlines essential security practices that every backend developer should implement to protect their applications.

## Understanding the Threat Landscape

Before diving into specific security measures, it's important to understand what you're protecting against:

- **Data breaches**: Unauthorized access to sensitive information
- **Session hijacking**: Attackers taking over user sessions
- **Injection attacks**: SQL, NoSQL, command injection, etc.
- **Cross-site scripting (XSS)**: Injecting malicious client-side scripts
- **Cross-site request forgery (CSRF)**: Tricking users into performing unwanted actions
- **Denial of service (DoS)**: Overwhelming your systems

## Essential Security Measures

### 1. Input Validation and Sanitization

Never trust user input. Always validate and sanitize data before processing it:

\`\`\`javascript
// Bad practice - vulnerable to SQL injection
db.query(\`SELECT * FROM users WHERE username = '\${username}'\`);

// Good practice - using parameterized queries
db.query('SELECT * FROM users WHERE username = ?', [username]);
\`\`\`

For frontend data:

\`\`\`javascript
// Sanitize HTML to prevent XSS
const sanitizedInput = DOMPurify.sanitize(userInput);
\`\`\`

### 2. Implement Proper Authentication

Use strong authentication mechanisms:

- Enforce strong password policies
- Implement account lockouts after multiple failed attempts
- Use multi-factor authentication where possible
- Securely store credentials (hash passwords with bcrypt or Argon2)

\`\`\`javascript
// Proper password hashing
const hashPassword = async (password) => {
  // Generate a salt
  const salt = await bcrypt.genSalt(12);
  // Hash password with salt
  return bcrypt.hash(password, salt);
};

// Verify password
const verifyPassword = async (password, hash) => {
  return bcrypt.compare(password, hash);
};
\`\`\`

### 3. Session Management

Secure your user sessions:

\`\`\`javascript
// Express session configuration example
app.use(session({
  secret: process.env.SESSION_SECRET,
  name: 'sessionId', // Don't use default name
  cookie: {
    httpOnly: true, // Prevents client-side JS from reading
    secure: process.env.NODE_ENV === 'production', // HTTPS only in production
    sameSite: 'strict', // Helps prevent CSRF
    maxAge: 3600000 // 1 hour expiry
  },
  resave: false,
  saveUninitialized: false
}));
\`\`\`

### 4. Implement HTTPS

Always use HTTPS to encrypt data in transit:

- Obtain and configure SSL/TLS certificates
- Redirect HTTP to HTTPS
- Use HTTP Strict Transport Security (HSTS)

\`\`\`javascript
// Express HTTPS redirect middleware
app.use((req, res, next) => {
  if (process.env.NODE_ENV === 'production' && !req.secure) {
    return res.redirect('https://' + req.headers.host + req.url);
  }
  next();
});

// HSTS header
app.use((req, res, next) => {
  res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
  next();
});
\`\`\`

### 5. Protect Against Common Attacks

#### SQL Injection

Use parameterized queries or ORM tools:

\`\`\`javascript
// Using parameterized queries with Node.js and MySQL
connection.query(
  'SELECT * FROM users WHERE email = ? AND status = ?',
  [email, 'active'],
  (error, results) => {
    // Handle results
  }
);
\`\`\`

#### Cross-Site Scripting (XSS)

Sanitize user input and use Content Security Policy:

\`\`\`javascript
// Set CSP headers
app.use((req, res, next) => {
  res.setHeader(
    'Content-Security-Policy',
    "default-src 'self'; script-src 'self'; object-src 'none'"
  );
  next();
});
\`\`\`

#### Cross-Site Request Forgery (CSRF)

Implement anti-CSRF tokens:

\`\`\`javascript
// Express with csurf package
const csrf = require('csurf');
const csrfProtection = csrf({ cookie: true });

app.post('/profile/update', csrfProtection, (req, res) => {
  // Update profile logic here
});

// In your form template
// <input type="hidden" name="_csrf" value="<%= csrfToken %>">
\`\`\`

### 6. Rate Limiting and Brute Force Protection

Implement rate limiting to prevent brute force attacks:

\`\`\`javascript
// Express rate limiting example
const rateLimit = require('express-rate-limit');

// Apply to login endpoints
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // 5 requests per window
  message: 'Too many login attempts, please try again later'
});

app.post('/login', loginLimiter, (req, res) => {
  // Login logic
});
\`\`\`

### 7. Security Headers

Implement security headers to enhance protection:

\`\`\`javascript
// Using Helmet package for Express
const helmet = require('helmet');
app.use(helmet());

// This sets various security headers including:
// - X-XSS-Protection
// - X-Content-Type-Options
// - X-Frame-Options
// - Content-Security-Policy
// And more
\`\`\`

### 8. Logging and Monitoring

Implement comprehensive logging for security events:

\`\`\`javascript
// Example using Winston logger
const winston = require('winston');
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' })
  ]
});

// Log security events
app.post('/login', (req, res) => {
  // Login logic
  if (loginFailed) {
    logger.warn({
      message: 'Failed login attempt',
      username: req.body.username,
      ip: req.ip,
      timestamp: new Date().toISOString()
    });
  }
});
\`\`\`

## Regular Security Maintenance

Security is not a one-time task but an ongoing process:

1. **Keep dependencies updated**: Regularly update libraries and frameworks to patch security vulnerabilities:
\`\`\`bash
# Check for vulnerable dependencies
npm audit

# Update packages
npm update
\`\`\`

2. **Conduct security audits**: Regularly review your codebase for security issues
3. **Stay informed**: Follow security blogs and advisories related to your tech stack
4. **Create a security response plan**: Have a plan for handling security incidents

## Conclusion

Securing web applications requires a multi-layered approach and continuous vigilance. By implementing these security practices, you'll significantly reduce the risk of security breaches and protect both your application and your users' data.

Remember: Security is not a feature but a requirement. It should be integrated into every stage of your development process, from design to deployment and beyond.
    `,
    author: {
      name: "Mihir Goswami",
      avatar: "./image/Mihir.png",
      initials: "MG",
      bio: "Cybersecurity specialist with 10+ years of experience securing web applications and API infrastructures.",
    },
    date: "Oct 18, 2024",
    readTime: "12 min read",
    tags: [
      "Security",
      "Web Development",
      "Backend",
      "Cybersecurity",
      "Best Practices",
    ],
  },
];

