// import React, { useState, useEffect } from "react";
// import { Button } from "@/components/ui/button";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { DashboardDemo } from "./dashboard-demo";
// import {
//   Car,
//   Home,
//   Laptop,
//   Play,
//   ArrowRight,
//   ChevronRight,
//   Sparkles,
// } from "lucide-react";
// import { useNavigate } from 'react-router-dom';
// type AssetType = "cars" | "properties" | "laptops";

// export function HeroSection() {
//   const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
//   const [showDashboard, setShowDashboard] = useState(false);
//   const [selectedAsset, setSelectedAsset] = useState<AssetType | null>(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [isAnimating, setIsAnimating] = useState(false);
//   const navigate = useNavigate();

//   const assetData = [
//     {
//       id: "cars" as AssetType,
//       icon: Car,
//       name: "Cars",
//       count: "125 Active",
//       color: "neon-cyan",
//       description: "Fleet Management",
//       bgGradient: "from-cyan-500/20 to-blue-600/20",
//       iconColor: "text-neon-cyan",
//       borderColor: "border-neon-cyan/30",
//       hoverBg: "hover:bg-neon-cyan/10",
//       features: ["GPS Tracking", "Maintenance", "Fuel Monitor"],
//     },
//     {
//       id: "properties" as AssetType,
//       icon: Home,
//       name: "Properties",
//       count: "89 Locations",
//       color: "neon-purple",
//       description: "Real Estate Portfolio",
//       bgGradient: "from-purple-500/20 to-violet-600/20",
//       iconColor: "text-neon-purple",
//       borderColor: "border-neon-purple/30",
//       hoverBg: "hover:bg-neon-purple/10",
//       features: ["Occupancy", "Revenue", "Leases"],
//     },
//     {
//       id: "laptops" as AssetType,
//       icon: Laptop,
//       name: "Laptops",
//       count: "312 Devices",
//       color: "neon-green",
//       description: "Device Inventory",
//       bgGradient: "from-green-500/20 to-emerald-600/20",
//       iconColor: "text-neon-green",
//       borderColor: "border-neon-green/30",
//       hoverBg: "hover:bg-neon-green/10",
//       features: ["Security", "Performance", "Assignments"],
//     },
//   ];

//   const handleAssetClick = async (assetType: AssetType) => {
//     setSelectedAsset(assetType);
//     setIsLoading(true);
//     setIsAnimating(true);

//     // Simulate loading delay for better UX
//     await new Promise((resolve) => setTimeout(resolve, 800));

//     setIsLoading(false);
//     setShowDashboard(true);
//     setIsAnimating(false);
//   };

//   const handleBackToHero = () => {
//     setIsAnimating(true);
//     setTimeout(() => {
//       setShowDashboard(false);
//       setSelectedAsset(null);
//       setIsAnimating(false);
//     }, 300);
//   };

//   function manageAssets(): void {
//     if (selectedAsset) {
//       navigate(`/${selectedAsset}`);
//     }
//   }

//   return (
//     <section
//       id="hero"
//       className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 pt-32 overflow-hidden"
//     >
//       {/* Enhanced Background */}
//       <div className="absolute inset-0 bg-gradient-to-br from-background/50 via-background/80 to-background opacity-95"></div>
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]"></div>

//       <div
//         className={`relative z-10 max-w-7xl mx-auto transition-all duration-700 ease-in-out ${isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"}`}
//       >
//         {!showDashboard ? (
//           <div className="grid lg:grid-cols-2 gap-16 items-center">
//             {/* Enhanced Left Content */}
//             <div className="text-center lg:text-left space-y-8">
//               <div className="space-y-6">
//                 <div className="relative">
//                   <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold leading-tight">
//                     <span className="text-neon-purple text-neon relative">
//                       All Your Assets.
//                       <Sparkles className="absolute -top-4 -right-4 w-8 h-8 text-neon-cyan animate-pulse" />
//                     </span>
//                     <br />
//                     <span className="bg-gradient-to-r from-white via-neon-cyan to-white bg-clip-text text-transparent">
//                       One Dashboard.
//                     </span>
//                   </h1>
//                 </div>

