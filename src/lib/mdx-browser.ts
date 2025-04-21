// Define types locally since we deleted the mdx.ts file
export interface ArticleFrontmatter {
  id: string;
  title: string;
  excerpt: string;
  coverImage: string;
  date: string;
  readTime: string;
  author: {
    name: string;
    avatar: string;
    initials: string;
    bio: string;
  };
  tags: string[];
}

export interface MDXArticle {
  frontmatter: ArticleFrontmatter;
  slug: string;
  content: string;
}

// Pre-processed article data 
// This approach avoids trying to directly import or fetch MDX files
const ARTICLES_DATA: Record<string, { frontmatter: ArticleFrontmatter, content: string }> = {
  'javascript-typescript-comparison': {
    frontmatter: {
      id: 'javascript-typescript-comparison',
      title: 'JavaScript vs TypeScript - A Comprehensive Comparison',
      excerpt: 'Understanding the key differences, benefits, and use cases of JavaScript and TypeScript in modern web development.',
      coverImage: 'https://images.ctfassets.net/6e7jqm4y92l8/5nzwwMXuigK9Bj1Z9zH5ZR/2ee18f6d393a3e814b23f30fb1c7deb3/210407_MB_blog_cover_TSvsJS.jpg',
      date: 'Mar 20, 2024',
      readTime: '8 min read',
      author: {
        name: 'Mihir Goswami',
        avatar: './image/Mihir.png',
        initials: 'MG',
        bio: 'Web developer passionate about JavaScript, TypeScript, and modern web technologies.',
      },
      tags: ['JavaScript', 'TypeScript', 'Web Development', 'Programming'],
    },
    content: `# JavaScript vs TypeScript Backend

Choosing the right language for backend development can be a game-changer, especially when it comes to scalability, maintainability, and team collaboration. In the world of JavaScript-based development, a frequent question is: **Should I use JavaScript or TypeScript for my backend?**

In this post, we'll break down both JavaScript (JS) and TypeScript (TS), focusing on performance, developer experience, ecosystem, and long-term viability—helping you choose the right tool for your backend project.

## 1. Overview: JS and TS

- **JavaScript (JS)**: The most widely used scripting language for web development. It runs on both frontend (browser) and backend (via Node.js). Known for its flexibility and speed, but can suffer from weak typing and runtime errors.

- **TypeScript (TS)**: A superset of JavaScript developed by Microsoft. It adds **static typing**, better tooling, and compile-time error checking. TS compiles down to JavaScript, so it works wherever JS does.

## 2. Performance

Since TypeScript compiles down to JavaScript, both offer **similar runtime performance** in backend applications.

\`\`\`javascript
// JavaScript example
function addNumbers(a, b) {
  return a + b; // No type checking, could concatenate strings
}

// TypeScript example
function addNumbers(a: number, b: number): number {
  return a + b; // Type checking ensures numbers are passed
}
\`\`\`

**Verdict**: **Tie**. Runtime performance is essentially the same.

## 3. Developer Experience and Code Quality

- **JavaScript**: Very flexible, but that can be a double-edged sword. Dynamic typing can lead to bugs that only appear at runtime.

- **TypeScript**: With static typing and better autocompletion, TS helps catch errors during development. It's especially useful in large teams and long-term projects. IDE support (like VSCode) is much better with TS.

\`\`\`typescript
// TypeScript provides better autocomplete and error detection
interface User {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'user';
}

function getUserName(user: User): string {
  return user.name;
}
\`\`\`

**Verdict**: **TypeScript wins** for maintainability and long-term code quality.

## 4. Scalability

As projects grow, JavaScript codebases often become harder to manage due to lack of types and structural contracts.

TypeScript helps by:
- Enforcing type contracts between components
- Making refactoring safer
- Providing better documentation through interfaces and types

**Verdict**: **TypeScript is better** for large-scale backend applications.

## 5. Learning Curve

- **JavaScript**: Easy to pick up, especially for beginners or those familiar with web development.

- **TypeScript**: Has a learning curve due to its type system. However, if you already know JavaScript, learning TypeScript is quite straightforward.

**Verdict**: **JavaScript wins** for ease of entry, but TypeScript isn't far behind.

## 6. Ecosystem and Framework Support

Both languages use the **same Node.js ecosystem** and have access to popular backend frameworks like:

- **Express.js**
- **NestJS** (TypeScript-first)
- **Fastify**
- **Koa**

TypeScript is now widely supported in all major backend frameworks. Tools like \`ts-node\` and \`esbuild\` also speed up development.

**Verdict**: **Tie**, though TypeScript's support is growing rapidly and is often preferred in modern backend frameworks like **NestJS**.

## 7. Error Handling and Debugging

- **JavaScript**: Runtime errors can be harder to debug and may slip into production if not tested well.

- **TypeScript**: Catches many common bugs at compile time. Type errors are flagged early, reducing the likelihood of critical issues in production.

**Verdict**: **TypeScript wins** in error prevention.

## 8. Team Collaboration and Code Maintenance

In large teams or organizations, code readability and maintainability become critical.

- **TypeScript**: Makes collaboration easier by enforcing strict typing. Developers can understand each other's code faster, and onboarding becomes smoother thanks to well-defined interfaces and types.
- **JavaScript**: While still collaborative, lacks enforced structure which can lead to inconsistencies across large codebases.

**Verdict**: **TypeScript wins** in team-based environments.

## 9. Tooling and Developer Productivity

- **TypeScript**: Modern editors like VSCode offer powerful autocomplete, type checking, go-to-definition, and refactor features—boosting developer efficiency.
- **JavaScript**: Also supports these tools, but the experience isn't as accurate due to dynamic typing.

**Verdict**: **TypeScript wins** for tooling and productivity.

## 10. Real-World Use Cases

- **JavaScript Backend Examples**:
  - Lightweight REST APIs
  - Quick microservices
  - Prototypes and MVPs

- **TypeScript Backend Examples**:
  - Enterprise-grade applications (e.g., fintech, healthcare)
  - Scalable microservices
  - Developer tooling (e.g., CLI apps, compiler tools)

Many modern companies like **Airbnb**, **Slack**, and **Microsoft** have already adopted TypeScript for their backend services because of its robustness and reliability.

## Conclusion: Which One Should You Use?

**Use JavaScript if:**
- You're building a small project or prototype.
- You want fast iteration and less overhead.
- You're new to programming or want to build something quickly.

**Use TypeScript if:**
- You're building a scalable, long-term backend project.
- You work in a team and want safer, more maintainable code.
- You want to catch bugs early and reduce runtime errors.

## Final Thoughts

TypeScript is becoming the **industry standard** for professional backend development in the Node.js ecosystem. While JavaScript is still perfectly valid and widely used, more teams are migrating to TypeScript for its long-term benefits. TS is no longer just an add-on—it's a major step forward in writing clean, reliable, and maintainable backend code.

**What do you prefer for your backend—JS or TS?**  
Ping me on X and share your experience with me. Let's keep the conversation going!
`
  },
  'rest-vs-graphql': {
    frontmatter: {
      id: 'rest-vs-graphql',
      title: 'REST API vs. GraphQL - Which One Should You Use?',
      excerpt: 'A comprehensive comparison of REST and GraphQL architectures to help you make the right choice for your next project.',
      coverImage: 'https://blog.postman.com/wp-content/uploads/2023/12/GraphQL-vs-REST-1.jpg',
      date: 'Oct 12, 2024',
      readTime: '8 min read',
      author: {
        name: 'Mihir Goswami',
        avatar: './image/Mihir.png',
        initials: 'MG',
        bio: 'Senior Backend Developer with 8+ years of API design experience.',
      },
      tags: ['API', 'REST', 'GraphQL', 'Backend', 'Web Development'],
    },
    content: `# REST API vs. GraphQL: Which One Should You Use?

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

\`\`\`javascript
// REST: Multiple requests for related data
async function getUserWithPosts(userId) {
  // First request to get user
  const userResponse = await fetch(\`/api/users/\${userId}\`);
  const user = await userResponse.json();
  
  // Second request to get posts
  const postsResponse = await fetch(\`/api/users/\${userId}/posts\`);
  const posts = await postsResponse.json();
  
  // Combine the data
  return { ...user, posts };
}
\`\`\`

**GraphQL**:
- Single endpoint
- Flexible queries returning exactly what's needed
- Reduced number of requests

\`\`\`javascript
// GraphQL: Single request for all needed data
async function getUserWithPosts(userId) {
  const response = await fetch('/api/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: \`
        query {
          user(id: "\${userId}") {
            id
            name
            email
            posts {
              id
              title
              content
            }
          }
        }
      \`
    })
  });
  
  const { data } = await response.json();
  return data.user;
}
\`\`\`

### 2. Performance Considerations

**REST Advantages**:
- Better caching mechanisms
- More predictable server load
- Simpler rate limiting

\`\`\`javascript
// REST caching example
app.get('/api/posts/:id', (req, res) => {
  const post = getPostById(req.params.id);
  
  // Set cache headers
  res.set('Cache-Control', 'public, max-age=3600'); // Cache for 1 hour
  res.json(post);
});
\`\`\`

**GraphQL Advantages**:
- Prevents over-fetching and under-fetching
- Reduced network overhead for complex data
- Better performance on slow connections

\`\`\`javascript
// GraphQL resolvers with dataloader for efficient batch loading
const batchLoadUsers = new DataLoader(async (userIds) => {
  const users = await db.users.findMany({
    where: { id: { in: userIds } }
  });
  
  // Return in the same order as requested
  return userIds.map(id => users.find(user => user.id === id));
});

const resolvers = {
  Query: {
    user: (_, { id }) => batchLoadUsers.load(id)
  }
};
\`\`\`

### 3. Implementation Complexity

**REST**:
- Easier to set up initially
- Well-established patterns and tooling
- Lower learning curve

\`\`\`javascript
// Simple REST endpoint
app.get('/api/users', async (req, res) => {
  try {
    const users = await db.users.findMany();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});
\`\`\`

**GraphQL**:
- Steeper learning curve
- Requires more initial setup
- More complex error handling

\`\`\`javascript
// GraphQL schema and resolver
const typeDefs = gql\`
  type User {
    id: ID!
    name: String!
    email: String!
    posts: [Post!]
  }
  
  type Post {
    id: ID!
    title: String!
    content: String!
    author: User!
  }
  
  type Query {
    users: [User!]!
    user(id: ID!): User
  }
\`;

const resolvers = {
  Query: {
    users: () => db.users.findMany(),
    user: (_, { id }) => db.users.findUnique({ where: { id } })
  },
  User: {
    posts: (parent) => db.posts.findMany({ where: { authorId: parent.id } })
  }
};
\`\`\`

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

\`\`\`javascript
// Hybrid approach - GraphQL layer over REST
const resolvers = {
  Query: {
    user: async (_, { id }) => {
      // Use existing REST endpoint under the hood
      const response = await fetch(\`https://api.example.com/users/\${id}\`);
      return response.json();
    }
  },
  User: {
    posts: async (parent) => {
      // Use existing REST endpoint for posts
      const response = await fetch(\`https://api.example.com/users/\${parent.id}/posts\`);
      return response.json();
    }
  }
};
\`\`\`

## Conclusion

Both REST and GraphQL have their merits, and the "right" choice depends on your specific requirements. Consider your team's expertise, application complexity, and future scalability needs when making your decision.

Remember: the best API architecture is the one that solves your specific problems while minimizing complexity.`
  },
  'authentication-authorization-guide': {
    frontmatter: {
      id: 'authentication-authorization-guide',
      title: 'Getting Started with Authentication and Authorization',
      excerpt: 'Learn the fundamentals of securing user access to your applications with proper authentication and authorization techniques.',
      coverImage: 'https://us-west-2.graphassets.com/AuGrs0mztRH6ldTYKJkSAz/resize=width:2402,height:1431/Lsa2537QZ2N7RCgY1nZQ',
      date: 'Oct 15, 2024',
      readTime: '10 min read',
      author: {
        name: 'Mihir Goswami',
        avatar: './image/Mihir.png',
        initials: 'MG',
        bio: 'Security Engineer specializing in authentication systems and identity management.',
      },
      tags: ['Security', 'Authentication', 'Authorization', 'Web Development', 'Backend'],
    },
    content: `# Getting Started with Authentication and Authorization

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
- Use secure password reset flows

\`\`\`javascript
// Strong password validation
function isStrongPassword(password) {
  // At least 8 characters, with uppercase, lowercase, number, and special character
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return regex.test(password);
}
\`\`\`

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

\`\`\`javascript
// Token refresh example
app.post('/refresh-token', async (req, res) => {
  const { refreshToken } = req.body;
  
  try {
    // Verify the refresh token
    const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
    
    // Find the user
    const user = await User.findById(decoded.userId);
    if (!user) return res.status(401).json({ error: 'User not found' });
    
    // Generate new access token
    const accessToken = jwt.sign(
      { userId: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );
    
    res.json({ accessToken });
  } catch (error) {
    res.status(401).json({ error: 'Invalid refresh token' });
  }
});
\`\`\`

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

### React with Context API

\`\`\`jsx
// Authentication context
import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Check for token in localStorage
    const token = localStorage.getItem('token');
    if (token) {
      try {
        // Decode token and set user (in a real app, verify with server)
        const decoded = JSON.parse(atob(token.split('.')[1]));
        setUser(decoded);
      } catch (error) {
        console.error('Invalid token', error);
        localStorage.removeItem('token');
      }
    }
    setLoading(false);
  }, []);
  
  const login = async (credentials) => {
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials)
      });
      
      const data = await response.json();
      if (!response.ok) throw new Error(data.error);
      
      localStorage.setItem('token', data.token);
      setUser(data.user);
      return true;
    } catch (error) {
      console.error('Login failed', error);
      return false;
    }
  };
  
  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };
  
  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
\`\`\`

## Conclusion

Implementing robust authentication and authorization is essential for application security. Start with the basics, follow industry best practices, and continuously update your security measures as threats evolve.

Remember that security is a journey, not a destination. Regular audits and updates to your authentication and authorization systems are crucial to maintaining a secure application.`
  },
  'web-app-security-guide': {
    frontmatter: {
      id: 'web-app-security-guide',
      title: 'How to Secure Your Web App - A Backend Developer\'s Guide',
      excerpt: 'Learn essential security practices to protect your web applications from common vulnerabilities and attacks.',
      coverImage: 'https://thedigitaleducation.org/wp-content/uploads/2023/11/what-is-web-security-and-why-Its-important-1-768x427.jpg',
      date: 'Oct 18, 2024',
      readTime: '12 min read',
      author: {
        name: 'Mihir Goswami',
        avatar: './image/Mihir.png',
        initials: 'MG',
        bio: 'Cybersecurity specialist with 10+ years of experience securing web applications and API infrastructures.',
      },
      tags: ['Security', 'Web Development', 'Backend', 'Cybersecurity', 'Best Practices'],
    },
    content: `# How to Secure Your Web App: A Backend Developer's Guide

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

### 5. Cross-Site Scripting (XSS) Protection

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

### 6. Cross-Site Request Forgery (CSRF) Protection

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

### 7. Rate Limiting and Brute Force Protection

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

### 8. Security Headers

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

### 9. Logging and Monitoring

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

Remember: Security is not a feature but a requirement. It should be integrated into every stage of your development process, from design to deployment and beyond.`
  },
  'markdown-syntax-highlighting': {
    frontmatter: {
      id: 'markdown-syntax-highlighting',
      title: 'Markdown & Syntax Highlighting in Web Development',
      excerpt: 'Learn how to effectively use Markdown with syntax highlighting to create beautiful documentation and code examples for your web projects.',
  coverImage: 'https://serokell.io/files/pm/pmzzkh71.Markdown_markup_language_pic1.jpg',
      date: 'Oct 21, 2024',
      readTime: '8 min read',
      author: {
        name: 'Mihir Goswami',
        avatar: './image/Mihir.png',
        initials: 'MG',
        bio: 'Technical writer and web developer with a passion for clear documentation.',
      },
      tags: ['Markdown', 'Syntax Highlighting', 'Documentation', 'Web Development', 'MDX'],
    },
    content: `# Markdown & Syntax Highlighting in Web Development

*Create beautiful documentation and code examples with minimal effort*

Markdown has become the de facto standard for writing documentation, READMEs, and even blog posts in the web development world. When combined with syntax highlighting, it creates an excellent reading experience for technical content.

## Getting Started with Markdown

Markdown is a lightweight markup language that allows you to write formatted content using plain text. It's designed to be easy to write and easy to read.

### Basic Markdown Syntax

#### Headers

\`\`\`markdown
# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6
\`\`\`

#### Text Formatting

\`\`\`markdown
*Italic text* or _Italic text_
**Bold text** or __Bold text__
~~Strikethrough text~~
\`\`\`

#### Lists

\`\`\`markdown
# Unordered List
- Item 1
- Item 2
  - Nested item
  - Another nested item
- Item 3

# Ordered List
1. First item
2. Second item
3. Third item
\`\`\`

#### Links and Images

\`\`\`markdown
[Link text](https://example.com)

![Alt text for image](path/to/image.jpg "Optional title")
\`\`\`

#### Blockquotes

\`\`\`markdown
> This is a blockquote
> It can span multiple lines
>
> And even have multiple paragraphs
\`\`\`

#### Tables

\`\`\`markdown
| Header 1 | Header 2 | Header 3 |
|----------|----------|----------|
| Cell 1   | Cell 2   | Cell 3   |
| Cell 4   | Cell 5   | Cell 6   |
\`\`\`

## Syntax Highlighting for Code Blocks

One of the most valuable features for developers is the ability to add syntax highlighting to code blocks.

### Basic Code Blocks

In Markdown, you can create code blocks by indenting with four spaces or using triple backticks:

\`\`\`
\`\`\`javascript
function greeting(name) {
  return \`Hello, \${name}!\`;
}
\`\`\`
\`\`\`

The output would be:

\`\`\`javascript
function greeting(name) {
  return \`Hello, \${name}!\`;
}
\`\`\`

### Popular Syntax Highlighting Libraries

#### Prism.js

Prism is a lightweight, extensible syntax highlighter that's widely used in web projects:

\`\`\`jsx
// In React with Prism
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css'; // Choose your theme
import { useEffect } from 'react';

function CodeBlock({ code, language }) {
  useEffect(() => {
    Prism.highlightAll();
  }, [code]);

  return (
    <pre className={\`language-\${language}\`}>
      <code className={\`language-\${language}\`}>{code}</code>
    </pre>
  );
}
\`\`\`

#### Highlight.js

Another popular option is highlight.js:

\`\`\`javascript
// Using highlight.js with vanilla JS
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('pre code').forEach((block) => {
    hljs.highlightBlock(block);
  });
});
\`\`\`

#### Shiki

Shiki is a newer syntax highlighter that uses the same TextMate grammar as VS Code:

\`\`\`javascript
// Using Shiki in Node.js
const shiki = require('shiki');

async function highlight(code, lang) {
  const highlighter = await shiki.getHighlighter({
    theme: 'nord'
  });
  
  return highlighter.codeToHtml(code, lang);
}
\`\`\`

## Markdown with React: Using MDX

MDX combines the power of Markdown with JSX, allowing you to include React components directly in your Markdown:

\`\`\`jsx
// Example MDX file
import { Chart } from './components/Chart';

# Sales Report

Here's our quarterly sales data:

<Chart data={salesData} />

As you can see from the chart above, our Q3 sales increased by 25%.
\`\`\`

### Setting Up MDX in a Next.js Project

\`\`\`javascript
// next.config.js
const withMDX = require('@next/mdx')({
  extension: /\\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
});
\`\`\`

### Custom Components in MDX

You can override default Markdown components with your own custom components:

\`\`\`jsx
// components/MDXComponents.js
import CodeBlock from './CodeBlock';
import CustomLink from './CustomLink';

const MDXComponents = {
  code: CodeBlock,
  a: CustomLink,
  // Override other elements as needed
};

export default MDXComponents;
\`\`\`

\`\`\`jsx
// pages/_app.js
import { MDXProvider } from '@mdx-js/react';
import MDXComponents from '../components/MDXComponents';

function MyApp({ Component, pageProps }) {
  return (
    <MDXProvider components={MDXComponents}>
      <Component {...pageProps} />
    </MDXProvider>
  );
}

export default MyApp;
\`\`\`

## Advanced Syntax Highlighting Techniques

### Line Highlighting

Highlighting specific lines of code is extremely useful for tutorials:

\`\`\`jsx
// Using Prism with line highlighting
import Prism from 'prismjs';
import 'prismjs/plugins/line-highlight/prism-line-highlight.css';
import 'prismjs/plugins/line-highlight/prism-line-highlight';

function CodeBlock({ code, language, highlight }) {
  return (
    <pre className={\`language-\${language} line-numbers\`} data-line={highlight}>
      <code className={\`language-\${language}\`}>{code}</code>
    </pre>
  );
}

// Usage
<CodeBlock 
  code="function add(a, b) {\\n  return a + b;\\n}" 
  language="javascript" 
  highlight="2"
/>
\`\`\`

### Copy-to-Clipboard Button

Adding a copy button makes it easier for users to grab your code examples:

\`\`\`jsx
function CodeBlock({ code, language }) {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    // Optional: Show tooltip/feedback
  };

  return (
    <div className="code-container">
      <button 
        className="copy-button" 
        onClick={copyToClipboard}
      >
        Copy
      </button>
      <pre className={\`language-\${language}\`}>
        <code className={\`language-\${language}\`}>{code}</code>
      </pre>
    </div>
  );
}
\`\`\`

### Diff Highlighting

Showing code differences is perfect for tutorials demonstrating changes:

\`\`\`diff
- const oldFunction = (x) => x * 2;
+ const newFunction = (x) => x * 2 + 1;

  function process(input) {
-   return oldFunction(input);
+   return newFunction(input);
  }
\`\`\`

To implement diff highlighting with Prism:

\`\`\`javascript
import Prism from 'prismjs';
import 'prismjs/plugins/diff-highlight/prism-diff-highlight.css';
import 'prismjs/plugins/diff-highlight/prism-diff-highlight';
\`\`\`

## Optimizing Syntax Highlighting Performance

### Lazy Loading

For sites with lots of code blocks, lazy loading can improve initial load times:

\`\`\`jsx
// Lazy load Prism.js
import { useEffect, useState } from 'react';

function CodeBlock({ code, language }) {
  const [isPrismLoaded, setIsPrismLoaded] = useState(false);
  
  useEffect(() => {
    if (!isPrismLoaded) {
      import('prismjs').then(Prism => {
        import(\`prismjs/components/prism-\${language}\`).then(() => {
          Prism.highlightAll();
          setIsPrismLoaded(true);
        });
      });
    }
  }, [language, isPrismLoaded]);
  
  return (
    <pre className={\`language-\${language}\`}>
      <code className={\`language-\${language}\`}>{code}</code>
    </pre>
  );
}
\`\`\`

### Server-Side Rendering

Pre-rendering syntax highlighting on the server can avoid flickering and improve performance:

\`\`\`javascript
// Using Prism with Node.js for SSR
import Prism from 'prismjs';
// Load language components
require('prismjs/components/prism-javascript');
require('prismjs/components/prism-jsx');
// Add more languages as needed

export async function getStaticProps() {
  const markdownContent = '...'; // Your markdown content
  
  // Parse markdown and find code blocks
  const codeBlocks = parseMarkdownCodeBlocks(markdownContent);
  
  // Highlight each code block
  const highlightedBlocks = codeBlocks.map(block => {
    return {
      ...block,
      highlightedCode: Prism.highlight(
        block.code,
        Prism.languages[block.language],
        block.language
      )
    };
  });
  
  return {
    props: {
      highlightedBlocks
    }
  };
}
\`\`\`

## Conclusion

Markdown with syntax highlighting is an essential skill for developers creating documentation, tutorials, or technical blog posts. The combination provides a clean, readable format for sharing code examples and technical explanations.

With the tools and techniques covered in this guide, you can create beautiful, professional-looking documentation that makes your code examples shine.

Start small with basic Markdown and simple syntax highlighting, then gradually incorporate more advanced features as your needs grow. Your readers will thank you for the improved readability and user experience.`
  }
};

// Get all article slugs
export function getAllArticleSlugs(): string[] {
  return Object.keys(ARTICLES_DATA);
}

// Get an MDX article by slug
export async function getArticleBySlug(slug: string): Promise<MDXArticle | null> {
  try {
    if (!ARTICLES_DATA[slug]) {
      console.error(`Article data for slug "${slug}" not found`);
      return null;
    }

    const articleData = ARTICLES_DATA[slug];
    
    return {
      frontmatter: articleData.frontmatter,
      slug,
      content: articleData.content,
    };
  } catch (error) {
    console.error(`Error processing article data for "${slug}":`, error);
    return null;
  }
}

// Get all MDX articles
export async function getAllArticles(): Promise<MDXArticle[]> {
  const slugs = getAllArticleSlugs();
  const articlesPromises = slugs.map(slug => getArticleBySlug(slug));
  const articles = await Promise.all(articlesPromises);
  
  // Filter out null values
  const filteredArticles = articles.filter(article => article !== null) as MDXArticle[];
  
  // Sort by date (newest first)
  return filteredArticles.sort((a, b) => {
    return new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime();
  });
} 