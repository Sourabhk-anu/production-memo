import { useRef, useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { Download, Printer } from "lucide-react";

import DrawingPreview from "../components/DrawingPreview";
import FormSection from "../components/FormSection";
import InputField from "../components/InputField";

export default function DrawingEditor() {
    const previewRef = useRef();

    const [rows, setRows] = useState([]);
    const [editingIndex, setEditingIndex] = useState(null);

    const [serialNoInput, setSerialNoInput] = useState("");

    const [data, setData] = useState({
        size: "",
        flangeA: "",
        flangeB: "",
        boxC: "",
        boxD: "",
        depthE: "",
        capacityCFM: "",
        qtyNos: "",
        housing: "ALUMINUM ANODIZED",
        filterMedia: "FIRE RETARDANT GLASS FIBRE",
        pleatedType: "Only Air Cleanable",

        grade: "EU5",
        micronRating: "5",
        efficiency: "99% DOWN TO 5",

        initialPressureDrop: "5.5 MM WC",
        finalPressureDrop: "18 MM WC",

        mediaBonding: "IM BEDED GF PAD",
        guard: "SS WELDED MESH BOTH SIDE",
        gasket: "3 MM THK - BACK SIDE OF FLANGE",

        maxOperatingTemp: "250 Deg C.",
        noOfFolds: "10 / R. FEET",

        dimensionTolerance: "+/- 3mm",
        diagonalTolerance: "+/- 5mm",

        client: "",
        drawingNo: "NFP/SHS/2627/",
        revNo: "00",
        poNo: "",

        date: "",
        scale: "NTS",

        drawnBy: "SLK",
        checkedBy: "MSS",
        approvedBy: "SNK",

        title: "",

        holesType: "NO HOLES",
    });

    const addRow = () => {

        const rowData = {
            size: data.size,
            flangeA: data.flangeA,
            flangeB: data.flangeB,
            boxC: data.boxC,
            boxD: data.boxD,
            depthE: data.depthE,
            capacityCFM: data.capacityCFM,
            qtyNos: data.qtyNos,
        };

        if (editingIndex !== null) {

            const updatedRows = [...rows];

            updatedRows[editingIndex] = {
                ...updatedRows[editingIndex],
                ...rowData,
            };

            setRows(updatedRows);

            setEditingIndex(null);

        } else {

            setRows([
                ...rows,
                {
                    srNo: rows.length + 1,
                    ...rowData,
                },
            ]);
        }

        setData((prev) => ({
            ...prev,
            size: "",
            flangeA: "",
            flangeB: "",
            boxC: "",
            boxD: "",
            depthE: "",
            capacityCFM: "",
            qtyNos: "",
        }));

        setSerialNoInput("");
    };

    const editRow = () => {

        const srNo = Number(serialNoInput);

        const index = rows.findIndex(
            (row) => row.srNo === srNo
        );

        if (index === -1) {
            alert("Serial Number not found");
            return;
        }

        const row = rows[index];

        setData((prev) => ({
            ...prev,
            size: row.size,
            flangeA: row.flangeA,
            flangeB: row.flangeB,
            boxC: row.boxC,
            boxD: row.boxD,
            depthE: row.depthE,
            capacityCFM: row.capacityCFM,
            qtyNos: row.qtyNos,
        }));

        setEditingIndex(index);
    };

    const deleteRow = () => {

        const srNo = Number(serialNoInput);

        const updatedRows = rows
            .filter((row) => row.srNo !== srNo)
            .map((row, index) => ({
                ...row,
                srNo: index + 1,
            }));

        if (updatedRows.length === rows.length) {
            alert("Serial Number not found");
            return;
        }

        setRows(updatedRows);

        setSerialNoInput("");
    };

    const updateRow = (index, field, value) => {
        const updatedRows = [...rows];

        updatedRows[index][field] = value;

        setRows(updatedRows);
    };

    const update = (field, value) => {
        setData((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    const exportPdf = async () => {
        try {
            const element = previewRef.current;

            if (!element) {
                console.error("Preview element not found");
                return;
            }

            const canvas = await html2canvas(previewRef.current, {
                scale: 3,
                useCORS: true,
                backgroundColor: "#ffffff",

                onclone: (clonedDoc) => {
                    clonedDoc.querySelectorAll("*").forEach((el) => {
                        const style = el.style;

                        style.color = "#000";
                        style.backgroundColor = "#fff";
                        style.borderColor = "#000";
                        style.boxShadow = "none";
                    });
                },
            });

            const imgData = canvas.toDataURL("image/png");

            const pdf = new jsPDF({
                orientation: "portrait",
                unit: "mm",
                format: "a4",
            });

            const pdfWidth = 210;
            const pdfHeight = 297;

            pdf.addImage(
                imgData,
                "PNG",
                0,
                0,
                pdfWidth,
                pdfHeight
            );

            pdf.save("engineering-drawing.pdf");
        } catch (error) {
            console.error("PDF Export Error:", error);
        }
    };

    return (
        <div className="min-h-screen bg-slate-100 p-6">

            <div className="grid lg:grid-cols-[450px_1fr] gap-6">

                <div id="form-section" className="space-y-5">

                    <FormSection title="Dimensions" className="p-2">

                        <InputField
                            label="Size"
                            value={data.size}
                            onChange={(e) =>
                                update("size", e.target.value)
                            }
                        />

                        <InputField
                            label="Flange A"
                            value={data.flangeA}
                            onChange={(e) =>
                                update("flangeA", e.target.value)
                            }
                        />

                        <InputField
                            label="Flange B"
                            value={data.flangeB}
                            onChange={(e) =>
                                update("flangeB", e.target.value)
                            }
                        />

                        <InputField
                            label="Box C"
                            value={data.boxC}
                            onChange={(e) =>
                                update("boxC", e.target.value)
                            }
                        />

                        <InputField
                            label="Box D"
                            value={data.boxD}
                            onChange={(e) =>
                                update("boxD", e.target.value)
                            }
                        />

                        <InputField
                            label="Depth E"
                            value={data.depthE}
                            onChange={(e) =>
                                update("depthE", e.target.value)
                            }
                        />

                        <InputField
                            label="Capacity CFM"
                            value={data.capacityCFM}
                            onChange={(e) =>
                                update("capacityCFM", e.target.value)
                            }
                        />

                        <InputField
                            label="Qty Nos"
                            value={data.qtyNos}
                            onChange={(e) =>
                                update("qtyNos", e.target.value)
                            }
                        />

                        <InputField
                            label="Serial Number"
                            value={serialNoInput}
                            onChange={(e) =>
                                setSerialNoInput(e.target.value)
                            }
                        />

                        <div className="flex gap-2 mt-4">
                            <button
                                type="button"
                                onClick={addRow}
                                className="bg-green-600 text-white px-4 py-1 rounded"
                            >
                                {editingIndex !== null
                                    ? "Update Row"
                                    : "Add Row"}
                            </button>

                            <button
                                type="button"
                                onClick={editRow}
                                className="bg-blue-600 text-white px-4 py-1 rounded"
                            >
                                Edit Row
                            </button>

                            <button
                                type="button"
                                onClick={deleteRow}
                                className="bg-red-600 text-white px-2 py-1 rounded"
                            >
                                Delete Row
                            </button>
                        </div>
                    </FormSection>

                    <FormSection title="Notes">

                        <InputField
                            label="Pleated Type Text"
                            value={data.pleatedType}
                            onChange={(e) =>
                                update(
                                    e.target.value
                                )
                            }
                        />

                        <InputField
                            label="Grade"
                            value={data.grade}
                            onChange={(e) =>
                                update("grade", e.target.value)
                            }
                        />

                        <InputField
                            label="Micron Rating"
                            value={data.micronRating}
                            onChange={(e) =>
                                update("micronRating", e.target.value)
                            }
                        />

                        <InputField
                            label="Efficiency"
                            value={data.efficiency}
                            onChange={(e) =>
                                update("efficiency", e.target.value)
                            }
                        />

                        <InputField
                            label="Initial Pressure Drop"
                            value={data.initialPressureDrop}
                            onChange={(e) =>
                                update(
                                    "initialPressureDrop",
                                    e.target.value
                                )
                            }
                        />

                        <InputField
                            label="Final Pressure Drop"
                            value={data.finalPressureDrop}
                            onChange={(e) =>
                                update(
                                    "finalPressureDrop",
                                    e.target.value
                                )
                            }
                        />

                        <InputField
                            label="Media Bonding"
                            value={data.mediaBonding}
                            onChange={(e) =>
                                update(
                                    "mediaBonding",
                                    e.target.value
                                )
                            }
                        />

                        <InputField
                            label="Guard"
                            value={data.guard}
                            onChange={(e) =>
                                update(
                                    "guard",
                                    e.target.value
                                )
                            }
                        />

                        <InputField
                            label="Gasket"
                            value={data.gasket}
                            onChange={(e) =>
                                update(
                                    "gasket",
                                    e.target.value
                                )
                            }
                        />

                        <InputField
                            label="Max Operating Temp"
                            value={data.maxOperatingTemp}
                            onChange={(e) =>
                                update(
                                    "maxOperatingTemp",
                                    e.target.value
                                )
                            }
                        />

                        <InputField
                            label="No Of Folds"
                            value={data.noOfFolds}
                            onChange={(e) =>
                                update(
                                    "noOfFolds",
                                    e.target.value
                                )
                            }
                        />

                    </FormSection>

                    <FormSection title="Title Block">

                        <InputField
                            label="Title"
                            value={data.title}
                            onChange={(e) =>
                                update("title", e.target.value)
                            }
                        />

                        <InputField
                            label="PO Number"
                            value={data.poNo}
                            onChange={(e) =>
                                update("poNo", e.target.value)
                            }
                        />

                        <InputField
                            label="Client"
                            value={data.client}
                            onChange={(e) =>
                                update("client", e.target.value)
                            }
                        />

                        <InputField
                            label="Drawing Number"
                            value={data.drawingNo}
                            onChange={(e) =>
                                update("drawingNo", e.target.value)
                            }
                        />

                        <InputField
                            label="Date"
                            type="date"
                            value={data.date}
                            onChange={(e) =>
                                update("date", e.target.value)
                            }
                        />

                    </FormSection>

                    <div className="flex gap-3">

                        <button
                            onClick={() => window.print()}
                            className="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer"
                        >
                            <Printer size={30} />
                        </button>

                    </div>
                </div>

                <div id="preview-section" className="bg-white p-4 rounded-xl shadow">
                    <DrawingPreview
                        data={data}
                        rows={rows}
                        previewRef={previewRef}
                        editRow={editRow}
                        deleteRow={deleteRow}
                    />
                </div>

            </div>
        </div>
    );
}