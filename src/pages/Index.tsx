import { useState } from "react";
import { Pencil } from "lucide-react";
import NavigationTabs from "@/components/NavigationTabs";
import PriceTable from "@/components/PriceTable";

const Index = () => {
  const [activeTab, setActiveTab] = useState("Tabla de precios");

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary px-6 py-4 flex items-center justify-between">
        <div />
        <button className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors">
          <Pencil className="w-5 h-5 text-primary-foreground" />
        </button>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8 max-w-[1600px]">
        <NavigationTabs activeTab={activeTab} onTabChange={setActiveTab} />

        {activeTab === "Tabla de precios" && <PriceTable />}

        {activeTab !== "Tabla de precios" && (
          <div className="flex items-center justify-center h-64 bg-card rounded-lg border border-border">
            <p className="text-muted-foreground text-lg">
              Sección "{activeTab}" en desarrollo
            </p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-muted py-4 mt-auto">
        <div className="container mx-auto px-6 text-center text-muted-foreground text-sm">
          Sistema de Gestión
        </div>
      </footer>
    </div>
  );
};

export default Index;
