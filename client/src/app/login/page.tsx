import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

export default function Component() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center text-black ">
      <div className="max-w-sm rounded-lg shadow-lg bg-white py-8 px-12 space-y-6 border border-zinc-200 border-gray-200 dark:border-gray-700 dark:border-zinc-800">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold">Hello</h2>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <Input
              id="email"
              placeholder="abcd@example.com"
              required
              type="email"
            />
          </div>
          <div className="space-y-2">
            <Input id="password" required type="password" />
          </div>
          <Button className="w-full bg-black text-white" variant="outline">
            <div className="flex items-center justify-center">Login</div>
          </Button>
        </div>
      </div>
    </div>
  );
}
