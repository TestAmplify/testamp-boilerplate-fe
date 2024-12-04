"use client";
import React, { useRef } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
import { Upload } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useUserInfoContext } from "@/contexts/useUserInfoContext";

const ProfileForm = () => {
  const { userInfo, isPending } = useUserInfoContext();
  const [imageSrc, setImageSrc] = React.useState("");

  const firstName = userInfo?.firstname || "";
  const lastName = userInfo?.lastname || "";

  const fileInputRef = useRef<HTMLInputElement>(null);

  const convertToBase64 = (file: File) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => {
        resolve(reader.result);
      };

      reader.onerror = (error) => {
        reject(error);
      };
    });
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleFileUpload = async (event: any) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      const base64String = await convertToBase64(file);

      setImageSrc(base64String as string);
    } catch (error) {
      console.error("Error converting file:", error);
    }
  };

  const removeFile = () => {
    setImageSrc("");
  };

  if (isPending && !userInfo) {
    return <div className="px-3 py-1.5">Loading...</div>;
  }

  return (
    <div className="p-12">
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Profile</h2>

        <div className="">
          <p className="text-sm text-gray-600 flex items-center gap-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                stroke="#515151"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 16H12.01V16.01H12V16Z"
                stroke="#515151"
                strokeWidth="3"
                strokeLinejoin="round"
              />
              <path
                d="M12 12V8"
                stroke="#515151"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Changes you make in your profile will reflect across all workspaces.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="w-20 h-20 rounded-full bg-gray-500 overflow-hidden">
              <Avatar className="w-full h-full">
                <AvatarImage src={imageSrc} alt="" />
                <AvatarFallback>
                  {firstName[0]} {lastName[0]}
                </AvatarFallback>
              </Avatar>
              <div className="absolute bottom-1 right-3 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
            </div>
          </div>

          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            onChange={handleFileUpload}
            accept="image/png,image/jpeg"
          />
          <Button
            className="bg-blue-800 hover:bg-blue-700 text-white"
            onClick={() => {
              fileInputRef.current?.click();
            }}
          >
            <Upload className="mr-2 h-4 w-4" />
            Upload
          </Button>

          <Button variant="outline" onClick={removeFile}>
            Remove
          </Button>

          <p className="text-sm text-gray-500">
            Upload images including PNG, JPG
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="firstName">First name</Label>
            <Input id="firstName" defaultValue={firstName} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="lastName">Last name</Label>
            <Input id="lastName" defaultValue={lastName} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" defaultValue={userInfo?.email} />
          </div>

          {/* <div className="space-y-2">
            <Label htmlFor="country">Country of residence</Label>
            <Select defaultValue="nigeria">
              <SelectTrigger>
                <SelectValue>
                  <div className="flex items-center">
                    <span className="mr-2">🇳🇬</span>
                    Nigeria
                  </div>
                </SelectValue>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="nigeria">
                  <div className="flex items-center">
                    <span className="mr-2">🇳🇬</span>
                    Nigeria
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </div> */}

          <div className="space-y-2">
            <Label htmlFor="phoneNumber">Phone number</Label>
            <Input id="phoneNumber" defaultValue={userInfo?.phone} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">Home address</Label>
            <Input id="address" defaultValue="" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="postalCode">Postal code</Label>
            <Input id="postalCode" defaultValue="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileForm;
