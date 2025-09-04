import React, { useState, useEffect } from "react";
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
  Loader2,
} from "lucide-react";
import { AddAssetModal } from "../AddAssetModal";
import { fetchCars, addCar, fetchLaptops, fetchProperties, addProperty } from "@/services/assetsService";

export function PropertiesDashboard() {
  const [carData, setCarData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);
  const [addSuccess, setAddSuccess] = useState(false);

  useEffect(() => {
    async function getCars() {
      setLoading(true);
      try {
        const data = await fetchProperties();
        setCarData(data);
      } catch (err) {
        console.error("Error fetching cars:", err);
      } finally {
        setLoading(false);
      }
    }
    getCars();
  }, []);

  const handleAddProperty = async (data: any) => {
    try {
      const newCar = await addProperty(data);
      setCarData((prev) => [...prev, newCar]);
      setAddSuccess(true);
      setTimeout(() => setAddSuccess(false), 3000); // Hide after 3 seconds
    } catch (err) {
      console.error("Error adding car:", err);
    }
  };
  const normalize = (str: any) => (typeof str === "string" ? str.toLowerCase() : "");

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
        normalize(car.modelNo).includes(q) ||
        (normalize(car.name).includes(q) ||
          normalize(car.location).includes(q))
    );

    const combined = [...idPrefixMatches, ...idContainsMatches, ...otherMatches];
    return combined.filter(
      (car, index, self) => self.findIndex((c) => c.id === car.id) === index
    );
  }, [searchQuery, carData]);

  const getStatusColor = (status: number) => {
    switch (status) {
      case 2:
        return "text-neon-green";
      case 1:
        return "text-neon-orange";
      case 0:
        return "text-muted-foreground";
      default:
        return "text-muted-foreground";
    }
  };

  const getStatusIcon = (status: number) => {
    switch (status) {
      case 2:
        return <CheckCircle className="w-4 h-4" />;
      case 1:
        return <AlertTriangle className="w-4 h-4" />;
      case 0:
        return <Clock className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  const getStatusName = (status: number) => {
    switch (status) {
      case 2:
        return "Active";
      case 1:
        return "Maintenance";
      case 0:
        return "Inactive";
      default:
        return "Inactive";
    }
  };

  return (
    <div className="space-y-6 px-2 sm:px-4 lg:px-6 py-2 sm:py-4 lg:py-6">
      {addSuccess && (
        <div className="fixed top-6 right-6 bg-green-600 text-white px-6 py-3 rounded shadow-lg z-50">
          Property added successfully!
        </div>
      )}
      {/* Overview Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="card-glow">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Car className="w-5 h-5 text-neon-cyan" />
              <div>
                <p className="text-2xl font-heading font-bold text-neon-cyan">{carData.length}</p>
                <p className="text-xs text-muted-foreground">Total Properties</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="card-glow">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-neon-green" />
              <div>
                <p className="text-2xl font-heading font-bold text-neon-green">{carData.filter(car => car.status === 2).length}</p>
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
                <p className="text-2xl font-heading font-bold text-neon-orange">{carData.filter(car => car.status === 1).length}</p>
                <p className="text-xs text-muted-foreground">Maintenance</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="card-glow">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-muted-foreground" />
              <div>
                <p className="text-2xl font-heading font-bold text-muted-foreground">
                  {carData.filter(car => car.status === 0).length}
                </p>
                <p className="text-xs text-muted-foreground">Inactive</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Vehicle List with Search */}
      <Card className="card-glow">
        <CardHeader>
          <CardTitle className="font-heading text-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <span>Recent Properties</span>
            <div className="relative w-full md:max-w-xs">
              <input
                type="text"
                placeholder="Search Properties..."
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
            {loading ? (
              <div className="flex justify-center items-center py-12">
                <Loader2 className="animate-spin w-10 h-10 text-neon-cyan" />
              </div>
            ) : filteredCars.length > 0 ? (
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
                      <p className="font-heading font-semibold truncate">{car.name}</p>
                      <p className="text-sm text-muted-foreground truncate">
                        {car.modelNo}
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
                        <span className="text-sm font-medium capitalize">{getStatusName(car.status)}</span>
                      </div>
                      {/* <p className="text-xs text-muted-foreground sm:mt-1">{car.driver}</p> */}
                    </div>

                    <div className="flex items-center justify-between sm:flex-col sm:items-center sm:min-w-[100px] mt-2 sm:mt-0">
                      <MapPin className="w-4 h-4 text-muted-foreground sm:mb-1" />
                      <span className="text-sm truncate">{car.location}</span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-muted-foreground py-6">No Properties found.</p>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <Card className="card-hover-enhance cursor-pointer group">
          <CardContent onClick={() => setShowAddModal(true)} className="p-6 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-12 h-12 bg-neon-cyan/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 mx-auto bg-neon-cyan/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <Car className="w-8 h-8 text-neon-cyan group-hover:drop-shadow-lg" />
              </div>
              <p className="font-heading font-semibold text-neon-cyan mb-2 group-hover:text-glow transition-all">
                Add New Property
              </p>
              <p className="text-xs text-muted-foreground">Register a new car to your fleet</p>
              <div className="absolute bottom-0 left-0 h-1 bg-neon-cyan w-0 group-hover:w-full transition-all duration-300"></div>
            </div>
          </CardContent>
        </Card>

        
      <AddAssetModal
        open={showAddModal}
        onClose={() => setShowAddModal(false)}
        assetType="property"
        onAdd={handleAddProperty}
        header="Add New Property"
      />


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

