"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Users, Search, Filter, Plus } from "lucide-react";

const patients = [
  {
    id: "P001",
    name: "Adebayo Johnson",
    age: 45,
    gender: "Male",
    plan: "Family Health Plan",
    lastVisit: "2024-01-15",
    status: "Active",
    avatar: "/placeholder-avatar.jpg"
  },
  {
    id: "P002",
    name: "Fatima Ibrahim",
    age: 32,
    gender: "Female",
    plan: "Basic Health Plan",
    lastVisit: "2024-01-10",
    status: "Active",
    avatar: "/placeholder-avatar.jpg"
  },
  {
    id: "P003",
    name: "Chinedu Okafor",
    age: 28,
    gender: "Male",
    plan: "Premium Health Plan",
    lastVisit: "2024-01-08",
    status: "Inactive",
    avatar: "/placeholder-avatar.jpg"
  }
];

export function MyPatientsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">My Patients</h1>
          <p className="text-muted-foreground">Manage your patient records and appointments</p>
        </div>
        <Button className="bg-purple-600 hover:bg-purple-700 rounded-md">
          <Plus className="h-4 w-4 mr-2" />
          Add Patient
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="rounded-xl border-l-4 border-l-blue-500">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Patients
            </CardTitle>
            <Users className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">127</div>
          </CardContent>
        </Card>
        
        <Card className="rounded-xl border-l-4 border-l-green-500">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Active Patients
            </CardTitle>
            <Users className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">98</div>
          </CardContent>
        </Card>
        
        <Card className="rounded-xl border-l-4 border-l-yellow-500">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              New This Month
            </CardTitle>
            <Users className="h-4 w-4 text-yellow-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
          </CardContent>
        </Card>
        
        <Card className="rounded-xl border-l-4 border-l-red-500">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Pending Reviews
            </CardTitle>
            <Users className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filter */}
      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search patients..."
            className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <Button variant="outline" className="rounded-md">
          <Filter className="h-4 w-4 mr-2" />
          Filter
        </Button>
      </div>

      {/* Patients Table */}
      <Card className="rounded-xl">
        <CardHeader>
          <CardTitle>Patient List</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {patients.map((patient) => (
              <div key={patient.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                <div className="flex items-center gap-4">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={patient.avatar} />
                    <AvatarFallback>{patient.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-medium">{patient.name}</h3>
                    <p className="text-sm text-muted-foreground">{patient.id} • {patient.age} years • {patient.gender}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="text-sm font-medium">{patient.plan}</p>
                    <p className="text-xs text-muted-foreground">Last visit: {patient.lastVisit}</p>
                  </div>
                  <Badge variant={patient.status === 'Active' ? 'default' : 'secondary'}>
                    {patient.status}
                  </Badge>
                  <Button variant="outline" size="sm" className="rounded-md">
                    View
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}