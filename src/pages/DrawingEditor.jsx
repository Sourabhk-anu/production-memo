import { useRef, useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { Download, Printer } from "lucide-react";

import DrawingPreview from "../components/DrawingPreview";
import FormSection from "../components/FormSection";
import InputField from "../components/InputField";

export default function DrawingEditor() {
    const previewRef = useRef();

    const [data, setData] = useState({
        srNo: "01",
        size: '18" x 36" x 12"',
        flangeA: "457",
        flangeB: "915",
        boxC: "397",
        boxD: "855",
        depthE: "300",
        capacityCFM: "2250",
        qtyNos: "04",

        housing: "ALUMINUM ANODIZED",
        filterMedia: "FIRE RETARDANT GLASS FIBRE",

        grade: "EU5",
        micronRating: "5 MICRON",
        efficiency: "99% DOWN TO 5 MICRON",

        initialPressureDrop: "5.5 MM WC",
        finalPressureDrop: "18 MM WC",

        mediaBonding: "IM BEDED GF PAD",
        guard: "SS WELDED MESH BOTH SIDE",
        gasket: "3 MM THK - BACK SIDE OF FLANGE",

        maxOperatingTemp: "250 Deg C.",
        noOfFolds: "10 / R. FEET",

        dimensionTolerance: "+/- 3mm",
        diagonalTolerance: "+/- 5mm",

        client: "ELICON PHARMA, VASAI",
        drawingNo: "NFP/AY22/3803-2",
        revNo: "00",

        date: "15.03.22",
        scale: "NTS",

        drawnBy: "SLK",
        checkedBy: "MSS",
        approvedBy: "SNK",

        title: "FLANGE TYPE",
        subtitle: "EU5 (5 MICRON)",

        holesType: "NO HOLES"
    });

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

                    <FormSection title="Dimensions">
                        {Object.keys(data)
                            .slice(0, 9)
                            .map((key) => (
                                <InputField
                                    key={key}
                                    label={key}
                                    value={data[key]}
                                    onChange={(e) =>
                                        update(key, e.target.value)
                                    }
                                />
                            ))}
                    </FormSection>

                    <FormSection title="Material">
                        <InputField
                            label="Housing"
                            value={data.housing}
                            onChange={(e) =>
                                update(
                                    "housing",
                                    e.target.value
                                )
                            }
                        />

                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Holes Option
                            </label>

                            <select
                                value={data.holesType}
                                onChange={(e) =>
                                    setData({
                                        ...data,
                                        holesType: e.target.value,
                                    })
                                }
                                className="w-full border rounded-md p-2"
                            >
                                <option value="HOLES">HOLES</option>
                                <option value="NO HOLES">NO HOLES</option>
                            </select>
                        </div>

                        <InputField
                            label="Filter Media"
                            value={data.filterMedia}
                            onChange={(e) =>
                                update(
                                    "filterMedia",
                                    e.target.value
                                )
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
                        previewRef={previewRef}
                    />
                </div>

            </div>
        </div>
    );
}