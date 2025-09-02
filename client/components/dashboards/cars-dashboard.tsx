
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Car,
  MapPin,
  Fuel,
  Calendar,
  AlertTriangle,
  CheckCircle,
  Clock,
  DollarSign,
  Search,
} from "lucide-react";

export function CarsDashboard() {
  const carData = [
    {
      id: "CAR-001",
      model: "Toyota Camry 2023",
      status: "active",
      location: "Downtown Office",
      fuelLevel: 85,
      lastService: "2024-01-15",
      mileage: "15,234 km",
      driver: "John Smith",
    },
    {
      id: "CAR-002",
      model: "Honda Civic 2022",
      status: "maintenance",
      location: "Service Center",
      fuelLevel: 30,
      lastService: "2024-01-20",
      mileage: "22,456 km",
      driver: "Unassigned",
    },
    {
      id: "CAR-003",
      model: "BMW X5 2023",
      status: "active",
      location: "Airport",
      fuelLevel: 92,
      lastService: "2024-01-10",
      mileage: "8,123 km",
      driver: "Sarah Johnson",
    },
  ];

  const [searchQuery, setSearchQuery] = useState("");

  const normalize = (str: string) => str.toLowerCase();

  const filteredCars = React.useMemo(() => {
    if (!searchQuery.trim()) return carData;
    const q = normalize(searchQuery);

    const idPrefixMatches = carData.filter((car) =>
      normalize(car.id).startsWith(q)
    );
    const idContainsMatches = carData.filter(
      (car) =>
        normalize(car.id).includes(q) && !normalize(car.id).startsWith(q)
    );
    const otherMatches = carData.filter(
      (car) =>
        !normalize(car.id).includes(q) &&
        (normalize(car.model).includes(q) ||
          normalize(car.driver).includes(q) ||
          normalize(car.status).includes(q) ||
          normalize(car.location).includes(q))
    );

    const combined = [...idPrefixMatches, ...idContainsMatches, ...otherMatches];
    return combined.filter(
      (car, index, self) => self.findIndex((c) => c.id === car.id) === index
    );
  }, [searchQuery, carData]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "text-neon-green";
      case "maintenance":
        return "text-neon-orange";
      case "inactive":
        return "text-muted-foreground";
      default:
        return "text-muted-foreground";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "active":
        return <CheckCircle className="w-4 h-4" />;
      case "maintenance":
        return <AlertTriangle className="w-4 h-4" />;
      case "inactive":
        return <Clock className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  return (
    <div className="space-y-6 px-2 sm:px-4 lg:px-6 py-2 sm:py-4 lg:py-6">
      {/* Overview Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="card-glow">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Car className="w-5 h-5 text-neon-cyan" />
              <div>
                <p className="text-2xl font-heading font-bold text-neon-cyan">125</p>
                <p className="text-xs text-muted-foreground">Total Vehicles</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="card-glow">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-neon-green" />
              <div>
                <p className="text-2xl font-heading font-bold text-neon-green">98</p>
                <p className="text-xs text-muted-foreground">Active</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="card-glow">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <AlertTriangle className="w-5 h-5 text-neon-orange" />
              <div>
                <p className="text-2xl font-heading font-bold text-neon-orange">12</p>
                <p className="text-xs text-muted-foreground">Maintenance</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="card-glow">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <DollarSign className="w-5 h-5 text-neon-purple" />
              <div>
                <p className="text-2xl font-heading font-bold text-neon-purple">$48K</p>
                <p className="text-xs text-muted-foreground">Monthly Cost</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Vehicle List with Search */}
      <Card className="card-glow">
        <CardHeader>
          <CardTitle className="font-heading text-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <span>Recent Vehicles</span>
            <div className="relative w-full md:max-w-xs">
              <input
                type="text"
                placeholder="Search vehicles by ID, model, driver..."
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
            {filteredCars.length > 0 ? (
              filteredCars.map((car, index) => (
                <div
                  key={car.id}
                  className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 bg-card/30 rounded-lg border border-border/30 hover:bg-neon-cyan/10 transition-colors cursor-pointer gap-4"
                >
                  {/* Sequential Number */}
                  <div className="w-8 text-center font-heading font-semibold text-neon-cyan select-none hidden sm:block">
                    {index + 1}
                  </div>

                  {/* Car Info */}
                  <div className="flex items-center space-x-4 flex-1 min-w-0">
                    <div className="w-12 h-12 bg-neon-cyan/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Car className="w-6 h-6 text-neon-cyan" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-heading font-semibold truncate">{car.model}</p>
                      <p className="text-sm text-muted-foreground truncate">
                        {car.id} • {car.mileage}
                      </p>
                    </div>
                  </div>

                  {/* Status, Driver, Location, Fuel */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 w-full sm:w-auto">
                    <div className="flex items-center justify-between sm:flex-col sm:items-center sm:min-w-[80px]">
                      <div
                        className={`flex items-center space-x-1 ${getStatusColor(
                          car.status
                        )}`}
                      >
                        {getStatusIcon(car.status)}
                        <span className="text-sm font-medium capitalize">{car.status}</span>
                      </div>
                      <p className="text-xs text-muted-foreground sm:mt-1">{car.driver}</p>
                    </div>

                    <div className="flex items-center justify-between sm:flex-col sm:items-center sm:min-w-[100px] mt-2 sm:mt-0">
                      <MapPin className="w-4 h-4 text-muted-foreground sm:mb-1" />
                      <span className="text-sm truncate">{car.location}</span>
                    </div>

                    <div className="flex items-center justify-between sm:flex-col sm:items-center sm:min-w-[80px] mt-2 sm:mt-0">
                      <Fuel className="w-4 h-4 text-muted-foreground sm:mb-1" />
                      <div className="flex-1 min-w-0">
                        <Progress value={car.fuelLevel} className="h-2" />
                        <p className="text-xs text-muted-foreground mt-1">{car.fuelLevel}%</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-muted-foreground py-6">No vehicles found.</p>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <Card className="card-hover-enhance cursor-pointer group">
          <CardContent className="p-6 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-12 h-12 bg-neon-cyan/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 mx-auto bg-neon-cyan/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <Car className="w-8 h-8 text-neon-cyan group-hover:drop-shadow-lg" />
              </div>
              <p className="font-heading font-semibold text-neon-cyan mb-2 group-hover:text-glow transition-all">
                Add New Vehicle
              </p>
              <p className="text-xs text-muted-foreground">Register a new car to your fleet</p>
              <div className="absolute bottom-0 left-0 h-1 bg-neon-cyan w-0 group-hover:w-full transition-all duration-300"></div>
            </div>
          </CardContent>
        </Card>

        <Card className="card-hover-enhance cursor-pointer group">
          <CardContent className="p-6 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-12 h-12 bg-neon-purple/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 mx-auto bg-neon-purple/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <Calendar className="w-8 h-8 text-neon-purple group-hover:drop-shadow-lg" />
              </div>
              <p className="font-heading font-semibold text-neon-purple mb-2 group-hover:text-glow transition-all">
                Schedule Service
              </p>
              <p className="text-xs text-muted-foreground">Book maintenance appointments</p>
              <div className="absolute bottom-0 left-0 h-1 bg-neon-purple w-0 group-hover:w-full transition-all duration-300"></div>
            </div>
          </CardContent>
        </Card>

        <Card className="card-hover-enhance cursor-pointer group">
          <CardContent className="p-6 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-12 h-12 bg-neon-green/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 mx-auto bg-neon-green/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <MapPin className="w-8 h-8 text-neon-green group-hover:drop-shadow-lg" />
              </div>
              <p className="font-heading font-semibold text-neon-green mb-2 group-hover:text-glow transition-all">
                Track Location
              </p>
              <p className="text-xs text-muted-foreground">Real-time GPS tracking</p>
              <div className="absolute bottom-0 left-0 h-1 bg-neon-green w-0 group-hover:w-full transition-all duration-300"></div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

