"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Search, Filter, Plus, DollarSign, Clock, CheckCircle, AlertCircle } from "lucide-react";

const claims = [
  {
    id: "CLM-001234",
    patientName: "Adebayo Johnson",
    amount: "₦45,000",
    date: "2024-01-18",
    type: "Medical Consultation",
    status: "Pending",
    description: "General consultation and medication"
  },
  {
    id: "CLM-001235",
    patientName: "Fatima Ibrahim",
    amount: "₦120,000",
    date: "2024-01-17",
    type: "Laboratory Tests",
    status: "Approved",
    description: "Blood work and diagnostic tests"
  },
  {
    id: "CLM-001236",
    patientName: "Chinedu Okafor",
    amount: "₦25,000",
    date: "2024-01-16",
    type: "Prescription",
    status: "Rejected",
    description: "Medication refill"
  }
];

export function ClaimsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Claims Management</h1>
          <p className="text-muted-foreground">Submit and track insurance claims for your patients</p>
        </div>
        <Button className="bg-purple-600 hover:bg-purple-700 rounded-md">
          <Plus className="h-4 w-4 mr-2" />
          Submit Claim
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="rounded-xl border-l-4 border-l-blue-500">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Claims
            </CardTitle>
            <FileText className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156</div>
          </CardContent>
        </Card>
        
        <Card className="rounded-xl border-l-4 border-l-yellow-500">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Pending
            </CardTitle>
            <Clock className="h-4 w-4 text-yellow-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">23</div>
          </CardContent>
        </Card>
        
        <Card className="rounded-xl border-l-4 border-l-green-500">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Approved
            </CardTitle>
            <CheckCircle className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">128</div>
          </CardContent>
        </Card>
        
        <Card className="rounded-xl border-l-4 border-l-red-500">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Value
            </CardTitle>
            <DollarSign className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₦2.4M</div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filter */}
      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search claims..."
            className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <Button variant="outline" className="rounded-md">
          <Filter className="h-4 w-4 mr-2" />
          Filter
        </Button>
      </div>

      {/* Claims Table */}
      <Card className="rounded-xl">
        <CardHeader>
          <CardTitle>Recent Claims</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {claims.map((claim) => (
              <div key={claim.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <FileText className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">{claim.id}</h3>
                    <p className="text-sm text-muted-foreground">{claim.patientName} • {claim.type}</p>
                    <p className="text-xs text-muted-foreground">{claim.description}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="text-sm font-medium">{claim.amount}</p>
                    <p className="text-xs text-muted-foreground">{claim.date}</p>
                  </div>
                  <Badge 
                    variant={
                      claim.status === 'Approved' ? 'default' : 
                      claim.status === 'Pending' ? 'secondary' : 
                      'destructive'
                    }
                    className="flex items-center gap-1"
                  >
                    {claim.status === 'Approved' && <CheckCircle className="h-3 w-3" />}
                    {claim.status === 'Pending' && <Clock className="h-3 w-3" />}
                    {claim.status === 'Rejected' && <AlertCircle className="h-3 w-3" />}
                    {claim.status}
                  </Badge>
                  <Button variant="outline" size="sm" className="rounded-md">
                    View Details
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