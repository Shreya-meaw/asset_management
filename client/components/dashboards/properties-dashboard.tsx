import React, { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Home,
  MapPin,
  DollarSign,
  Users,
  Calendar,
  TrendingUp,
  Building,
  Key,
  Wrench,
  FileText,
  Search,
} from "lucide-react";

export function PropertiesDashboard() {
  const propertyData = [
    {
      id: "PROP-001",
      name: "Downtown Office Complex",
      type: "Commercial",
      location: "New York, NY",
      status: "occupied",
      occupancy: 95,
      monthlyRevenue: "$45,000",
      tenants: 12,
      nextInspection: "2024-02-15",
    },
    {
      id: "PROP-002",
      name: "Riverside Apartments",
      type: "Residential",
      location: "San Francisco, CA",
      status: "available",
      occupancy: 78,
      monthlyRevenue: "$32,000",
      tenants: 24,
      nextInspection: "2024-02-20",
    },
    {
      id: "PROP-003",
      name: "Tech Hub Warehouse",
      type: "Industrial",
      location: "Austin, TX",
      status: "maintenance",
      occupancy: 100,
      monthlyRevenue: "$28,000",
      tenants: 3,
      nextInspection: "2024-02-10",
    },
  ];

  const [searchQuery, setSearchQuery] = useState("");

  const normalize = (str: string) => str.toLowerCase();

  const filteredProperties = useMemo(() => {
    if (!searchQuery.trim()) return propertyData;

    const q = normalize(searchQuery);

    const idPrefixMatches = propertyData.filter((property) =>
      normalize(property.id).startsWith(q)
    );

    const idContainsMatches = propertyData.filter(
      (property) =>
        normalize(property.id).includes(q) && !normalize(property.id).startsWith(q)
    );

    const otherMatches = propertyData.filter(
      (property) =>
        !normalize(property.id).includes(q) &&
        (normalize(property.name).includes(q) ||
          normalize(property.type).includes(q) ||
          normalize(property.location).includes(q) ||
          normalize(property.status).includes(q))
    );

    const combined = [...idPrefixMatches, ...idContainsMatches, ...otherMatches];
    return combined.filter(
      (property, index, self) =>
        self.findIndex((p) => p.id === property.id) === index
    );
  }, [searchQuery, propertyData]);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "occupied":
        return (
          <Badge className="bg-neon-green/20 text-neon-green border-neon-green/30">
            Occupied
          </Badge>
        );
      case "available":
        return (
          <Badge className="bg-neon-cyan/20 text-neon-cyan border-neon-cyan/30">
            Available
          </Badge>
        );
      case "maintenance":
        return (
          <Badge className="bg-neon-orange/20 text-neon-orange border-neon-orange/30">
            Maintenance
          </Badge>
        );
      default:
        return <Badge variant="secondary">Unknown</Badge>;
    }
  };

  const getPropertyIcon = (type: string) => {
    switch (type) {
      case "Commercial":
        return <Building className="w-6 h-6 text-neon-cyan" />;
      case "Residential":
        return <Home className="w-6 h-6 text-neon-purple" />;
      case "Industrial":
        return <Wrench className="w-6 h-6 text-neon-orange" />;
      default:
        return <Home className="w-6 h-6 text-neon-cyan" />;
    }
  };

  return (
    <div className="space-y-6 px-2 sm:px-4 lg:px-6 py-2 sm:py-4 lg:py-6">
      {/* Overview Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="card-glow">
          <CardContent className="p-4 flex items-center space-x-2">
            <Home className="w-5 h-5 text-neon-cyan" />
            <div>
              <p className="text-2xl font-heading font-bold text-neon-cyan">89</p>
              <p className="text-xs text-muted-foreground">Total Properties</p>
            </div>
          </CardContent>
        </Card>
        <Card className="card-glow">
          <CardContent className="p-4 flex items-center space-x-2">
            <Users className="w-5 h-5 text-neon-green" />
            <div>
              <p className="text-2xl font-heading font-bold text-neon-green">267</p>
              <p className="text-xs text-muted-foreground">Active Tenants</p>
            </div>
          </CardContent>
        </Card>
        <Card className="card-glow">
          <CardContent className="p-4 flex items-center space-x-2">
            <TrendingUp className="w-5 h-5 text-neon-purple" />
            <div>
              <p className="text-2xl font-heading font-bold text-neon-purple">92%</p>
              <p className="text-xs text-muted-foreground">Occupancy Rate</p>
            </div>
          </CardContent>
        </Card>
        <Card className="card-glow">
          <CardContent className="p-4 flex items-center space-x-2">
            <DollarSign className="w-5 h-5 text-neon-green" />
            <div>
              <p className="text-2xl font-heading font-bold text-neon-green">$2.4M</p>
              <p className="text-xs text-muted-foreground">Monthly Revenue</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Property List with Search */}
      <Card className="card-glow">
        <CardHeader>
          <CardTitle className="font-heading text-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <span>Property Portfolio</span>
            <div className="relative w-full md:max-w-xs">
              <input
                type="text"
                placeholder="Search by ID, name, type, location, status..."
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
            {filteredProperties.length > 0 ? (
              filteredProperties.map((property, index) => (
                <div
                  key={property.id}
                  className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 bg-card/30 rounded-lg border border-border/30 hover:bg-neon-cyan/10 transition-colors cursor-pointer gap-4"
                >
                  {/* Sequential number (hidden on mobile) */}
                  <div className="w-8 text-center font-heading font-semibold text-neon-cyan select-none hidden sm:block">
                    {index + 1}
                  </div>

                  {/* Left info */}
                  <div className="flex items-center space-x-4 flex-1 min-w-0">
                    <div className="w-12 h-12 bg-card/50 rounded-lg flex items-center justify-center flex-shrink-0">
                      {getPropertyIcon(property.type)}
                    </div>
                    <div className="min-w-0">
                      <p className="font-heading font-semibold truncate">{property.name}</p>
                      <p className="text-sm text-muted-foreground truncate">
                        {property.id} • {property.type}
                      </p>
                      <div className="flex items-center space-x-1 mt-1">
                        <MapPin className="w-3 h-3 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground truncate">
                          {property.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right info grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full sm:w-auto">
                    <div className="text-center">
                      {getStatusBadge(property.status)}
                      <p className="text-xs text-muted-foreground mt-1">
                        {property.tenants} tenants
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm font-medium">Occupancy</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <Progress value={property.occupancy} className="h-2 flex-1" />
                        <span className="text-xs text-muted-foreground">
                          {property.occupancy}%
                        </span>
                      </div>
                    </div>
                    <div className="text-center">
                      <p className="text-lg font-heading font-bold text-neon-green truncate">
                        {property.monthlyRevenue}
                      </p>
                      <p className="text-xs text-muted-foreground">Monthly Revenue</p>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center space-x-1 text-muted-foreground justify-center">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm truncate">{property.nextInspection}</span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">Next Inspection</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-muted-foreground py-6">No properties found.</p>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Revenue Chart */}
      <Card className="card-glow">
        <CardHeader>
          <CardTitle className="font-heading text-lg">Revenue Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-48 sm:h-64 bg-card/30 rounded-lg border border-border/30 flex items-center justify-center">
            <div className="text-center space-y-2">
              <TrendingUp className="w-12 h-12 text-neon-purple mx-auto" />
              <p className="text-muted-foreground">Revenue Chart</p>
              <p className="text-xs text-muted-foreground">
                Monthly property income trends
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <Card className="card-glow cursor-pointer hover:scale-105 transition-transform">
          <CardContent className="p-4 text-center">
            <Home className="w-8 h-8 text-neon-cyan mx-auto mb-2" />
            <p className="font-heading font-semibold">Add Property</p>
            <p className="text-xs text-muted-foreground">Register new property</p>
          </CardContent>
        </Card>
        <Card className="card-glow cursor-pointer hover:scale-105 transition-transform">
          <CardContent className="p-4 text-center">
            <Key className="w-8 h-8 text-neon-purple mx-auto mb-2" />
            <p className="font-heading font-semibold">Lease Management</p>
            <p className="text-xs text-muted-foreground">Manage tenant leases</p>
          </CardContent>
        </Card>
        <Card className="card-glow cursor-pointer hover:scale-105 transition-transform">
          <CardContent className="p-4 text-center">
            <FileText className="w-8 h-8 text-neon-green mx-auto mb-2" />
            <p className="font-heading font-semibold">Generate Report</p>
            <p className="text-xs text-muted-foreground">Property analytics</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
