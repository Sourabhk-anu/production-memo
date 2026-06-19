import template from "../assets/drawing-template.png";
import template2 from "../assets/drawing-template2.png";

export default function DrawingPreview({ data, previewRef }) {

    return (
        <div
            ref={previewRef}
            className="relative bg-white mx-auto pt-3 px-3"
            style={{
                width: "794px",
                height: "1123px",
            }}
        >
            <img
                src={template}
                alt=""
                className="w-[200px] absolute top-[10px] right-[50px]"
            />

            <img
                src={template2}
                alt=""
                className="w-[200px] absolute top-[250px] right-[50px]"
            />

            <div
                className="
                    absolute
                    top-[200px]
                    right-[150px]
                    w-[200px]
                    text-center
                    font-bold   
                    text-md
                    py-2 text-red-600
                "
            >
                {data.holesType} ON FLANGE
            </div>

            {/* TOP TABLE */}

            <div>
                <table className="border-collapse text-center text-xs w-[530px]">
                    <thead>
                        <tr>
                            <th
                                rowSpan="2"
                                className="border border-black px-2 py-2"
                            >
                                SR. NO
                            </th>

                            <th
                                rowSpan="2"
                                className="border border-black"
                            >
                                SIZE
                            </th>

                            <th
                                colSpan="2"
                                className="border border-black px-2 py-2"
                            >
                                FLANGE
                            </th>

                            <th
                                colSpan="2"
                                className="border border-black px-2 py-2"
                            >
                                BOX
                            </th>

                            <th
                                rowSpan="2"
                                className="border border-black px-2 py-2"
                            >
                                DEPTH
                            </th>

                            <th
                                rowSpan="2"
                                className="border border-black px-2 py-2"
                            >
                                CAPACITY CFM
                            </th>

                            <th
                                rowSpan="2"
                                className="border border-black px-2 py-2"
                            >
                                QTY NOS
                            </th>
                        </tr>

                        <tr>
                            <th className="border border-black px-2 py-1">
                                A
                            </th>

                            <th className="border border-black px-2 py-1">
                                B
                            </th>

                            <th className="border border-black px-2 py-1">
                                C
                            </th>

                            <th className="border border-black px-2 py-1">
                                D
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td className="border border-black p-2">
                                {data.srNo}
                            </td>

                            <td className="border border-black p-2">
                                {data.size}
                            </td>

                            <td className="border border-black p-2">
                                {data.flangeA}
                            </td>

                            <td className="border border-black p-2">
                                {data.flangeB}
                            </td>

                            <td className="border border-black p-2">
                                {data.boxC}
                            </td>

                            <td className="border border-black p-2">
                                {data.boxD}
                            </td>

                            <td className="border border-black p-2">
                                {data.depthE}
                            </td>

                            <td className="border border-black p-2">
                                {data.capacityCFM}
                            </td>

                            <td className="border border-black p-2">
                                {data.qtyNos}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* NOTES */}

            <div className="absolute top-[170px] left-[5%] text-[14px] font-serif">

                <p className="font-bold">1. ALL DIMENSIONS ARE IN MM</p>

                <p className="mt-2 font-bold">
                    2. MATERIAL OF CONSTRUCTION
                </p>

                <p className="ml-6">
                    <span className="font-bold">a. HOUSING -</span> {data.housing}
                </p>

                <p className="ml-6">
                    <span className="font-bold">b. FILTER MEDIA -</span> {data.filterMedia}
                </p>

                <p className="ml-12">
                    (Pleated Type - Only Air Cleanable)
                </p>

                <p><span className="font-bold">3. GRADE -</span> {data.grade}</p>

                <p>
                    <span className="font-bold">4. MICRON RATING -</span> {data.micronRating}
                </p>

                <p>
                    <span className="font-bold">5. EFFICIENCY -</span> {data.efficiency}
                </p>

                <p>
                    <span className="font-bold">6. INITIAL PRESSURE DROP -</span> {data.initialPressureDrop}
                </p>

                <p>
                    <span className="font-bold">7. FINAL PRESSURE DROP -</span> {data.finalPressureDrop}
                </p>

                <p>
                    <span className="font-bold">8. Media Bonding -</span> {data.mediaBonding}
                </p>

                <p>
                    <span className="font-bold">9. Guard -</span> {data.guard}
                </p>

                <p>
                    <span className="font-bold">10. Gasket -</span> {data.gasket}
                </p>

                <p>
                    <span className="font-bold">11. Maxi. Operating Temp -</span> {data.maxOperatingTemp}
                </p>

                <p>
                    <span className="font-bold">12. NO OF FOLDS -</span> {data.noOfFolds}
                </p>

            </div>

            {/* TOLERANCE */}

            <div className="absolute top-[520px] left-[20%]">

                <h3 className="font-bold text-lg">
                    Tolerance :
                </h3>

                <p>
                    <span className="font-bold">1. Dimension -</span> {data.dimensionTolerance}
                </p>

                <p>
                    <span className="font-bold">2. Diagonal -</span> {data.diagonalTolerance}
                </p>

            </div>

            {/* TITLE BLOCK */}

            <div className="absolute top-[500px] right-[-150px] w-[33%] text-[8px]">

                <p>
                    CLIENT: {data.client}
                </p>

                <p>
                    DRG. NO.: {data.drawingNo}
                </p>

                <p>
                    REV. NO.: {data.revNo}
                </p>

                <p>
                    DATE: {data.date}
                </p>

                <p>
                    SCALE: {data.scale}
                </p>

                <p>
                    DRN BY: {data.drawnBy}
                </p>

                <p>
                    CHD BY: {data.checkedBy}
                </p>

                <p>
                    APPD BY: {data.approvedBy}
                </p>

                <div className="mt-3 text-center absolute right-[260px] top-[50px] text-[8px] w-full">
                    <h2 className="font-bold text-xl">
                        {data.title}
                    </h2>

                    <h3 className="font-bold">
                        {data.subtitle}
                    </h3>
                </div>
            </div>
        </div>
    );
}