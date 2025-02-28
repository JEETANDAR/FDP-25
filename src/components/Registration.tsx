import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { motion } from "@/components/ui/motion";

const Registration = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contactNo: "",
    designation: "",
    organization: "",
    department: "",
  });

  const designationOptions = [
    "Assistant Professor",
    "Associate Professor",
    "Professor",
    "Lecturer",
    "Student",
    "Researcher",
    "Industry Professional",
    "Other"
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Form Submitted Successfully",
        description: "Thank you for registering for the FDP-Training Program.",
      });
      // Navigate to the next page after successful submission
      navigate("/confirmation");
    }, 1500);
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gray-50">
      {/* Light theme background */}
      <div className="fixed inset-0 -z-10">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-80 to-purple-50" />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(38, 89, 171, 0.8)_1px,transparent_1px),linear-gradient(to_right,rgba(30, 62, 113, 0.61)_1px,transparent_10px)] bg-[size:64px_64px]" />
        
        {/* Subtle glow effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-blue-200/30 rounded-full filter blur-[128px] animate-pulse" />
          <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-purple-200/30 rounded-full filter blur-[128px] animate-pulse delay-700" />
        </div>
      </div>

      <div className="container px-4 py-8 mx-auto relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Removed white background - removed bg-white/90 and border classes */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="backdrop-blur-md shadow-lg rounded-xl p-6 md:p-8"
          >
            <div className="text-center mb-8">
              <h1 className="text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                FDP-Training Program on 12-19 MAY 2025
              </h1>
              <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto my-4 rounded-full"></div>
            </div>

            <div className="text-gray-700 space-y-4 mb-8">
              <div className="flex items-start space-x-2 opacity-90 hover:opacity-100 transition-opacity appear-1 animate-appear">
                <span className="text-blue-600 text-lg">•</span>
                <p>
                  Certificate will be issued after completion of Exam within 5 days to your registered mail id directly.{" "}
                  <span className="text-blue-600 underline cursor-pointer">
                    (Check Spam folder also if mail not received.)
                  </span>
                </p>
              </div>
              <div className="flex items-start space-x-2 opacity-90 hover:opacity-100 transition-opacity appear-2 animate-appear">
                <span className="text-blue-600 text-lg">•</span>
                <p>This is CERT System so no need to fill Feedback Form.</p>
              </div>
            </div>

            {/* Enhanced horizontal divider */}
            <div className="relative py-4 my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full h-2 rounded-full bg-gradient-to-r from-blue-300 via-purple-400 to-blue-300 shadow-sm"></div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left column - User information */}
                <div className="space-y-6">
                  <div className="appear-1 animate-appear">
                    <Label htmlFor="fullName" className="text-gray-700 mb-1.5 block font-medium">
                      Full Name*
                    </Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="bg-white border-gray-300 text-gray-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                      required
                    />
                  </div>

                  <div className="appear-2 animate-appear">
                    <Label htmlFor="email" className="text-gray-700 mb-1.5 block font-medium">
                      Email ID*
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-white border-gray-300 text-gray-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                      required
                    />
                  </div>

                  <div className="appear-3 animate-appear">
                    <Label htmlFor="contactNo" className="text-gray-700 mb-1.5 block font-medium">
                      Contact Number*
                    </Label>
                    <Input
                      id="contactNo"
                      name="contactNo"
                      value={formData.contactNo}
                      onChange={handleChange}
                      className="bg-white border-gray-300 text-gray-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                      required
                    />
                  </div>
                </div>

                {/* Right column - Organization information */}
                <div className="space-y-6">
                  <div className="appear-4 animate-appear">
                    <Label htmlFor="designation" className="text-gray-700 mb-1.5 block font-medium">
                      Designation*
                    </Label>
                    <Select 
                      value={formData.designation} 
                      onValueChange={(value) => handleSelectChange("designation", value)}
                      required
                    >
                      <SelectTrigger className="bg-white border-gray-300 text-gray-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all">
                        <SelectValue placeholder="Select designation" />
                      </SelectTrigger>
                      <SelectContent className="bg-white border-gray-200 text-gray-800 z-50">
                        {designationOptions.map((option) => (
                          <SelectItem key={option} value={option}>
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="appear-5 animate-appear">
                    <Label htmlFor="organization" className="text-gray-700 mb-1.5 block font-medium">
                      College Name*
                    </Label>
                    <Input
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      className="bg-white border-gray-300 text-gray-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                      required
                    />
                  </div>

                  <div className="appear-6 animate-appear">
                    <Label htmlFor="department" className="text-gray-700 mb-1.5 block font-medium">
                      Department*
                    </Label>
                    <Input
                      id="department"
                      name="department"
                      value={formData.department}
                      onChange={handleChange}
                      className="bg-white border-gray-300 text-gray-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-center appear-7 animate-appear">
                <Button
                  type="submit"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-2 px-8 rounded-md transition-all duration-300 transform hover:scale-105 focus:scale-95 focus:outline-none shadow-md"
                  disabled={loading}
                >
                  {loading ? "Processing..." : "Submit and Pay"}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Registration;