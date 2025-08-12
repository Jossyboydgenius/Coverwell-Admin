"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Switch } from "@/components/ui/switch";
import { User, Bell, Shield, Globe, Palette, Save, Edit } from "lucide-react";

export function SettingsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Settings</h1>
          <p className="text-muted-foreground">Manage your account preferences and system settings</p>
        </div>
        <Button className="bg-purple-600 hover:bg-purple-700 rounded-md">
          <Save className="h-4 w-4 mr-2" />
          Save Changes
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Settings */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="rounded-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                Profile Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src="/placeholder-avatar.jpg" />
                  <AvatarFallback>FC</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h3 className="font-medium">Dr. Funmilayo Chukwu</h3>
                  <p className="text-sm text-muted-foreground">Healthcare Provider</p>
                  <Badge variant="secondary" className="mt-1">Verified Provider</Badge>
                </div>
                <Button variant="outline" size="sm" className="rounded-md">
                  <Edit className="h-3 w-3 mr-1" />
                  Edit
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">Full Name</label>
                  <input 
                    type="text" 
                    value="Dr. Funmilayo Chukwu" 
                    className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Email</label>
                  <input 
                    type="email" 
                    value="funmilayo.chukwu@coverwell.ng" 
                    className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Phone</label>
                  <input 
                    type="tel" 
                    value="+234 801 234 5678" 
                    className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">License Number</label>
                  <input 
                    type="text" 
                    value="MD-NG-2019-4567" 
                    className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Notification Settings */}
          <Card className="rounded-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                Notification Preferences
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Email Notifications</h4>
                  <p className="text-sm text-muted-foreground">Receive notifications via email</p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">SMS Notifications</h4>
                  <p className="text-sm text-muted-foreground">Receive notifications via SMS</p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Appointment Reminders</h4>
                  <p className="text-sm text-muted-foreground">Get reminders for upcoming appointments</p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Claim Updates</h4>
                  <p className="text-sm text-muted-foreground">Notifications for claim status changes</p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>

          {/* Security Settings */}
          <Card className="rounded-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Security & Privacy
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Two-Factor Authentication</h4>
                  <p className="text-sm text-muted-foreground">Add an extra layer of security</p>
                </div>
                <Switch />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Session Timeout</h4>
                  <p className="text-sm text-muted-foreground">Auto-logout after inactivity</p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="space-y-2">
                <Button variant="outline" className="w-full rounded-md">
                  Change Password
                </Button>
                <Button variant="outline" className="w-full rounded-md">
                  Download Data
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Settings Sidebar */}
        <div className="space-y-6">
          <Card className="rounded-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="h-5 w-5" />
                Appearance
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium">Theme</label>
                <select className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500">
                  <option>Light</option>
                  <option>Dark</option>
                  <option>System</option>
                </select>
              </div>
              
              <div>
                <label className="text-sm font-medium">Color Scheme</label>
                <div className="flex gap-2 mt-2">
                  <div className="w-6 h-6 bg-purple-600 rounded-full border-2 border-purple-600"></div>
                  <div className="w-6 h-6 bg-blue-600 rounded-full border-2 border-gray-300"></div>
                  <div className="w-6 h-6 bg-green-600 rounded-full border-2 border-gray-300"></div>
                  <div className="w-6 h-6 bg-red-600 rounded-full border-2 border-gray-300"></div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5" />
                Language & Region
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium">Language</label>
                <select className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500">
                  <option>English</option>
                  <option>French</option>
                  <option>Yoruba</option>
                  <option>Hausa</option>
                  <option>Igbo</option>
                </select>
              </div>
              
              <div>
                <label className="text-sm font-medium">Timezone</label>
                <select className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500">
                  <option>West Africa Time (WAT)</option>
                  <option>Greenwich Mean Time (GMT)</option>
                  <option>Central European Time (CET)</option>
                </select>
              </div>
              
              <div>
                <label className="text-sm font-medium">Currency</label>
                <select className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500">
                  <option>Nigerian Naira (₦)</option>
                  <option>US Dollar ($)</option>
                  <option>Euro (€)</option>
                </select>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-xl">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="outline" className="w-full rounded-md">
                Export Data
              </Button>
              <Button variant="outline" className="w-full rounded-md">
                Import Settings
              </Button>
              <Button variant="outline" className="w-full rounded-md">
                Reset to Default
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}