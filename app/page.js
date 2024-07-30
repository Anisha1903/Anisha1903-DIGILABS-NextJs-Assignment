import Screen from "@/components/Screen";
import "./globals.css";
import { Toaster } from "react-hot-toast";

export default function Home() {
  // screen
  return (
    <div className="bg-slate-700  w-full h-full overflow-hidden">
      <Screen />
      <Toaster
        toastOptions={{
          success: {
            style: {
              background: "white",
              border: "1px solid border: #644D9A",
            },
            iconTheme: {
              primary: "#180F2A",
              // primary: "#3e2670",
              secondary: "#FFFFFF",
            },
          },
        }}
      />
    </div>
  );
}
