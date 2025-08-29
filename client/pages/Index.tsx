import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import {
  Rocket,
  Target,
  Shield,
  Settings,
  Lock,
  Play,
  Star,
  ArrowRight,
  FileSpreadsheet,
  QrCode,
  Smartphone,
  Bell,
  Link,
  Github,
  Linkedin,
  Twitter,
  Eye,
} from "lucide-react";

export default function Index() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      rating: 5,
      text: "This Asset System helped us track company laptops easily. Game changer for our IT operations.",
      author: "Rahul Sharma",
      role: "IT Manager",
      company: "TechCorp",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face&auto=format",
      companyLogo: "🏢",
    },
    {
      rating: 5,
      text: "Managing our vehicle fleet has never been this simple. Highly recommend to any growing business.",
      author: "Priya Patel",
      role: "Operations Head",
      company: "LogiFlow",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=150&h=150&fit=crop&crop=face&auto=format",
      companyLogo: "🚛",
    },
    {
      rating: 5,
      text: "Property management made effortless with powerful tracking. Exactly what we needed.",
      author: "David Chen",
      role: "Real Estate Manager",
      company: "PropertyPro",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face&auto=format",
      companyLogo: "🏠",
    },
    {
      rating: 5,
      text: "The security features give us complete peace of mind. Enterprise-grade protection.",
      author: "Sarah Johnson",
      role: "Security Manager",
      company: "SecureTech",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face&auto=format",
      companyLogo: "🔒",
    },
  ];

  const techStack = [
    {
      title: "Frontend",
      tech: "React + Tailwind",
      icon: "⚛️",
      description: "Modern, responsive interface",
    },
    {
      title: "Backend",
      tech: "Node.js + JWT Auth",
      icon: "🚀",
      description: "Secure API architecture",
    },
    {
      title: "Database",
      tech: "MongoDB/PostgreSQL",
      icon: "��️",
      description: "Scalable data storage",
    },
    {
      title: "Deployment",
      tech: "AWS / Vercel / Netlify",
      icon: "☁️",
      description: "Cloud-native hosting",
    },
  ];

  const futureFeatures = [
    {
      icon: <FileSpreadsheet className="w-6 h-6" />,
      title: "Bulk Import",
      subtitle: "Excel/CSV Support",
    },
    {
      icon: <QrCode className="w-6 h-6" />,
      title: "QR Scanning",
      subtitle: "Mobile Ready",
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile App",
      subtitle: "iOS & Android",
    },
    {
      icon: <Bell className="w-6 h-6" />,
      title: "Smart Alerts",
      subtitle: "Real-time Updates",
    },
    {
      icon: <Link className="w-6 h-6" />,
      title: "ERP Integration",
      subtitle: "Seamless Workflow",
    },
  ];

  // Auto-scroll testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      <HeroSection />

      {/* Core Features Section */}
      <section id="features" className="py-32 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 grid-bg opacity-30"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-6">
            <h2 className="text-4xl sm:text-5xl font-heading font-bold">
              <span className="text-neon-cyan text-neon">Core Features</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-body leading-relaxed">
              Everything you need to manage your assets efficiently and securely
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="card-glow group cursor-pointer">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-20 h-20 rounded-full bg-neon-cyan/10 border border-neon-cyan/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Rocket className="w-10 h-10 text-neon-cyan" />
                </div>
                <CardTitle className="text-neon-cyan font-heading text-xl">
                  Executive Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground font-body leading-relaxed">
                  Track cars, properties & laptops instantly with comprehensive
                  dashboard insights.
                </p>
              </CardContent>
            </Card>

            <Card className="card-glow group cursor-pointer">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-20 h-20 rounded-full bg-neon-purple/10 border border-neon-purple/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-10 h-10 text-neon-purple" />
                </div>
                <CardTitle className="text-neon-purple font-heading text-xl">
                  Key Features
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground font-body leading-relaxed">
                  Quick search, unified dashboard, export options, and advanced
                  filtering capabilities.
                </p>
              </CardContent>
            </Card>

            <Card className="card-glow group cursor-pointer">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-20 h-20 rounded-full bg-neon-red/10 border border-neon-red/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-10 h-10 text-neon-red" />
                </div>
                <CardTitle className="text-neon-red font-heading text-xl">
                  Security First
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground font-body leading-relaxed">
                  Role-based access, authentication & audit logs with
                  enterprise-level security.
                </p>
              </CardContent>
            </Card>

            <Card className="card-glow group cursor-pointer">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-20 h-20 rounded-full bg-neon-green/10 border border-neon-green/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Settings className="w-10 h-10 text-neon-green" />
                </div>
                <CardTitle className="text-neon-green font-heading text-xl">
                  Tech Architecture
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground font-body leading-relaxed">
                  Scalable system powered by React + Node.js + MongoDB for
                  maximum performance.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section
        id="demo"
        className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-card to-secondary"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="card-glow p-10 bg-card/50">
                <div className="aspect-video bg-background rounded-xl flex items-center justify-center border border-neon-cyan/20">
                  <div className="text-center space-y-6">
                    <Play className="w-24 h-24 text-neon-cyan mx-auto animate-pulse" />
                    <div>
                      <p className="text-neon-cyan font-heading text-xl font-semibold">
                        Dashboard Demo Video
                      </p>
                      <p className="text-muted-foreground font-body mt-2">
                        Watch the full walkthrough
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8 order-1 lg:order-2">
              <h3 className="text-4xl sm:text-5xl font-heading font-bold leading-tight">
                <span className="text-neon-cyan text-neon">See how simple</span>
                <br />
                asset management can be.
              </h3>

              <p className="text-xl text-muted-foreground font-body leading-relaxed">
                Watch our interactive demo to see how you can manage all your
                assets from a single, powerful dashboard. No setup required,
                instant access to all features.
              </p>

              <Button
                className="btn-neon text-neon-cyan border-neon-cyan hover:bg-neon-cyan/10 text-xl px-12 py-6"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                Try Live Demo
                <ArrowRight className="w-6 h-6 ml-3" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Access Control Section */}
      <section id="security" className="py-32 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 grid-bg opacity-20"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-6">
            <h2 className="text-4xl sm:text-5xl font-heading font-bold">
              <span className="text-neon-purple text-neon">
                Enterprise Security
              </span>
            </h2>
            <p className="text-xl text-muted-foreground font-body">
              Your assets, your control – with granular access management
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 items-center">
            <Card className="card-glow border-neon-red/20">
              <CardHeader className="text-center pb-6">
                <div className="mx-auto w-24 h-24 rounded-full bg-neon-red/10 border-2 border-neon-red/20 flex items-center justify-center mb-6">
                  <Shield className="w-12 h-12 text-neon-red" />
                </div>
                <CardTitle className="text-neon-red font-heading text-2xl">
                  Admin Role
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-6">
                <p className="text-muted-foreground font-body text-lg">
                  Full control access
                </p>
                <ul className="text-left space-y-3 font-body">
                  <li className="flex items-center">
                    <span className="text-neon-red mr-3">✓</span> Create &
                    Delete Assets
                  </li>
                  <li className="flex items-center">
                    <span className="text-neon-red mr-3">✓</span> Manage User
                    Permissions
                  </li>
                  <li className="flex items-center">
                    <span className="text-neon-red mr-3">✓</span> Access All
                    Reports
                  </li>
                  <li className="flex items-center">
                    <span className="text-neon-red mr-3">✓</span> System
                    Configuration
                  </li>
                </ul>
              </CardContent>
            </Card>

            <div className="text-center">
              <div className="mx-auto w-40 h-40 rounded-full bg-gradient-to-br from-neon-red/20 to-neon-cyan/20 border-2 border-neon-purple/30 flex items-center justify-center pulse-glow">
                <Lock className="w-20 h-20 text-neon-purple" />
              </div>
              <p className="mt-8 text-2xl font-heading font-semibold text-neon-purple">
                Secure Access Control
              </p>
            </div>

            <Card className="card-glow border-neon-cyan/20">
              <CardHeader className="text-center pb-6">
                <div className="mx-auto w-24 h-24 rounded-full bg-neon-cyan/10 border-2 border-neon-cyan/20 flex items-center justify-center mb-6">
                  <Eye className="w-12 h-12 text-neon-cyan" />
                </div>
                <CardTitle className="text-neon-cyan font-heading text-2xl">
                  Viewer Role
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-6">
                <p className="text-muted-foreground font-body text-lg">
                  Read-only access
                </p>
                <ul className="text-left space-y-3 font-body">
                  <li className="flex items-center">
                    <span className="text-neon-cyan mr-3">✓</span> View Asset
                    Information
                  </li>
                  <li className="flex items-center">
                    <span className="text-neon-cyan mr-3">✓</span> Generate
                    Reports
                  </li>
                  <li className="flex items-center">
                    <span className="text-neon-cyan mr-3">✓</span> Export Data
                  </li>
                  <li className="flex items-center">
                    <span className="text-neon-cyan mr-3">✓</span> Search &
                    Filter
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technical Architecture Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-card to-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-6">
            <h2 className="text-4xl sm:text-5xl font-heading font-bold">
              <span className="text-neon-purple text-neon">
                Technical Stack
              </span>
            </h2>
            <p className="text-xl text-muted-foreground font-body">
              Built with modern, scalable technologies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {techStack.map((item, index) => (
              <div key={index} className="relative">
                <Card className="card-glow text-center h-full group cursor-pointer">
                  <CardHeader className="pb-4">
                    <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <CardTitle className="text-neon-purple font-heading text-xl">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="font-heading font-semibold text-lg">
                      {item.tech}
                    </p>
                    <p className="text-muted-foreground font-body">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>

                {index < techStack.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-neon-purple/50 to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="py-32 px-4 sm:px-6 lg:px-8 relative"
      >
        <div className="absolute inset-0 grid-bg opacity-20"></div>

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="text-center mb-20 space-y-6">
            <h2 className="text-4xl sm:text-5xl font-heading font-bold">
              <span className="text-neon-cyan text-neon">
                What Our Users Say
              </span>
            </h2>
            <p className="text-xl text-muted-foreground font-body">
              Trusted by teams worldwide
            </p>
          </div>

          <div className="relative">
            <Card className="card-glow">
              <CardContent className="p-12 text-center">
                <div className="flex justify-center mb-8">
                  {[...Array(testimonials[currentTestimonial].rating)].map(
                    (_, i) => (
                      <Star
                        key={i}
                        className="w-8 h-8 text-neon-orange fill-current"
                      />
                    ),
                  )}
                </div>

                <blockquote className="text-2xl font-body font-medium mb-10 text-foreground leading-relaxed max-w-3xl mx-auto">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>

                <div className="flex items-center justify-center space-x-6">
                  <img
                    src={testimonials[currentTestimonial].avatar}
                    alt={testimonials[currentTestimonial].author}
                    className="w-16 h-16 rounded-full border-2 border-neon-cyan/30"
                  />
                  <div className="text-left">
                    <p className="font-heading font-semibold text-xl text-neon-cyan">
                      {testimonials[currentTestimonial].author}
                    </p>
                    <p className="text-muted-foreground font-body">
                      {testimonials[currentTestimonial].role}
                    </p>
                    <div className="flex items-center mt-2">
                      <span className="text-2xl mr-2">
                        {testimonials[currentTestimonial].companyLogo}
                      </span>
                      <span className="text-muted-foreground font-body text-sm">
                        {testimonials[currentTestimonial].company}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center mt-8 space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? "bg-neon-cyan shadow-lg shadow-neon-cyan/50"
                      : "bg-slate-600 hover:bg-slate-500"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Future Enhancements Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-secondary to-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-6">
            <h2 className="text-4xl sm:text-5xl font-heading font-bold">
              <span className="text-neon-green text-neon">Coming Soon</span>
            </h2>
            <p className="text-xl text-muted-foreground font-body">
              Exciting features in development
            </p>
          </div>

          <div className="flex overflow-x-auto space-x-8 pb-6">
            {futureFeatures.map((feature, index) => (
              <Card
                key={index}
                className="card-glow min-w-[300px] flex-shrink-0 group cursor-pointer"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 mx-auto rounded-full bg-neon-green/10 border border-neon-green/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-neon-green">{feature.icon}</div>
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-neon-green mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground font-body">
                    {feature.subtitle}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call-to-Action */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-card"></div>

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-10">
          <h2 className="text-5xl sm:text-6xl font-heading font-bold leading-tight">
            <span className="bg-gradient-to-r from-neon-cyan via-neon-purple to-white bg-clip-text text-transparent">
              Ready to simplify asset management?
            </span>
          </h2>

          <Button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="btn-neon text-neon-cyan border-neon-cyan hover:bg-neon-cyan/10 text-2xl px-16 py-8 font-heading font-semibold"
          >
            Start Free Trial
            <ArrowRight className="w-8 h-8 ml-4" />
          </Button>
        </div>
      </section>

      {/* Premium Footer */}
      <footer className="py-16 px-4 sm:px-6 lg:px-8 border-t border-neon-purple/20 bg-background/90">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div className="text-center md:text-left">
              <h3 className="font-heading font-bold text-2xl text-neon-purple mb-4">
                Asset Management System
              </h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                Professional asset tracking for modern businesses.
              </p>
            </div>

            <div className="text-center">
              <h4 className="font-heading font-semibold text-lg text-neon-cyan mb-4">
                Product
              </h4>
              <ul className="space-y-3 font-body">
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-neon-cyan transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-neon-cyan transition-colors"
                  >
                    Demo
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-neon-cyan transition-colors"
                  >
                    Pricing
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-center md:text-right">
              <h4 className="font-heading font-semibold text-lg text-neon-cyan mb-4">
                Account
              </h4>
              <ul className="space-y-3 font-body">
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-neon-cyan transition-colors"
                  >
                    Login
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-neon-cyan transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-neon-purple/10">
            <p className="text-muted-foreground font-body mb-6 md:mb-0">
              © 2025 Asset Management System. All rights reserved.
            </p>

            <div className="flex space-x-6">
              <a
                href="#"
                className="text-muted-foreground hover:text-neon-cyan transition-colors duration-300 group"
              >
                <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-neon-cyan transition-colors duration-300 group"
              >
                <Github className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-neon-cyan transition-colors duration-300 group"
              >
                <Twitter className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
