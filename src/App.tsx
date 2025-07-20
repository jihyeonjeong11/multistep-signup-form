import { useState } from "react";
import { Button } from "./components/ui/button";
import Showcase from "./_sandbox/Showcase";
import Signup from "./components/Signup";
import { Toaster } from "sonner";

function App() {
  const [showDevShowcase, setShowDebShowcase] = useState(false);

  const devSwitcher = () => {
    setShowDebShowcase((p) => !p);
  };

  if (showDevShowcase) {
    return <Showcase devSwitcher={devSwitcher} />;
  }

  return (
    <div className="w-full min-h-screen">
      <Signup />
      {process.env.NODE_ENV === "development" && (
        <Button
          onClick={devSwitcher}
          variant="primary"
          className="fixed right-4 top-4"
        >
          Dev:Check showcases
        </Button>
      )}
      <Toaster />
    </div>
  );
}

export default App;
