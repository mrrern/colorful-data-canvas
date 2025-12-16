interface NavigationTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const tabs = [
  "Estado actual",
  "Resumen financiero",
  "Por cobrar",
  "Por pagar",
  "Materia Prima",
  "Tabla de precios",
  "Diario del mes",
  "Inventario",
];

const NavigationTabs = ({ activeTab, onTabChange }: NavigationTabsProps) => {
  return (
    <nav className="flex flex-wrap gap-3 mb-6">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          className={`tab-button ${activeTab === tab ? "tab-button-active" : ""}`}
        >
          {tab}
        </button>
      ))}
    </nav>
  );
};

export default NavigationTabs;