//                 <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl font-body leading-relaxed">
//                   Manage Cars, Properties & Laptops with secure, scalable asset
//                   tracking.
//                 </p>
//               </div>

//               <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
//                 <Dialog
//                   open={isSignupModalOpen}
//                   onOpenChange={setIsSignupModalOpen}
//                 >
//                   <DialogTrigger asChild>
//                     <Button className="btn-neon text-neon-cyan border-neon-cyan hover:bg-neon-cyan/10 text-lg px-10 py-6 w-full sm:w-auto group">
//                       Get Started Free
//                       <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
//                     </Button>
//                   </DialogTrigger>
//                   <DialogContent className="sm:max-w-md bg-card border-border/40 shadow-2xl">
//                     <DialogHeader>
//                       <DialogTitle className="text-2xl font-heading text-center">
//                         Start Your Free Trial
//                       </DialogTitle>
//                     </DialogHeader>
//                     <div className="space-y-6 py-4">
//                       <div className="space-y-2">
//                         <Label htmlFor="name" className="font-body">
//                           Full Name
//                         </Label>
//                         <Input
//                           id="name"
//                           placeholder="Enter your name"
//                           className="bg-background border-border/50 focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-all"
//                         />
//                       </div>
//                       <div className="space-y-2">
//                         <Label htmlFor="email" className="font-body">
//                           Email Address
//                         </Label>
//                         <Input
//                           id="email"
//                           type="email"
//                           placeholder="Enter your email"
//                           className="bg-background border-border/50 focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-all"
//                         />
//                       </div>
//                       <div className="space-y-2">
//                         <Label htmlFor="password" className="font-body">
//                           Password
//                         </Label>
//                         <Input
//                           id="password"
//                           type="password"
//                           placeholder="Create a password"
//                           className="bg-background border-border/50 focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-all"
//                         />
//                       </div>
//                       <Button className="btn-neon text-neon-cyan border-neon-cyan w-full py-3">
//                         Create Account
//                       </Button>
//                       <p className="text-sm text-muted-foreground text-center font-body">
//                         No credit card required. Cancel anytime.
//                       </p>
//                     </div>
//                   </DialogContent>
//                 </Dialog>

//                 <Button
//                   onClick={() => handleAssetClick("cars")}
//                   variant="outline"
//                   className="btn-neon text-neon-purple border-neon-purple hover:bg-neon-purple/10 text-lg px-10 py-6 w-full sm:w-auto group"
//                 >
//                   <Play className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
//                   Try Live Demo
//                 </Button>
//               </div>
//             </div>

//             {/* Enhanced Asset Preview Cards */}
//             <div className="relative order-first lg:order-last">
//               <div className="card-glow p-8 relative overflow-hidden">
//                 {/* Background decoration */}
//                 <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-neon-cyan/10 to-transparent rounded-full blur-xl"></div>

//                 <div className="relative z-10">
//                   <h3 className="text-xl font-heading font-semibold text-center mb-2 text-neon-cyan">
//                     Interactive Asset Dashboards
//                   </h3>
//                   <p className="text-center text-muted-foreground mb-8 text-sm">
//                     Click any card to explore real-time management tools
//                   </p>

//                   <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-8">
//                     {assetData.map((asset, index) => {
//                       const IconComponent = asset.icon;
//                       return (
//                         <div
//                           key={asset.id}
//                           className={`group relative overflow-hidden rounded-xl p-4 md:p-6 cursor-pointer transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 active:scale-95 ${asset.borderColor} border-2 bg-gradient-to-br ${asset.bgGradient} backdrop-blur-sm min-h-[120px] md:min-h-[160px]`}
//                           onClick={() => handleAssetClick(asset.id)}
//                           style={{
//                             animationDelay: `${index * 100}ms`,
//                             animation: "slideInUp 0.6s ease-out forwards",
//                           }}
//                         >
//                           {/* Glow effect on hover */}
//                           <div
//                             className={`absolute inset-0 bg-gradient-to-br ${asset.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
//                           ></div>

