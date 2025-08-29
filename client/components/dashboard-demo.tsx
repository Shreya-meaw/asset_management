import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CarsDashboard } from "./dashboards/cars-dashboard";
import { PropertiesDashboard } from "./dashboards/properties-dashboard";
import { LaptopsDashboard } from "./dashboards/laptops-dashboard";
import { Car, Home, Laptop, TrendingUp, Users, Activity } from "lucide-react";

type AssetType = "cars" | "properties" | "laptops";

export function DashboardDemo() {
  const [selectedAsset, setSelectedAsset] = useState<AssetType>("cars");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const assetOptions = [
    {
      id: "cars" as AssetType,
      icon: <Car className="w-6 h-6" />,
      name: "Cars",
      count: "125 Active",
      color: "neon-cyan",
      description: "Fleet Management",
      stats: { active: 125, total: 140, efficiency: "94%" },
      bgGradient: "from-cyan-500/10 to-blue-500/10",
    },
    {
      id: "properties" as AssetType,
      icon: <Home className="w-6 h-6" />,
      name: "Properties",
      count: "89 Locations",
      color: "neon-purple",
      description: "Real Estate Portfolio",
      stats: { active: 89, total: 95, efficiency: "92%" },
      bgGradient: "from-purple-500/10 to-violet-500/10",
    },
    {
      id: "laptops" as AssetType,
      icon: <Laptop className="w-6 h-6" />,
      name: "Laptops",
      count: "312 Devices",
      color: "neon-green",
      description: "Device Inventory",
      stats: { active: 312, total: 350, efficiency: "89%" },
      bgGradient: "from-green-500/10 to-emerald-500/10",
    },
  ];

  const handleAssetChange = (assetId: AssetType) => {
    if (assetId === selectedAsset) return;

    setIsTransitioning(true);

    setTimeout(() => {
      setSelectedAsset(assetId);
      setIsTransitioning(false);
    }, 200);
  };

  const renderDashboard = () => {
    switch (selectedAsset) {
      case "cars":
        return <CarsDashboard />;
      case "properties":
        return <PropertiesDashboard />;
      case "laptops":
        return <LaptopsDashboard />;
      default:
        return <CarsDashboard />;
    }
  };

  const selectedAssetData = assetOptions.find(
    (asset) => asset.id === selectedAsset,
  );

  return (
    <div className="space-y-10">
      {/* Enhanced Asset Type Selector */}
      <div className="relative">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-heading font-bold mb-2">
            Choose Your Dashboard
          </h3>
          <p className="text-muted-foreground">
            Switch between different asset types to explore management
            capabilities
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
          {assetOptions.map((asset, index) => {
            const isSelected = selectedAsset === asset.id;
            return (
              <Card
                key={asset.id}
                className={`group card-glow cursor-pointer transition-all duration-500 transform hover:scale-105 active:scale-95 min-h-[140px] md:min-h-[180px] ${
                  isSelected
                    ? `ring-2 ring-current scale-105 shadow-2xl bg-gradient-to-br ${asset.bgGradient}`
                    : "hover:scale-102 hover:shadow-xl"
                }`}
                onClick={() => handleAssetChange(asset.id)}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <CardContent className="p-6 relative overflow-hidden">
                  {/* Background decoration */}
                  {isSelected && (
                    <div
                      className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${asset.bgGradient} rounded-full blur-xl opacity-50`}
                    ></div>
                  )}

                  <div className="relative z-10 space-y-4">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${asset.bgGradient} border border-${asset.color}/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      >
                        <div className={`text-${asset.color}`}>
                          {asset.icon}
                        </div>
                      </div>

                      {isSelected && (
                        <Badge
                          className={`bg-${asset.color}/20 text-${asset.color} border-${asset.color}/30 animate-pulse`}
                        >
                          Active
                        </Badge>
                      )}
                    </div>

                    {/* Content */}
                    <div className="space-y-2">
                      <h4
                        className={`text-lg font-heading font-bold text-${asset.color} group-hover:text-glow transition-all duration-300`}
                      >
                        {asset.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {asset.description}
                      </p>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-2 pt-2 border-t border-border/50">
                      <div className="text-center">
                        <div
                          className={`text-sm font-semibold text-${asset.color}`}
                        >
                          {asset.stats.active}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Active
                        </div>
                      </div>
                      <div className="text-center">
                        <div
                          className={`text-sm font-semibold text-${asset.color}`}
                        >
                          {asset.stats.total}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Total
                        </div>
                      </div>
                      <div className="text-center">
                        <div
                          className={`text-sm font-semibold text-${asset.color}`}
                        >
                          {asset.stats.efficiency}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Rate
                        </div>
                      </div>
                    </div>

                    {/* Selection indicator */}
                    <div
                      className={`absolute bottom-0 left-0 h-1 bg-${asset.color} transition-all duration-300 ${
                        isSelected ? "w-full" : "w-0 group-hover:w-1/2"
                      }`}
                    ></div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Dashboard Header */}
      {selectedAssetData && (
        <div className="text-center space-y-4 py-8 border-y border-border/30">
          <div className="flex items-center justify-center space-x-3">
            <div
              className={`w-10 h-10 rounded-full bg-${selectedAssetData.color}/20 border border-${selectedAssetData.color}/30 flex items-center justify-center`}
            >
              {selectedAssetData.icon}
            </div>
            <h3
              className={`text-2xl font-heading font-bold text-${selectedAssetData.color}`}
            >
              {selectedAssetData.name} Management Dashboard
            </h3>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive overview and management tools for your{" "}
            {selectedAssetData.name.toLowerCase()} with real-time monitoring and
            analytics.
          </p>
        </div>
      )}

      {/* Selected Dashboard with Enhanced Presentation */}
      <div
        className={`transform transition-all duration-500 ease-in-out ${
          isTransitioning ? "opacity-0 scale-95" : "opacity-100 scale-100"
        }`}
      >
        <div className="relative">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background rounded-2xl"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent rounded-2xl"></div>

          {/* Dashboard content */}
          <div className="relative z-10 p-8 rounded-2xl border border-border/50 backdrop-blur-sm">
            {renderDashboard()}
          </div>
        </div>
      </div>

      {/* Quick Stats Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
        <Card className="card-glow">
          <CardContent className="p-6 text-center">
            <TrendingUp className="w-8 h-8 text-neon-green mx-auto mb-3" />
            <h4 className="font-heading font-semibold text-neon-green">
              Performance
            </h4>
            <p className="text-2xl font-bold mt-2">98.5%</p>
            <p className="text-sm text-muted-foreground">Overall Efficiency</p>
          </CardContent>
        </Card>

        <Card className="card-glow">
          <CardContent className="p-6 text-center">
            <Users className="w-8 h-8 text-neon-cyan mx-auto mb-3" />
            <h4 className="font-heading font-semibold text-neon-cyan">Users</h4>
            <p className="text-2xl font-bold mt-2">2,847</p>
            <p className="text-sm text-muted-foreground">Active Users</p>
          </CardContent>
        </Card>

        <Card className="card-glow">
          <CardContent className="p-6 text-center">
            <Activity className="w-8 h-8 text-neon-purple mx-auto mb-3" />
            <h4 className="font-heading font-semibold text-neon-purple">
              Uptime
            </h4>
            <p className="text-2xl font-bold mt-2">99.9%</p>
            <p className="text-sm text-muted-foreground">System Reliability</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
