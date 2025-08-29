import React, { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Laptop,
  User,
  Wifi,
  HardDrive,
  Calendar,
  CheckCircle,
  AlertTriangle,
  Clock,
  Shield,
  Monitor,
  Cpu,
  Battery,
  Search,
} from "lucide-react";

export function LaptopsDashboard() {
  const laptopData = [
    {
      id: "LAP-001",
      model: 'MacBook Pro 16" M3',
      brand: "Apple",
      status: "assigned",
      assignee: "John Smith",
      department: "Engineering",
      storageUsed: 75,
      batteryHealth: 92,
      lastSeen: "2024-01-25 14:30",
      warrantyExpiry: "2026-03-15",
    },
    {
      id: "LAP-002",
      model: "ThinkPad X1 Carbon",
      brand: "Lenovo",
      status: "available",
      assignee: "Unassigned",
      department: "IT Pool",
      storageUsed: 15,
      batteryHealth: 88,
      lastSeen: "2024-01-24 16:45",
      warrantyExpiry: "2025-08-20",
    },
    {
      id: "LAP-003",
      model: "Surface Laptop 5",
      brand: "Microsoft",
      status: "maintenance",
      assignee: "Sarah Johnson",
      department: "Marketing",
      storageUsed: 65,
      batteryHealth: 45,
      lastSeen: "2024-01-20 09:15",
      warrantyExpiry: "2025-12-10",
    },
  ];

  const [searchQuery, setSearchQuery] = useState("");

  const normalize = (str: string) => str.toLowerCase();

  // Filter laptops with priority on ID prefix matches, then ID contains, then other fields
  const filteredLaptops = useMemo(() => {
    if (!searchQuery.trim()) return laptopData;

    const q = normalize(searchQuery);

    const idPrefixMatches = laptopData.filter((laptop) =>
      normalize(laptop.id).startsWith(q)
    );

    const idContainsMatches = laptopData.filter(
      (laptop) =>
        normalize(laptop.id).includes(q) && !normalize(laptop.id).startsWith(q)
    );

    const otherMatches = laptopData.filter(
      (laptop) =>
        !normalize(laptop.id).includes(q) &&
        (normalize(laptop.model).includes(q) ||
          normalize(laptop.brand).includes(q) ||
          normalize(laptop.assignee).includes(q) ||
          normalize(laptop.department).includes(q) ||
          normalize(laptop.status).includes(q))
    );

    const combined = [...idPrefixMatches, ...idContainsMatches, ...otherMatches];

    // Remove duplicates
    return combined.filter(
      (laptop, index, self) =>
        self.findIndex((l) => l.id === laptop.id) === index
    );
  }, [searchQuery, laptopData]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "assigned":
        return "text-neon-green";
      case "available":
        return "text-neon-cyan";
      case "maintenance":
        return "text-neon-orange";
      case "retired":
        return "text-muted-foreground";
      default:
        return "text-muted-foreground";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "assigned":
        return <CheckCircle className="w-4 h-4" />;
      case "available":
        return <Clock className="w-4 h-4" />;
      case "maintenance":
        return <AlertTriangle className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  const getBrandIcon = (brand: string) => {
    // Placeholder for brand icons
    return <Laptop className="w-6 h-6 text-neon-cyan" />;
  };

  const getBatteryHealthColor = (health: number) => {
    if (health >= 80) return "text-neon-green";
    if (health >= 50) return "text-neon-orange";
    return "text-neon-red";
  };

  return (
    <div className="space-y-6">
      {/* Overview Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="card-glow">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Laptop className="w-5 h-5 text-neon-cyan" />
              <div>
                <p className="text-2xl font-heading font-bold text-neon-cyan">
                  312
                </p>
                <p className="text-xs text-muted-foreground">Total Devices</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="card-glow">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-neon-green" />
              <div>
                <p className="text-2xl font-heading font-bold text-neon-green">
                  289
                </p>
                <p className="text-xs text-muted-foreground">Assigned</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="card-glow">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-neon-purple" />
              <div>
                <p className="text-2xl font-heading font-bold text-neon-purple">
                  18
                </p>
                <p className="text-xs text-muted-foreground">Available</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="card-glow">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <AlertTriangle className="w-5 h-5 text-neon-orange" />
              <div>
                <p className="text-2xl font-heading font-bold text-neon-orange">
                  5
                </p>
                <p className="text-xs text-muted-foreground">Maintenance</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Device List with Search */}
      <Card className="card-glow">
        <CardHeader>
          <CardTitle className="font-heading text-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <span>Device Inventory</span>
            <div className="relative w-full max-w-xs">
              <input
                type="text"
                placeholder="Search by ID, model, assignee, status..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg bg-card border border-border text-muted-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-neon-cyan focus:border-neon-cyan transition"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neon-cyan pointer-events-none" />
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {filteredLaptops.length > 0 ? (
              filteredLaptops.map((laptop, index) => (
                <div
                  key={laptop.id}
                  className="p-4 bg-card/30 rounded-lg border border-border/30 hover:bg-neon-cyan/10 transition-colors cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-3">
                    {/* Unique sequential number */}
                    <div className="w-8 text-center font-heading font-semibold text-neon-cyan select-none">
                      {index + 1}
                    </div>

                    <div className="flex items-center space-x-4 flex-1 min-w-0">
                      <div className="w-12 h-12 bg-card/50 rounded-lg flex items-center justify-center flex-shrink-0">
                        {getBrandIcon(laptop.brand)}
                      </div>
                      <div className="min-w-0">
                        <p className="font-heading font-semibold truncate">
                          {laptop.model}
                        </p>
                        <p className="text-sm text-muted-foreground truncate">
                          {laptop.id} • {laptop.brand}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 min-w-[120px] justify-end">
                      <div
                        className={`flex items-center space-x-1 ${getStatusColor(
                          laptop.status
                        )}`}
                      >
                        {getStatusIcon(laptop.status)}
                        <span className="text-sm font-medium capitalize truncate">
                          {laptop.status}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                      <div className="flex items-center space-x-1 mb-1">
                        <User  className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm font-medium">Assignee</span>
                      </div>
                      <p className="text-sm text-muted-foreground truncate">
                        {laptop.assignee}
                      </p>
                      <p className="text-xs text-muted-foreground truncate">
                        {laptop.department}
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center space-x-1 mb-1">
                        <HardDrive className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm font-medium">Storage</span>
                      </div>
                      <Progress value={laptop.storageUsed} className="h-2 mb-1" />
                      <p className="text-xs text-muted-foreground">
                        {laptop.storageUsed}% used
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center space-x-1 mb-1">
                        <Battery className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm font-medium">Battery</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Progress
                          value={laptop.batteryHealth}
                          className="h-2 flex-1"
                        />
                        <span
                          className={`text-xs font-medium ${getBatteryHealthColor(
                            laptop.batteryHealth
                          )}`}
                        >
                          {laptop.batteryHealth}%
                        </span>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center space-x-1 mb-1">
                        <Wifi className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm font-medium">Last Seen</span>
                      </div>
                      <p className="text-xs text-muted-foreground truncate">
                        {laptop.lastSeen}
                      </p>
                      <p className="text-xs text-muted-foreground truncate">
                        Warranty: {laptop.warrantyExpiry}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-muted-foreground py-6">
                No devices found.
              </p>
            )}
          </div>
        </CardContent>
      </Card>

      {/* System Health Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="card-glow">
          <CardHeader>
            <CardTitle className="font-heading text-lg">
              Security Status
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-neon-green" />
                  <span className="text-sm">Antivirus Updated</span>
                </div>
                <Badge className="bg-neon-green/20 text-neon-green border-neon-green/30">
                  98.7%
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Monitor className="w-5 h-5 text-neon-cyan" />
                  <span className="text-sm">OS Updates Current</span>
                </div>
                <Badge className="bg-neon-cyan/20 text-neon-cyan border-neon-cyan/30">
                  94.2%
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Cpu className="w-5 h-5 text-neon-purple" />
                  <span className="text-sm">Software Compliance</span>
                </div>
                <Badge className="bg-neon-purple/20 text-neon-purple border-neon-purple/30">
                  96.8%
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="card-glow">
          <CardHeader>
            <CardTitle className="font-heading text-lg">
              Performance Metrics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-32 bg-card/30 rounded-lg border border-border/30 flex items-center justify-center">
              <div className="text-center space-y-2">
                <Cpu className="w-8 h-8 text-neon-purple mx-auto" />
                <p className="text-sm text-muted-foreground">Performance Chart</p>
                <p className="text-xs text-muted-foreground">
                  Device health metrics
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="card-glow cursor-pointer hover:scale-105 transition-transform">
          <CardContent className="p-4 text-center">
            <Laptop className="w-8 h-8 text-neon-cyan mx-auto mb-2" />
            <p className="font-heading font-semibold">Add Device</p>
            <p className="text-xs text-muted-foreground">Register new laptop</p>
          </CardContent>
        </Card>

        <Card className="card-glow cursor-pointer hover:scale-105 transition-transform">
          <CardContent className="p-4 text-center">
            <User  className="w-8 h-8 text-neon-purple mx-auto mb-2" />
            <p className="font-heading font-semibold">Assign Device</p>
            <p className="text-xs text-muted-foreground">Allocate to employee</p>
          </CardContent>
        </Card>

        <Card className="card-glow cursor-pointer hover:scale-105 transition-transform">
          <CardContent className="p-4 text-center">
            <Shield className="w-8 h-8 text-neon-green mx-auto mb-2" />
            <p className="font-heading font-semibold">Security Scan</p>
            <p className="text-xs text-muted-foreground">Run diagnostics</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