//                           <div className="relative z-10 text-center space-y-4">
//                             <div
//                               className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-br ${asset.bgGradient} border ${asset.borderColor} flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
//                             >
//                               <IconComponent
//                                 className={`w-8 h-8 ${asset.iconColor} group-hover:drop-shadow-lg transition-all duration-300`}
//                               />
//                             </div>

//                             <div>
//                               <h4
//                                 className={`text-lg font-heading font-bold ${asset.iconColor} group-hover:text-shadow-glow transition-all duration-300`}
//                               >
//                                 {asset.name}
//                               </h4>
//                               <p className="text-xs text-muted-foreground font-body mt-1">
//                                 {asset.description}
//                               </p>
//                             </div>

//                             <div className="space-y-2">
//                               <p
//                                 className={`text-sm font-semibold ${asset.iconColor}`}
//                               >
//                                 {asset.count}
//                               </p>

//                               <div className="space-y-1">
//                                 {asset.features.map((feature, idx) => (
//                                   <div
//                                     key={idx}
//                                     className="flex items-center justify-center space-x-1"
//                                   >
//                                     <div
//                                       className={`w-1 h-1 rounded-full ${asset.iconColor} opacity-60`}
//                                     ></div>
//                                     <span className="text-xs text-muted-foreground">
//                                       {feature}
//                                     </span>
//                                   </div>
//                                 ))}
//                               </div>
//                             </div>

//                             {/* Click indicator */}
//                             <div
//                               className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-1 rounded-full ${asset.iconColor} opacity-0 group-hover:opacity-100 transition-all duration-300`}
//                             ></div>
//                           </div>

//                           {/* Ripple effect on click */}
//                           <div className="absolute inset-0 opacity-0 group-active:opacity-100 bg-white/10 transition-opacity duration-150"></div>
//                         </div>
//                       );
//                     })}
//                   </div>

//                   <div className="space-y-4">
//                     <div className="h-2 bg-secondary rounded-full overflow-hidden relative">
//                       <div className="h-full bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-green animate-pulse"></div>
//                       <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
//                     </div>

