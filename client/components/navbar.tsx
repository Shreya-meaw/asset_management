import React, { useState, useEffect, Dispatch, SetStateAction } from "react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const DUMMY_EMAIL = "admin@test.com";
const DUMMY_PASSWORD = "Password@123";

interface NavbarProps {
  showLoginForm: boolean;
  setShowLoginForm: Dispatch<SetStateAction<boolean>>;
}

export function Navbar({ showLoginForm, setShowLoginForm }: NavbarProps) {
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [showGetStartedForm, setShowGetStartedForm] = useState(false);

  // Auth state
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isloggedin") === "true"
  );

  // Login form state
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const navigate = useNavigate();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const handleLoginClick = () => {
    setShowLoginForm(true);
  };

  const handleLogoutClick = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("isloggedin");
    navigate("/");
  };

  const closeForms = () => {
    setShowLoginForm(false);
    setShowGetStartedForm(false);
    setLoginError("");
    setLoginEmail("");
    setLoginPassword("");
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      loginEmail === DUMMY_EMAIL &&
      loginPassword === DUMMY_PASSWORD
    ) {
      setIsAuthenticated(true);
      localStorage.setItem("isloggedin", "true");
      closeForms();
    } else {
      setLoginError("Invalid email or password.");
    }
  };

  // Check authentication on route change
  useEffect(() => {
    const dashboardRoutes = ["/cars", "/laptops", "/properties"];
    const handleRouteCheck = () => {
      const isLoggedIn = localStorage.getItem("isloggedin") === "true";
      if (dashboardRoutes.includes(window.location.pathname) && !isLoggedIn) {
        navigate("/");
      }
      setIsAuthenticated(isLoggedIn);
    };

    window.addEventListener("popstate", handleRouteCheck);
    handleRouteCheck();

    return () => {
      window.removeEventListener("popstate", handleRouteCheck);
    };
  }, [navigate]);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img
                src="/logo.svg"
                alt="Asset Management System"
                className="h-10 w-auto"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("features")}
                className="text-foreground/80 hover:text-neon-cyan font-body font-medium transition-colors duration-200"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("demo")}
                className="text-foreground/80 hover:text-neon-cyan font-body font-medium transition-colors duration-200"
              >
                Demo
              </button>
              <button
                onClick={() => scrollToSection("security")}
                className="text-foreground/80 hover:text-neon-cyan font-body font-medium transition-colors duration-200"
              >
                Security
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-foreground/80 hover:text-neon-cyan font-body font-medium transition-colors duration-200"
              >
                Reviews
              </button>
            </div>

            {/* Right side - Theme toggle and CTA */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Theme Toggle */}
              <Button
                variant="outline"
                size="icon"
                onClick={toggleTheme}
                className="relative bg-background/50 border-border/50 hover:bg-neon-cyan/10 hover:border-neon-cyan/50 transition-all duration-300"
              >
                <Sun className="h-4 w-4 text-neon-cyan rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-4 w-4 text-neon-purple rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>

              {/* CTA Buttons */}

              <Button
                variant="outline"
                className="text-foreground border-border hover:bg-accent hover:text-accent-foreground font-body font-medium transition-all duration-300"
                onClick={isAuthenticated ? handleLogoutClick : handleLoginClick}
              >
                {isAuthenticated ? "Logout" : "Login"}
              </Button>



              {/* <Button
                    className="btn-neon text-neon-cyan border-neon-cyan font-body font-semibold"
                    onClick={handleGetStartedClick}
                  >
                    Get Started
                  </Button>           */}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
              {/* Mobile Theme Toggle */}
              <Button
                variant="outline"
                size="icon"
                onClick={toggleTheme}
                className="bg-background/50 border-border/50 hover:bg-neon-cyan/10 hover:border-neon-cyan/50"
              >
                <Sun className="h-4 w-4 text-neon-cyan rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-4 w-4 text-neon-purple rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </Button>

              <Button
                variant="outline"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="bg-background/50 border-border/50 hover:bg-neon-cyan/10 hover:border-neon-cyan/50"
              >
                {isMenuOpen ? (
                  <X className="h-4 w-4 text-neon-cyan" />
                ) : (
                  <Menu className="h-4 w-4 text-neon-cyan" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border/40">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <button
                  onClick={() => scrollToSection("features")}
                  className="block w-full text-left px-3 py-2 text-foreground/80 hover:text-neon-cyan hover:bg-neon-cyan/10 rounded-md font-body font-medium transition-colors duration-200"
                >
                  Features
                </button>
                <button
                  onClick={() => scrollToSection("demo")}
                  className="block w-full text-left px-3 py-2 text-foreground/80 hover:text-neon-cyan hover:bg-neon-cyan/10 rounded-md font-body font-medium transition-colors duration-200"
                >
                  Demo
                </button>
                <button
                  onClick={() => scrollToSection("security")}
                  className="block w-full text-left px-3 py-2 text-foreground/80 hover:text-neon-cyan hover:bg-neon-cyan/10 rounded-md font-body font-medium transition-colors duration-200"
                >
                  Security
                </button>
                <button
                  onClick={() => scrollToSection("testimonials")}
                  className="block w-full text-left px-3 py-2 text-foreground/80 hover:text-neon-cyan hover:bg-neon-cyan/10 rounded-md font-body font-medium transition-colors duration-200"
                >
                  Reviews
                </button>

                <div className="pt-4 space-y-2">
                  <Button
                    variant="outline"
                    className="w-full text-foreground border-border hover:bg-accent hover:text-accent-foreground"
                    onClick={handleLoginClick}
                  >
                    Login
                  </Button>
                  {/* <Button
                    className="w-full btn-neon text-neon-cyan border-neon-cyan font-semibold"
                    onClick={handleGetStartedClick}
                  >
                    Get Started
                  </Button> */}
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Conditionally render Login Form */}
      {showLoginForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-background p-6 rounded-md max-w-md w-full relative">
            <button
              onClick={closeForms}
              className="absolute top-2 right-2 text-foreground hover:text-neon-cyan"
              aria-label="Close login form"
            >
              &times;
            </button>
            <h2 className="text-2xl font-semibold mb-4">Login</h2>
            <form onSubmit={handleLoginSubmit}>
              <label className="block mb-2 font-medium" htmlFor="login-username">
                Username or Email
              </label>
              <input
                id="login-username"
                type="text"
                className="w-full mb-4 p-2 border border-border rounded"
                required
                value={loginEmail}
                onChange={e => setLoginEmail(e.target.value)}
              />
              <label className="block mb-2 font-medium" htmlFor="login-password">
                Password
              </label>
              <input
                id="login-password"
                type="password"
                className="w-full mb-4 p-2 border border-border rounded"
                required
                value={loginPassword}
                onChange={e => setLoginPassword(e.target.value)}
              />
              {loginError && (
                <div className="text-red-500 mb-2">{loginError}</div>
              )}

              <Button
                type="submit"
                className="w-full btn-neon text-neon-cyan border-neon-cyan font-semibold"
              >
                Login
              </Button>
            </form>
          </div>
        </div>
      )}

      {/* Conditionally render Get Started Form */}
      {showGetStartedForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-background p-6 rounded-md max-w-md w-full relative">
            <button
              onClick={closeForms}
              className="absolute top-2 right-2 text-foreground hover:text-neon-cyan"
              aria-label="Close get started form"
            >
              &times;
            </button>
            <h2 className="text-2xl font-semibold mb-4">Get Started</h2>
            <form>
              <label className="block mb-2 font-medium" htmlFor="gs-name">
                Full Name
              </label>
              <input
                id="gs-name"
                type="text"
                className="w-full mb-4 p-2 border border-border rounded"
                required
              />
              <label className="block mb-2 font-medium" htmlFor="gs-email">
                Email
              </label>
              <input
                id="gs-email"
                type="email"
                className="w-full mb-4 p-2 border border-border rounded"
                required
              />
              <label className="block mb-2 font-medium" htmlFor="gs-password">
                Password
              </label>
              <input
                id="gs-password"
                type="password"
                className="w-full mb-4 p-2 border border-border rounded"
                required
              />
              <Button type="submit" className="w-full btn-neon text-neon-cyan border-neon-cyan font-semibold">
                Create Account
              </Button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
