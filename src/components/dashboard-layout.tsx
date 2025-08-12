"use client";

import { useState } from "react";
import Image from "next/image";
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  Bell,
  Users,
  Shield,
  FileText,
  AlertCircle,
  Settings,
  CreditCard,
  ClipboardList,
  CheckCircle,
  LogOut,
  Globe,
  User,
  HelpCircle,
  Stethoscope,
  FileCheck,
  UserCheck,
  LayoutDashboard,
  Calendar,
} from "lucide-react";

// Import page components
import { MyPatientsPage } from "@/components/pages/my-patients";
import { AppointmentsPage } from "@/components/pages/appointments";
import { ClaimsPage } from "@/components/pages/claims";
import { VerificationPage } from "@/components/pages/verification";
import { SettingsPage } from "@/components/pages/settings";

const sidebarItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    isActive: true,
  },
  {
    title: "User Management",
    icon: UserCheck,
  },
  {
    title: "Insurance Plans",
    icon: Shield,
  },
  {
    title: "Premium Payments",
    icon: CreditCard,
  },
  {
    title: "Claims Management",
    icon: ClipboardList,
  },
  {
    title: "Verification",
    icon: CheckCircle,
  },
  {
    title: "Logout",
    icon: LogOut,
  },
];

const recentEnrollments = [
  {
    name: "Bola Ibrahim",
    plan: "Basic Health Plan",
    time: "Today",
  },
  {
    name: "Ngozi Olawale",
    plan: "Basic Health Plan",
    time: "Today",
  },
  {
    name: "Chioma Abubakar",
    plan: "Basic Health Plan",
    time: "Today",
  },
  {
    name: "Temitope Ajagun",
    plan: "Basic Health Plan",
    time: "Today",
  },
];

const systemStatus = [
  {
    name: "Server Status",
    status: "Operational",
    color: "bg-green-500",
  },
  {
    name: "Database",
    status: "Operational",
    color: "bg-green-500",
  },
  {
    name: "Payment Gateway",
    status: "Operational",
    color: "bg-green-500",
  },
  {
    name: "SMS Service",
    status: "Degraded",
    color: "bg-yellow-500",
  },
];