//                     <p className="text-center text-sm text-muted-foreground font-body">
//                       Real-time Asset Dashboard Preview
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ) : (
//           /* Enhanced Dashboard Demo View */
//           <div className="space-y-8">
//             {/* Header with enhanced styling */}
//             <div className="text-center space-y-6">
//               <div className="relative">
//                 <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold">
//                   <span className="text-neon-cyan text-neon">
//                     Interactive Demo
//                   </span>
//                 </h2>
//                 <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full"></div>
//               </div>

//               <p className="text-xl text-muted-foreground font-body max-w-2xl mx-auto">
//                 Explore our comprehensive asset management dashboards with
//                 real-time data and interactive controls
//               </p>

//               <div className="flex justify-center space-x-4">
//                 <Button
//                   variant="outline"
//                   onClick={handleBackToHero}
//                   className="text-muted-foreground hover:text-foreground group"
//                 >
//                   <ArrowRight className="w-4 h-4 mr-2 rotate-180 group-hover:-translate-x-1 transition-transform" />
//                   Back to Hero
//                 </Button>

//                 <Button
//                   onClick={() => setIsSignupModalOpen(true)}
//                   className="btn-neon text-neon-cyan border-neon-cyan"
//                 >
//                   Get Started Now
//                 </Button>
//               </div>
//             </div>

//             {/* Dashboard Demo with enhanced presentation */}
//             <div className="relative">
//               <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/5 via-transparent to-neon-purple/5 rounded-2xl"></div>
//               <DashboardDemo />
//             </div>

//             {/* Enhanced CTA */}
//             <div className="text-center pt-12 space-y-6">
//               <div className="max-w-2xl mx-auto space-y-4">
//                 <h3 className="text-2xl font-heading font-bold">
//                   Ready to Transform Your Asset Management?
//                 </h3>
//                 <p className="text-muted-foreground">
//                   Join thousands of organizations using our platform to
//                   streamline their operations
//                 </p>
//               </div>

//               <Button
//                 onClick={manageAssets}
//                 disabled={!selectedAsset}
//                 className="btn-neon text-neon-cyan border-neon-cyan text-xl px-16 py-8 group"
//               >
//                 Start Managing Your Assets
//                 <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
//               </Button>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Loading Overlay */}
//       {isLoading && (
//         <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center">
//           <div className="text-center space-y-4">
//             <div className="w-16 h-16 mx-auto">
//               <div className="w-full h-full border-4 border-neon-cyan/30 border-t-neon-cyan rounded-full animate-spin"></div>
//             </div>
//             <p className="text-neon-cyan font-heading font-semibold">
//               Loading {selectedAsset} dashboard...
//             </p>
//           </div>
//         </div>
//       )}

//       <style jsx>{`
//         @keyframes slideInUp {
//           from {
//             transform: translateY(50px);
//             opacity: 0;
//           }
//           to {
//             transform: translateY(0);
//             opacity: 1;
//           }
//         }

//         @keyframes shimmer {
//           0% {
//             transform: translateX(-100%);
//           }
//           100% {
//             transform: translateX(200%);
//           }
//         }

//         .animate-shimmer {
//           animation: shimmer 2s infinite;
//         }

//         .text-shadow-glow {
//           text-shadow: 0 0 20px currentColor;
//         }
//       `}</style>
//     </section>
//   );
// }








































































import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DashboardDemo } from "./dashboard-demo";
import {
  Car,
  Home,
  Laptop,
  Play,
  ArrowRight,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

type AssetType = "cars" | "properties" | "laptops";

export function HeroSection() {
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);
  const [selectedAsset, setSelectedAsset] = useState<AssetType | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const navigate = useNavigate();

  const assetData = [
    {
      id: "cars" as AssetType,
      icon: Car,
      name: "Cars",
      count: "125 Active",
      description: "Fleet Management",
      bgGradient: "from-cyan-500/20 to-blue-600/20",
      iconColor: "text-neon-cyan",
      borderColor: "border-neon-cyan/30",
      features: ["GPS Tracking", "Maintenance", "Fuel Monitor"],
    },
    {
      id: "properties" as AssetType,
      icon: Home,
      name: "Properties",
      count: "89 Locations",
      description: "Real Estate Portfolio",
      bgGradient: "from-purple-500/20 to-violet-600/20",
      iconColor: "text-neon-purple",
      borderColor: "border-neon-purple/30",
      features: ["Occupancy", "Revenue", "Leases"],
    },
    {
      id: "laptops" as AssetType,
      icon: Laptop,
      name: "Laptops",
      count: "312 Devices",
      description: "Device Inventory",
      bgGradient: "from-green-500/20 to-emerald-600/20",
      iconColor: "text-neon-green",
      borderColor: "border-neon-green/30",
      features: ["Security", "Performance", "Assignments"],
    },
  ];

  const handleAssetClick = async (assetType: AssetType) => {
    setSelectedAsset(assetType);
    setIsLoading(true);
    setIsAnimating(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    setIsLoading(false);
    setShowDashboard(true);
    setIsAnimating(false);
  };

  const handleBackToHero = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setShowDashboard(false);
      setSelectedAsset(null);
      setIsAnimating(false);
    }, 300);
  };

  function manageAssets(): void {
    if (selectedAsset) {
      navigate(`/${selectedAsset}`);
    }
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 pt-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-background/50 via-background/80 to-background opacity-95"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]"></div>

      <div
        className={`relative z-10 max-w-7xl mx-auto transition-all duration-700 ease-in-out ${
          isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"
        }`}
      >
        {!showDashboard ? (
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* ✅ Headline, Subheading & CTA first on mobile */}
            <div className="text-center lg:text-left space-y-8 order-1 lg:order-1">
              <div className="space-y-6">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold leading-tight relative">
                  <span className="text-neon-purple text-neon relative">
                    All Your Assets.
                    <Sparkles className="absolute -top-4 -right-4 w-8 h-8 text-neon-cyan animate-pulse" />
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-white via-neon-cyan to-white bg-clip-text text-transparent">
                    One Dashboard.
                  </span>
                </h1>
                <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl font-body leading-relaxed">
                  Interactive Asset Dashboards – Manage Cars, Properties & Laptops with secure, scalable asset tracking.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                <Dialog
                  open={isSignupModalOpen}
                  onOpenChange={setIsSignupModalOpen}
                >
                  <DialogTrigger asChild>
                    <Button className="btn-neon text-neon-cyan border-neon-cyan hover:bg-neon-cyan/10 text-lg px-10 py-6 w-full sm:w-auto group">
                      Get Started Free
                      <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md bg-card border-border/40 shadow-2xl">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-heading text-center">
                        Start Your Free Trial
                      </DialogTitle>
                    </DialogHeader>
                    <div className="space-y-6 py-4">
                      <Input placeholder="Full Name" />
                      <Input type="email" placeholder="Email Address" />
                      <Input type="password" placeholder="Password" />
                      <Button className="btn-neon text-neon-cyan border-neon-cyan w-full py-3">
                        Create Account
                      </Button>
                      <p className="text-sm text-muted-foreground text-center font-body">
                        No credit card required. Cancel anytime.
                      </p>
                    </div>
                  </DialogContent>
                </Dialog>

                <Button
                  onClick={() => handleAssetClick("cars")}
                  variant="outline"
                  className="btn-neon text-neon-purple border-neon-purple hover:bg-neon-purple/10 text-lg px-10 py-6 w-full sm:w-auto group"
                >
                  <Play className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                  Try Live Demo
                </Button>
              </div>
            </div>

            {/* ✅ Cards below on mobile, right on desktop */}
            <div className="relative order-2 lg:order-last mt-10 lg:mt-0">
              <div className="card-glow p-8 relative overflow-hidden">
                <h3 className="text-xl font-heading font-semibold text-center mb-2 text-neon-cyan">
                  Interactive Asset Dashboards
                </h3>
                <p className="text-center text-muted-foreground mb-8 text-sm">
                  Click any card to explore real-time management tools
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-8">
                  {assetData.map((asset, index) => {
                    const IconComponent = asset.icon;
                    return (
                      <div
                        key={asset.id}
                        className={`group relative overflow-hidden rounded-xl p-4 md:p-6 cursor-pointer transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 active:scale-95 ${asset.borderColor} border-2 bg-gradient-to-br ${asset.bgGradient} backdrop-blur-sm`}
                        onClick={() => handleAssetClick(asset.id)}
                        style={{
                          animationDelay: `${index * 100}ms`,
                          animation: "slideInUp 0.6s ease-out forwards",
                        }}
                      >
                        <div className="relative z-10 text-center space-y-4">
                          <div
                            className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-br ${asset.bgGradient} border ${asset.borderColor} flex items-center justify-center`}
                          >
                            <IconComponent className={`w-8 h-8 ${asset.iconColor}`} />
                          </div>
                          <h4 className={`text-lg font-heading font-bold ${asset.iconColor}`}>
                            {asset.name}
                          </h4>
                          <p className="text-xs text-muted-foreground font-body mt-1">
                            {asset.description}
                          </p>
                          <p className={`text-sm font-semibold ${asset.iconColor}`}>
                            {asset.count}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Dashboard Demo View */
          <div className="space-y-8">
            <div className="text-center space-y-6">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-neon-cyan">
                Interactive Demo
              </h2>
              <p className="text-xl text-muted-foreground font-body max-w-2xl mx-auto">
                Explore our comprehensive asset management dashboards with
                real-time data and interactive controls
              </p>
              <div className="flex justify-center space-x-4">
                <Button
                  variant="outline"
                  onClick={handleBackToHero}
                >
                  <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
                  Back to Hero
                </Button>
                <Button
                  onClick={() => setIsSignupModalOpen(true)}
                  className="btn-neon text-neon-cyan border-neon-cyan"
                >
                  Get Started Now
                </Button>
              </div>
            </div>
            <DashboardDemo />
          </div>
        )}
      </div>
    </section>
  );
}
