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
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden dark">
      {/* Dark grid background */}
      <div className="fixed inset-0 -z-10">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-950 to-indigo-950" />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgb(255, 255, 255)_1px,transparent_1px),linear-gradient(to_right,rgb(255, 255, 255)_1px,transparent_10px)] bg-[size:64px_64px]" />
        
        {/* Subtle glow effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-purple-500/10 rounded-full filter blur-[128px] animate-pulse" />
          <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-blue-500/10 rounded-full filter blur-[128px] animate-pulse delay-700" />
        </div>
      </div>

      <div className="container px-4 py-8 mx-auto relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass-card rounded-xl p-6 md:p-8"
          >
            <div className="text-center mb-8">
              <h1 className="text-2xl md:text-3xl font-bold mb-2 text-gradient">
                FDP-Training Program on 12-19 MAY 2025
              </h1>
              <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto my-4 rounded-full"></div>
            </div>

            <div className="text-white/90 space-y-4 mb-8">
              <div className="flex items-start space-x-2 opacity-90 hover:opacity-100 transition-opacity appear-1 animate-appear">
                <span className="text-purple-400 text-lg">•</span>
                <p>
                  Certificate will be issued after completion of Exam within 5 days to your registered mail id directly.{" "}
                  <span className="text-purple-400 underline cursor-pointer">
                    (Check Spam folder also if mail not received.)
                  </span>
                </p>
              </div>
              <div className="flex items-start space-x-2 opacity-90 hover:opacity-100 transition-opacity appear-2 animate-appear">
                <span className="text-purple-400 text-lg">•</span>
                <p>This is CERT System so no need to fill Feedback Form.</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left column - User information */}
                <div className="space-y-6">
                  <div className="appear-1 animate-appear">
                    <Label htmlFor="fullName" className="text-white/90 mb-1.5 block">
                      Full Name*
                    </Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="bg-black/50 border-white/10 text-white focus:border-purple-500 transition-all input-shadow"
                      required
                    />
                  </div>

                  <div className="appear-2 animate-appear">
                    <Label htmlFor="email" className="text-white/90 mb-1.5 block">
                      Email ID*
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-black/50 border-white/10 text-white focus:border-purple-500 transition-all input-shadow"
                      required
                    />
                  </div>

                  <div className="appear-3 animate-appear">
                    <Label htmlFor="contactNo" className="text-white/90 mb-1.5 block">
                      Contact Number*
                    </Label>
                    <Input
                      id="contactNo"
                      name="contactNo"
                      value={formData.contactNo}
                      onChange={handleChange}
                      className="bg-black/50 border-white/10 text-white focus:border-purple-500 transition-all input-shadow"
                      required
                    />
                  </div>
                </div>

                {/* Right column - Organization information */}
                <div className="space-y-6">
                  <div className="appear-4 animate-appear">
                    <Label htmlFor="designation" className="text-white/90 mb-1.5 block">
                      Designation*
                    </Label>
                    <Select 
                      value={formData.designation} 
                      onValueChange={(value) => handleSelectChange("designation", value)}
                      required
                    >
                      <SelectTrigger className="bg-black/50 border-white/10 text-white focus:border-purple-500 transition-all input-shadow">
                        <SelectValue placeholder="Select designation" />
                      </SelectTrigger>
                      <SelectContent className="bg-black/90 border-white/10 text-white z-50">
                        {designationOptions.map((option) => (
                          <SelectItem key={option} value={option}>
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="appear-5 animate-appear">
                    <Label htmlFor="organization" className="text-white/90 mb-1.5 block">
                      College Name*
                    </Label>
                    <Input
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      className="bg-black/50 border-white/10 text-white focus:border-purple-500 transition-all input-shadow"
                      required
                    />
                  </div>

                  <div className="appear-6 animate-appear">
                    <Label htmlFor="department" className="text-white/90 mb-1.5 block">
                      Department*
                    </Label>
                    <Input
                      id="department"
                      name="department"
                      value={formData.department}
                      onChange={handleChange}
                      className="bg-black/50 border-white/10 text-white focus:border-purple-500 transition-all input-shadow"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-center appear-7 animate-appear">
                <Button
                  type="submit"
                  className="bg-gradient-to-r from-purple-600 to-indigo-700 hover:from-purple-700 hover:to-indigo-800 text-white py-2 px-8 rounded-md transition-all duration-300 transform hover:scale-105 focus:scale-95 focus:outline-none"
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