// page.js

import Screen from "@/components/Screen";
import { Toaster } from "react-hot-toast";
import "./globals.css";

export default function Home() {
  return (
    <div className="w-full h-full overflow-hidden">
      <Screen />
      <Toaster
        toastOptions={{
          success: {
            style: {
              background: "white",
              border: "1px solid #644D9A",
            },
            iconTheme: {
              primary: "#180F2A",
              secondary: "#FFFFFF",
            },
          },
        }}
      />
    </div>
  );
}