export function DashboardLayout() {
  const [selectedRole, setSelectedRole] = useState('admin');
  const [currentPage, setCurrentPage] = useState('Dashboard');

  const getRoleConfig = () => {
    switch (selectedRole) {
      case 'enrollee':
        return {
          sidebarTitle: 'Enrollee Portal',
          sidebarColor: 'bg-green-600',
          welcomeText: 'Welcome back, Amaka Adeyemi',
          buttonText: 'Enrollee View',
          buttonColor: 'bg-green-600 hover:bg-green-700',
          menuItems: [
            { icon: LayoutDashboard, label: 'Dashboard', isActive: true },
            { icon: Shield, label: 'My Plans', isActive: false },
            { icon: CreditCard, label: 'My Payments', isActive: false },
            { icon: ClipboardList, label: 'My Claims', isActive: false },
            { icon: FileText, label: 'Medical History', isActive: false },
            { icon: CheckCircle, label: 'Appointments', isActive: false },
            { icon: Settings, label: 'Settings', isActive: false },
          ]
        };
      case 'healthcare':
        return {
          sidebarTitle: 'Provider Portal',
          sidebarColor: 'bg-purple-600',
          buttonColor: 'bg-purple-600',
          welcomeText: 'Welcome back, Funmilayo Chukwu',
          buttonText: 'Healthcare Provider',
          menuItems: [
            { icon: LayoutDashboard, label: 'Dashboard', isActive: true },
            { icon: Users, label: 'My Patients', isActive: false },
            { icon: Calendar, label: 'Appointments', isActive: false },
            { icon: ClipboardList, label: 'Claims', isActive: false },
            { icon: CheckCircle, label: 'Verification', isActive: false },
            { icon: Settings, label: 'Settings', isActive: false },
          ]
        };
      case 'claims':
        return {
          sidebarTitle: 'Claims Approver Portal',
          sidebarColor: 'bg-yellow-600',
          welcomeText: 'Welcome back, Blessing Abodunde',
          buttonText: 'Claims Approver',
          buttonColor: 'bg-yellow-600 hover:bg-yellow-700',
          menuItems: [
            { icon: LayoutDashboard, label: 'Dashboard', isActive: true },
            { icon: ClipboardList, label: 'Claims Review', isActive: false },
            { icon: CheckCircle, label: 'Policy Verification', isActive: false },
            { icon: FileText, label: 'Reports', isActive: false },
            { icon: Settings, label: 'Settings', isActive: false },
          ]
        };
      default: // admin
        return {
          sidebarTitle: 'Admin Portal',
          sidebarColor: 'bg-blue-600',
          welcomeText: 'Welcome back, Admin',
          buttonText: 'Admin Access',
          buttonColor: 'bg-blue-600 hover:bg-blue-700',
          menuItems: [
            { icon: LayoutDashboard, label: 'Dashboard', isActive: true },
            { icon: UserCheck, label: 'User Management', isActive: false },
            { icon: Shield, label: 'Insurance Plans', isActive: false },
            { icon: CreditCard, label: 'Premium Payments', isActive: false },
            { icon: ClipboardList, label: 'Claims Management', isActive: false },
            { icon: CheckCircle, label: 'Verification', isActive: false },
          ]
        };
    }
  };

  const roleConfig = getRoleConfig();

  const renderPageContent = () => {
    if (currentPage === 'My Patients') {
      return <MyPatientsPage />;
    }
    if (currentPage === 'Appointments') {
      return <AppointmentsPage />;
    }
    if (currentPage === 'Claims' || currentPage === 'My Claims' || currentPage === 'Claims Management' || currentPage === 'Claims Review') {
      return <ClaimsPage />;
    }
    if (currentPage === 'Verification' || currentPage === 'Policy Verification') {
      return <VerificationPage />;
    }
    if (currentPage === 'Settings') {
      return <SettingsPage />;
    }
    // Default to dashboard content
    return renderDashboardContent();
  };

  const renderDashboardContent = () => {
    switch (selectedRole) {
      case 'enrollee':
        return (
          <>
            {/* Enrollee Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card className="rounded-xl border-l-4 border-l-green-500">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    My Plan
                  </CardTitle>
                  <Shield className="h-4 w-4 text-green-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-lg font-bold">Family Plan</div>
                </CardContent>
              </Card>
              
              <Card className="rounded-xl border-l-4 border-l-blue-500">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Next Payment
                  </CardTitle>
                  <CreditCard className="h-4 w-4 text-blue-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-lg font-bold">15 July 2023</div>
                </CardContent>
              </Card>
              
              <Card className="rounded-xl border-l-4 border-l-purple-500">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    My Claims
                  </CardTitle>
                  <FileText className="h-4 w-4 text-purple-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-lg font-bold">3 this year</div>
                </CardContent>
              </Card>
              
              <Card className="rounded-xl border-l-4 border-l-yellow-500">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Health Check
                  </CardTitle>
                  <CheckCircle className="h-4 w-4 text-yellow-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-lg font-bold">Due in 2 weeks</div>
                </CardContent>
              </Card>
            </div>
          </>
        );
      case 'healthcare':
        return (
          <>
            {/* Healthcare Provider Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card className="rounded-xl border-l-4 border-l-blue-500">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Patients Today
                  </CardTitle>
                  <Users className="h-4 w-4 text-blue-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">27</div>
                </CardContent>
              </Card>
              
              <Card className="rounded-xl border-l-4 border-l-yellow-500">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Pending Claims
                  </CardTitle>
                  <FileText className="h-4 w-4 text-yellow-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12</div>
                </CardContent>
              </Card>
              
              <Card className="rounded-xl border-l-4 border-l-green-500">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Approved Claims
                  </CardTitle>
                  <CheckCircle className="h-4 w-4 text-green-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">185</div>
                </CardContent>
              </Card>
              
              <Card className="rounded-xl border-l-4 border-l-purple-500">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Avg. Processing
                  </CardTitle>
                  <AlertCircle className="h-4 w-4 text-purple-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">2.4 days</div>
                </CardContent>
              </Card>
            </div>
          </>
        );
      case 'claims':
        return (
          <>
            {/* Claims Approver Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card className="rounded-xl border-l-4 border-l-yellow-500">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Pending Review
                  </CardTitle>
                  <AlertCircle className="h-4 w-4 text-yellow-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">42</div>
                </CardContent>
              </Card>
              
              <Card className="rounded-xl border-l-4 border-l-green-500">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Approved Today
                  </CardTitle>
                  <CheckCircle className="h-4 w-4 text-green-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">18</div>
                </CardContent>
              </Card>
              
              <Card className="rounded-xl border-l-4 border-l-red-500">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Rejected Today
                  </CardTitle>
                  <AlertCircle className="h-4 w-4 text-red-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">3</div>
                </CardContent>
              </Card>
              
              <Card className="rounded-xl border-l-4 border-l-blue-500">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Processing Rate
                  </CardTitle>
                  <FileText className="h-4 w-4 text-blue-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">96%</div>
                </CardContent>
              </Card>
            </div>
          </>
        );
      default: // admin
        return (
          <>
            {/* Admin Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card className="rounded-xl">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Total Users
                  </CardTitle>
                  <Users className="h-4 w-4 text-blue-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">24,512</div>
                </CardContent>
              </Card>
              
              <Card className="rounded-xl">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Active Policies
                  </CardTitle>
                  <Shield className="h-4 w-4 text-purple-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">18,245</div>
                </CardContent>
              </Card>
              
              <Card className="rounded-xl">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Pending Claims
                  </CardTitle>
                  <FileText className="h-4 w-4 text-yellow-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">156</div>
                </CardContent>
              </Card>
              
              <Card className="rounded-xl">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Expired Policies
                  </CardTitle>
                  <AlertCircle className="h-4 w-4 text-red-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">342</div>
                </CardContent>
              </Card>
            </div>
          </>
        );
    }
  };

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <Sidebar className="border-r">
          <SidebarHeader className="p-6">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="Coverwell Logo"
                width={32}
                height={32}
                className="rounded"
              />
              <div>
                <h2 className="text-lg font-semibold text-blue-600">COVERWELL</h2>
                <p className="text-xs text-muted-foreground">stay well, stay covered</p>
              </div>
            </div>
            <div className="mt-4">
              <Button className={`w-full ${roleConfig.buttonColor} rounded-md`}>
                {roleConfig.sidebarTitle}
              </Button>
            </div>
          </SidebarHeader>
          
          <SidebarContent>
            <div className="px-3">
              <p className="mb-2 px-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                MAIN MENU
              </p>
              <SidebarMenu>
                {roleConfig.menuItems.map((item) => (
                  <SidebarMenuItem key={item.label}>
                    <SidebarMenuButton
                      isActive={currentPage === item.label}
                      className={`w-full justify-start rounded-sm ${
                        currentPage === item.label ? `${roleConfig.sidebarColor} text-white` : ""
                      }`}
                      onClick={() => setCurrentPage(item.label)}
                    >
                      <item.icon className="mr-2 h-4 w-4" />
                      {item.label}
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </div>
          </SidebarContent>
          
          <SidebarFooter className="p-4">
            <Button variant="ghost" className="w-full justify-start rounded-md text-red-600 hover:text-red-700 hover:bg-red-50">
              <LogOut className="h-4 w-4 mr-2 text-red-500" />
              <span className="text-red-500">Logout</span>
            </Button>
          </SidebarFooter>
        </Sidebar>

        <div className="flex-1">
          <header className="border-b bg-background px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <SidebarTrigger />
                {/* View Selector - Left aligned */}
                <div className="flex items-center gap-2">
                  <span className="text-sm">View as:</span>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => setSelectedRole('admin')}
                    className={`rounded-2xl ${
                      selectedRole === 'admin' 
                        ? 'bg-blue-600 text-white' 
                        : 'hover:bg-blue-600 hover:text-white'
                    }`}
                  >
                    <Shield className="h-3 w-3 mr-1" />
                    Admin
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => setSelectedRole('enrollee')}
                    className={`rounded-2xl ${
                      selectedRole === 'enrollee' 
                        ? 'bg-green-600 text-white' 
                        : 'hover:bg-green-600 hover:text-white'
                    }`}
                  >
                    <Users className="h-3 w-3 mr-1" />
                    Enrollee View
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => setSelectedRole('healthcare')}
                    className={`rounded-2xl ${
                      selectedRole === 'healthcare' 
                        ? 'bg-purple-600 text-white' 
                        : 'hover:bg-purple-600 hover:text-white'
                    }`}
                  >
                    <Stethoscope className="h-3 w-3 mr-1" />
                    Healthcare Provider
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => setSelectedRole('claims')}
                    className={`rounded-2xl ${
                      selectedRole === 'claims' 
                        ? 'bg-yellow-600 text-white' 
                        : 'hover:bg-yellow-600 hover:text-white'
                    }`}
                  >
                    <FileCheck className="h-3 w-3 mr-1" />
                    Claims Approver
                  </Button>
                </div>
              </div>
              
              <div className="flex items-center gap-2">

                {/* Language Dropdown */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="rounded-xl">
                      <Globe className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="rounded-xl">
                    <DropdownMenuItem>🇺🇸 English</DropdownMenuItem>
                    <DropdownMenuItem>🇫🇷 French</DropdownMenuItem>
                    <DropdownMenuItem>🇳🇬 Yoruba</DropdownMenuItem>
                    <DropdownMenuItem>🇳🇬 Hausa</DropdownMenuItem>
                    <DropdownMenuItem>🇳🇬 Igbo</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                
                {/* Theme Toggle */}
                <ThemeToggle />
                
                {/* Notifications Dropdown */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="relative rounded-xl">
                      <Bell className="h-4 w-4" />
                      <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full text-xs flex items-center justify-center text-white">
                        1
                      </span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-80 rounded-xl">
                    <div className="p-4">
                      <h4 className="font-semibold mb-2">Notifications</h4>
                      <div className="space-y-2">
                        <div className="p-2 rounded-lg bg-muted">
                          <p className="text-sm font-medium">New user registered</p>
                          <p className="text-xs text-muted-foreground">Tomiwa Suleiman joined 10 mins ago</p>
                        </div>
                        <div className="p-2 rounded-lg">
                          <p className="text-sm font-medium">Claim approved</p>
                          <p className="text-xs text-muted-foreground">CLM-665893 by Halima Bello</p>
                        </div>
                      </div>
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>
                
                {/* Profile Dropdown */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="relative h-8 w-8 rounded-xl">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="/placeholder-avatar.jpg" />
                        <AvatarFallback>A</AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56 rounded-xl">
                    <div className="flex items-center justify-start gap-2 p-2">
                      <div className="flex flex-col space-y-1 leading-none">
                        <p className="font-medium">Admin User</p>
                        <p className="w-[200px] truncate text-sm text-muted-foreground">
                          admin@coverwell.ng
                        </p>
                        <Badge variant="secondary" className="w-fit">
                          System Administrator
                        </Badge>
                      </div>
                    </div>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <User className="mr-2 h-4 w-4" />
                      My Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Settings className="mr-2 h-4 w-4" />
                      Account Settings
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <HelpCircle className="mr-2 h-4 w-4" />
                      Help & Support
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-red-600">
                      <LogOut className="mr-2 h-4 w-4" />
                      Sign Out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </header>

          <main className="p-6">
            {/* Dashboard Header */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h1 className="text-2xl font-semibold">Dashboard Overview</h1>
                  <p className="text-muted-foreground">{roleConfig.welcomeText}</p>
                </div>
                <Button className={`${roleConfig.buttonColor} rounded-xl`}>
                  {roleConfig.buttonText}
                </Button>
              </div>
              

            </div>
            
            {/* Dynamic Page Content */}
            {renderPageContent()}

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Enrollment Trends */}
              <Card className="rounded-xl">
                <CardHeader>
                  <CardTitle>Enrollment Trends</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-48 flex items-center justify-center text-muted-foreground">
                    <div className="text-center">
                      <div className="text-4xl mb-2">📊</div>
                      <p>Monthly enrollment chart</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Recent Enrollments */}
              <Card className="rounded-xl">
                <CardHeader>
                  <CardTitle>Recent Enrollments</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentEnrollments.map((enrollment, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-blue-600">{enrollment.name}</p>
                          <p className="text-sm text-muted-foreground">{enrollment.plan}</p>
                        </div>
                        <span className="text-sm text-muted-foreground">{enrollment.time}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* System Status */}
              <Card className="rounded-xl">
                <CardHeader>
                  <CardTitle>System Status</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {systemStatus.map((system, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="font-medium">{system.name}</span>
                        <Badge 
                          variant="secondary" 
                          className={`${system.color} text-white rounded-xl`}
                        >
                          {system.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}