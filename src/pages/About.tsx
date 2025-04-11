import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { useScrollToTop } from "@/hooks/useScrollToTop";

const About = () => {
  useScrollToTop();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        <div className="container-medium py-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-8">About Me</h1>

          <section className="mb-12 text-justify">
            <h2 className="font-serif text-2xl font-bold mb-4">Hey there, I'm Mihir</h2>
            <p className="text-lg text-muted-foreground mb-4">
              i am student pursuing a Bachelor's degree in Computer Science. I possess a significant interest in Software Development and am continuously seeking to broaden my understanding within the dynamic field of technology.
              My current experience includes practical application of the MERN stack in building web applications. Furthermore, I am actively engaged in learning various web technologies and exploring areas such as Web 3 and system design.
            </p>
            <p className="text-lg text-muted-foreground">
              As a dedicated tech enthusiast, I am committed to staying informed about the latest industry trends and aspire to integrate my technical capabilities and creative thinking to develop innovative software and contribute to open source initiatives.
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-12">
            <h2 className="font-serif text-2xl font-bold mb-6">About the Author</h2>
            <div className="flex items-start gap-6 flex-col md:flex-row">
              <Avatar className="h-24 w-24">
                <AvatarImage src=".\src\data\image\MihirProfile.jpg" alt="Mihir Goswami" />
                <AvatarFallback>MG</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-xl font-bold mb-2">Mihir Goswami</h3>
                <p className="text-muted-foreground mb-4 text-justify">
                  Full-stack developer with expertise in modern web technologies and security practices.
                  Passionate about creating efficient, secure, and user-friendly applications.
                </p>
                <p className="text-muted-foreground text-justify">
                  With 2+ years of experience, I shares practical insights
                  and best practices learned from real-world projects and challenges.
                </p>
              </div>
            </div>
          </section>

          <Separator className="my-8" />

          <section className="mb-12">
            <h2 className="font-serif text-2xl font-bold mb-4">Content Focus</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">Frontend Development</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>JavaScript and TypeScript</li>
                  <li>Modern frameworks and libraries</li>
                  <li>UI/UX best practices</li>
                  <li>Performance optimization</li>
                </ul>
              </div>
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">Backend Development</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>API design and architecture</li>
                  <li>Authentication and authorization</li>
                  <li>Database management</li>
                  <li>Server-side performance</li>
                </ul>
              </div>
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">Security</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Web application security</li>
                  <li>Secure coding practices</li>
                  <li>Common vulnerabilities and mitigations</li>
                  <li>Security auditing and testing</li>
                </ul>
              </div>
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">Best Practices</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Code organization and architecture</li>
                  <li>Testing strategies</li>
                  <li>Deployment and DevOps</li>
                  <li>Continuous learning resources</li>
                </ul>
              </div>
            </div>
          </section>

          <Separator className="my-8" />

          <section>
            <h2 className="font-serif text-2xl font-bold mb-4">Get in Touch</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Have questions, suggestions, or just want to connect? Feel free to reach out via:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span>mihirgoswami2006@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
                <span>@MIHIR___0007</span>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
