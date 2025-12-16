import { useState } from "react";
import { Download } from "lucide-react";

interface TableRow {
  id: number;
  descripcion: string;
  gr: string;
  material1: string;
  clasificacion1: string;
  precio1: string;
  material2: string;
  clasificacion2: string;
  precio2: string;
  material3: string;
  clasificacion3: string;
  precio3: string;
}

const initialRows: TableRow[] = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  descripcion: "",
  gr: "",
  material1: "",
  clasificacion1: "",
  precio1: "",
  material2: "",
  clasificacion2: "",
  precio2: "",
  material3: "",
  clasificacion3: "",
  precio3: "",
}));

const PriceTable = () => {
  const [rows, setRows] = useState<TableRow[]>(initialRows);

  const handleInputChange = (
    rowId: number,
    field: keyof TableRow,
    value: string
  ) => {
    setRows((prevRows) =>
      prevRows.map((row) =>
        row.id === rowId ? { ...row, [field]: value } : row
      )
    );
  };

  const handleDownload = () => {
    const headers = [
      "Descripción",
      "Gr.",
      "Material 1",
      "Clasificación 1",
      "Precio 1",
      "Material 2",
      "Clasificación 2",
      "Precio 2",
      "Material 3",
      "Clasificación 3",
      "Precio 3",
    ];
    
    const csvContent = [
      headers.join(","),
      ...rows.map((row) =>
        [
          row.descripcion,
          row.gr,
          row.material1,
          row.clasificacion1,
          row.precio1,
          row.material2,
          row.clasificacion2,
          row.precio2,
          row.material3,
          row.clasificacion3,
          row.precio3,
        ].join(",")
      ),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "tabla_precios.csv";
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="w-full animate-fade-in">
      <div className="flex justify-end mb-4">
        <button onClick={handleDownload} className="download-button">
          Descargar
          <Download className="w-4 h-4" />
        </button>
      </div>

      <div className="overflow-x-auto rounded-lg border border-border bg-table-bg shadow-sm">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="bg-secondary px-4 py-3 text-sm font-semibold text-foreground text-left min-w-[180px]">
                Descripción
              </th>
              <th className="bg-secondary px-4 py-3 text-sm font-semibold text-foreground text-center min-w-[60px]">
                Gr.
              </th>
              <th className="table-header-cell min-w-[100px]">Material</th>
              <th className="table-header-cell min-w-[120px]">Clasificación</th>
              <th className="table-header-cell min-w-[100px]">Precio</th>
              <th className="bg-secondary px-4 py-3 text-sm font-semibold text-foreground text-center min-w-[100px]">
                Material
              </th>
              <th className="bg-secondary px-4 py-3 text-sm font-semibold text-foreground text-center min-w-[120px]">
                Clasificación
              </th>
              <th className="bg-secondary px-4 py-3 text-sm font-semibold text-foreground text-center min-w-[100px]">
                Precio
              </th>
              <th className="table-header-cell min-w-[100px]">Material</th>
              <th className="table-header-cell min-w-[120px]">Clasificación</th>
              <th className="table-header-cell min-w-[100px]">Precio</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr
                key={row.id}
                className="border-b border-table-row-border hover:bg-secondary/30 transition-colors"
                style={{ animationDelay: `${index * 30}ms` }}
              >
                <td className="px-2 py-3">
                  <input
                    type="text"
                    value={row.descripcion}
                    onChange={(e) =>
                      handleInputChange(row.id, "descripcion", e.target.value)
                    }
                    placeholder="Ingrese descripción..."
                    className="table-cell-input text-left"
                  />
                </td>
                <td className="px-2 py-3">
                  <input
                    type="text"
                    value={row.gr}
                    onChange={(e) =>
                      handleInputChange(row.id, "gr", e.target.value)
                    }
                    placeholder="-"
                    className="table-cell-input"
                  />
                </td>
                <td className="px-2 py-3 bg-primary/5">
                  <input
                    type="text"
                    value={row.material1}
                    onChange={(e) =>
                      handleInputChange(row.id, "material1", e.target.value)
                    }
                    placeholder="-"
                    className="table-cell-input"
                  />
                </td>
                <td className="px-2 py-3 bg-primary/5">
                  <input
                    type="text"
                    value={row.clasificacion1}
                    onChange={(e) =>
                      handleInputChange(row.id, "clasificacion1", e.target.value)
                    }
                    placeholder="-"
                    className="table-cell-input"
                  />
                </td>
                <td className="px-2 py-3 bg-primary/5">
                  <input
                    type="text"
                    value={row.precio1}
                    onChange={(e) =>
                      handleInputChange(row.id, "precio1", e.target.value)
                    }
                    placeholder="$0.00"
                    className="table-cell-input"
                  />
                </td>
                <td className="px-2 py-3">
                  <input
                    type="text"
                    value={row.material2}
                    onChange={(e) =>
                      handleInputChange(row.id, "material2", e.target.value)
                    }
                    placeholder="-"
                    className="table-cell-input"
                  />
                </td>
                <td className="px-2 py-3">
                  <input
                    type="text"
                    value={row.clasificacion2}
                    onChange={(e) =>
                      handleInputChange(row.id, "clasificacion2", e.target.value)
                    }
                    placeholder="-"
                    className="table-cell-input"
                  />
                </td>
                <td className="px-2 py-3">
                  <input
                    type="text"
                    value={row.precio2}
                    onChange={(e) =>
                      handleInputChange(row.id, "precio2", e.target.value)
                    }
                    placeholder="$0.00"
                    className="table-cell-input"
                  />
                </td>
                <td className="px-2 py-3 bg-primary/5">
                  <input
                    type="text"
                    value={row.material3}
                    onChange={(e) =>
                      handleInputChange(row.id, "material3", e.target.value)
                    }
                    placeholder="-"
                    className="table-cell-input"
                  />
                </td>
                <td className="px-2 py-3 bg-primary/5">
                  <input
                    type="text"
                    value={row.clasificacion3}
                    onChange={(e) =>
                      handleInputChange(row.id, "clasificacion3", e.target.value)
                    }
                    placeholder="-"
                    className="table-cell-input"
                  />
                </td>
                <td className="px-2 py-3 bg-primary/5">
                  <input
                    type="text"
                    value={row.precio3}
                    onChange={(e) =>
                      handleInputChange(row.id, "precio3", e.target.value)
                    }
                    placeholder="$0.00"
                    className="table-cell-input"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PriceTable;
